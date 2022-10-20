const { Prisma } = require('@prisma/client');
const express = require('express');
const prisma = require('../prisma/client');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send({ topics: 'json' });
});

router.get('/:uidOrSlug', async (req, res) => {
  const { uidOrSlug } = req.params;
  let topic = null;
  try {
    topic = await prisma.topic.findFirstOrThrow({
      where: {
        OR: [
          { uid: uidOrSlug },
          { slug: uidOrSlug }
        ]
      },
      include: { cover: true }
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Prisma.NotFoundError) {
      return res.status(404).json({
        errorCode: 404,
        errorMessage: 'User not found',
      });
    }
    return res.status(500).json({
      errorCode: 500,
      errorMessage: 'Error on get user',
    });
  }
  res.status(200).json({ topic });
});

module.exports = router;
