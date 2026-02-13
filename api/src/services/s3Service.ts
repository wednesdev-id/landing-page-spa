import { S3Client, PutObjectCommand, GetObjectCommand, CreateBucketCommand, HeadBucketCommand, PutBucketPolicyCommand } from '@aws-sdk/client-s3';
import crypto from 'crypto';

const bucketName = process.env.AWS_BUCKET_NAME || 'spapos-assets';

const s3Client = new S3Client({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID ? process.env.AWS_ACCESS_KEY_ID.trim() : '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ? process.env.AWS_SECRET_ACCESS_KEY.trim() : '',
    },
    endpoint: process.env.AWS_ENDPOINT ? process.env.AWS_ENDPOINT.replace(/\/$/, '') : undefined,
    forcePathStyle: true, // Needed for MinIO
    requestChecksumCalculation: 'WHEN_REQUIRED', // Fix for MinIO/S3 compatible services
    responseChecksumValidation: 'WHEN_REQUIRED', // Fix for MinIO/S3 compatible services
});

// Debug Log for S3 Configuration
console.log('--- S3 Configuration Debug ---');
console.log('Region:', process.env.AWS_REGION);
console.log('Endpoint:', process.env.AWS_ENDPOINT);
console.log('Bucket:', bucketName);
console.log('Access Key ID:', process.env.AWS_ACCESS_KEY_ID ? `${process.env.AWS_ACCESS_KEY_ID.trim().substring(0, 5)}...` : 'Not Set');
console.log('Secret Key Length (Original):', process.env.AWS_SECRET_ACCESS_KEY ? process.env.AWS_SECRET_ACCESS_KEY.length : 0);
console.log('Secret Key Length (Trimmed):', process.env.AWS_SECRET_ACCESS_KEY ? process.env.AWS_SECRET_ACCESS_KEY.trim().length : 0);
console.log('------------------------------');

class S3Service {
    private isBucketChecked = false;

    private async setPublicPolicy() {
        try {
            const policy = {
                Version: "2012-10-17",
                Statement: [
                    {
                        Sid: "PublicReadGetObject",
                        Effect: "Allow",
                        Principal: "*",
                        Action: "s3:GetObject",
                        Resource: `arn:aws:s3:::${bucketName}/*`
                    }
                ]
            };

            const command = new PutBucketPolicyCommand({
                Bucket: bucketName,
                Policy: JSON.stringify(policy)
            });

            await s3Client.send(command);
            console.log(`Public read policy set for bucket: ${bucketName}`);
        } catch (error) {
            console.error('Error setting bucket policy:', error);
        }
    }

    private async ensureBucketExists() {
        if (this.isBucketChecked) return;

        try {
            await s3Client.send(new HeadBucketCommand({ Bucket: bucketName }));
            // Bucket exists, ensure policy is set (idempotent-ish, good for ensuring access)
            await this.setPublicPolicy();
            this.isBucketChecked = true;
        } catch (error: any) {
            if (error.name === 'NotFound' || error.$metadata?.httpStatusCode === 404) {
                console.log(`Bucket ${bucketName} does not exist. Creating...`);
                try {
                    await s3Client.send(new CreateBucketCommand({ Bucket: bucketName }));
                    console.log(`Bucket ${bucketName} created successfully.`);
                    await this.setPublicPolicy();
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
            // ACL: 'public-read', // Commented out to prevent 403 on MinIO setups that don't support ACLs
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
