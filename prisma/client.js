const { PrismaClient } = require('@prisma/client');

const options = { errorFormat: 'pretty' };
if (process.env.NODE_ENV === 'test') {
  options.log = ['error'];
} else {
  options.log = ['info', 'warn', 'error'];
}

const prisma = new PrismaClient(options);
module.exports = prisma;
