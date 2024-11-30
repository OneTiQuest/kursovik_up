import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const roles = await prisma.role.createManyAndReturn({
        data: [
            {name: 'admin'},
            {name: 'guest'}
        ]
    });
    await prisma.navigation.create({data: {name: 'Главная', path: '/'}})
}

main()
    .then(() => {
        console.log('Данные успешно инициированы :)');
    })
    .catch(async (e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(prisma.$disconnect);