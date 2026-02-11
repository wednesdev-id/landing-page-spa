export default {
    earlyAccess: true,
    schema: {
        kind: 'single',
        filePath: './api/prisma/schema.prisma',
    },
    datasources: {
        db: {
            url: process.env.DATABASE_URL
        }
    }
}
