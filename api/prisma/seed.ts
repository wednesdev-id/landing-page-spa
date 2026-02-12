import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const email = 'ceo@wednesdev.id';
    const password = 'harirabu';
    const role = 'admin';

    // Check if user exists
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name: 'CEO',
                role,
            },
        });
        console.log(`User ${email} created successfully.`);
    } else {
        // Optionally update password if needed
        const hashedPassword = await bcrypt.hash(password, 10);
        await prisma.user.update({
            where: { email },
            data: {
                password: hashedPassword,
                role,
            },
        });
        console.log(`User ${email} already exists. Password updated.`);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
