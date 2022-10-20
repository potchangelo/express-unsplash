const prisma = require('./client');
const { seedUsers, seedPhotos, seedTopics } = require('./seeds');

async function seed() {
  await seedUsers();
  await seedPhotos();
  await seedTopics();
}

seed()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
