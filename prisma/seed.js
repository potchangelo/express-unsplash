const prisma = require('./client');
const { seedUsers } = require('./seeds');

async function seed() {
  await seedUsers();
}

seed()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
