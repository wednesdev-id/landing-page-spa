import { S3Client, PutObjectCommand, GetObjectCommand, CreateBucketCommand, HeadBucketCommand } from '@aws-sdk/client-s3';
import crypto from 'crypto';

const bucketName = process.env.AWS_BUCKET_NAME || 'spapos-assets';

const s3Client = new S3Client({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    },
    endpoint: process.env.AWS_ENDPOINT,
    forcePathStyle: true, // Needed for MinIO
});

class S3Service {
    private isBucketChecked = false;

    private async ensureBucketExists() {
        if (this.isBucketChecked) return;

        try {
            await s3Client.send(new HeadBucketCommand({ Bucket: bucketName }));
            this.isBucketChecked = true;
        } catch (error: any) {
            if (error.name === 'NotFound' || error.$metadata?.httpStatusCode === 404) {
                console.log(`Bucket ${bucketName} does not exist. Creating...`);
                try {
                    await s3Client.send(new CreateBucketCommand({ Bucket: bucketName }));
                    console.log(`Bucket ${bucketName} created successfully.`);
                    this.isBucketChecked = true;
                } catch (createError) {
                    console.error('Error creating bucket:', createError);
                }
            } else {
                console.error('Error checking bucket:', error);
            }
        }
    }

    /**
     * Upload a file to S3
     * @param file - The file object from Multer
     * @returns The public URL of the uploaded file
     */
    async uploadFile(file: Express.Multer.File): Promise<string> {
        await this.ensureBucketExists();

        const fileExtension = file.originalname.split('.').pop();
        const randomString = crypto.randomBytes(16).toString('hex');
        const fileName = `${randomString}.${fileExtension}`;
        const key = `uploads/${fileName}`; // Clean path

        const command = new PutObjectCommand({
            Bucket: bucketName,
            Key: key,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: 'public-read', // Make file publicly accessible if supported by bucket policy
        });

        try {
            await s3Client.send(command);

            // Construct public URL
            // Ensure endpoint does not end with slash
            const endpoint = process.env.AWS_ENDPOINT?.replace(/\/$/, '');
            // For MinIO/S3 path style: endpoint/bucket/key
            return `${endpoint}/${bucketName}/${key}`;
        } catch (error) {
            console.error('Error uploading file to S3:', error);
            throw new Error('Failed to upload file to storage');
        }
    }

    /**
     * Delete a file from S3
     * @param fileUrl - The full public URL of the file
     */
    async deleteFile(fileUrl: string): Promise<void> {
        // Extract key from URL
        // Example: https://minio.zeabur.app/spapos-assets/uploads/filename.jpg
        // Key: uploads/filename.jpg
        try {
            const url = new URL(fileUrl);
            const pathParts = url.pathname.split('/');
            // pathParts[0] is empty, pathParts[1] is bucket, rest is key
            if (pathParts.length < 3) return;

            const key = pathParts.slice(2).join('/');

            // TODO: Implement DeleteObjectCommand
            // const command = new DeleteObjectCommand({ Bucket: bucketName, Key: key });
            // await s3Client.send(command);
        } catch (error) {
            console.error('Error deleting file from S3:', error);
        }
    }
}

export default new S3Service();
