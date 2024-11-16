import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const roles = await prisma.role.createManyAndReturn({
        data: [
            {name: 'guest'},
            {name: 'admin'}
        ]
    });
    const [guest, admin] = roles
    console.log(guest);
    console.log(admin);
    const users = await prisma.user.createManyAndReturn({
        data: [
            {
                name: 'maria',
                email: 'maria@gmail.com',
                login: 'maria',
                phone: '8 (952) 321 12 31',
                pass: '$2b$14$rIxWWCnSi.qK.amy3FG2.OToq2UalaOIyqy2gQYGYyaZoUsCy97U6'
            },
            {
                login: 'guest',
                pass: ''
            }
        ]
    });

    const [maria, guestUser] = users;

    await prisma.userOnRole.createMany({data: [
        {roleId: guest.id, userId: guestUser.id},
        {roleId: admin.id, userId: maria.id},
    ]})

}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });