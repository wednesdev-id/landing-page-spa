import prisma from '../../prisma/client.js'; // Keep .js extension for ES modules or update to .ts if using ts-node/bundler correctly.
// Actually, with ts-node/tsx we usually ommit extension or use .js if type: module. 
// Given package.json type: module, imports should have .js extension or use a bundler/loader that handles it.
// Let's stick to .js extension for local imports as per ESM standards in Node.

// Wait, we are converting to TS. If we run with ts-node, we might need to adjust.
// Let's use clean imports and let module resolution handle it, or keep .js
import { Prisma } from '@prisma/client';

class PostRepository {
    async findAll() {
        return prisma.post.findMany({
            where: { published: true },
            orderBy: { createdAt: 'desc' },
        });
    }

    async findBySlug(slug: string) {
        return prisma.post.findUnique({
            where: { slug },
        });
    }

    async create(data: Prisma.PostCreateInput) {
        return prisma.post.create({
            data,
        });
    }

    async delete(id: string) {
        return prisma.post.delete({
            where: { id },
        });
    }
}

export default new PostRepository();
