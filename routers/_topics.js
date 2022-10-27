const { Prisma } = require('@prisma/client');
const express = require('express');
const prisma = require('../prisma/client');

const router = express.Router();

router.get('/', async (req, res) => {
  let topics = [];
  try {
    topics = await prisma.topic.findMany({
      orderBy: [{ isFeatured: 'desc' }, { createdAt: 'desc' }],
      include: { cover: true },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errorCode: 500,
      errorMessage: 'Error on get topics',
    });
  }
  res.status(200).json({ topics });
});

router.get('/:uidOrSlug', async (req, res) => {
  const { uidOrSlug } = req.params;
  const { includedPhotos, photosBeforeId } = req.query;

  let photos = false;
  if (includedPhotos === '1') {
    photos = {
      include: { src: true, user: { include: { avatar: true } }, topics: true },
      take: 12,
      orderBy: { id: 'desc' },
    };
    if (!!photosBeforeId) {
      photos.where = { id: { lt: +photosBeforeId } };
    }
  }

  let topic = null;
  try {
    topic = await prisma.topic.findFirstOrThrow({
      where: {
        OR: [{ uid: uidOrSlug }, { slug: uidOrSlug }],
      },
      include: { cover: true, photos },
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
