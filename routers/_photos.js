const { Prisma } = require('@prisma/client');
const express = require('express');
const prisma = require('../prisma/client');

const router = express.Router();

router.get('/', async (req, res) => {
  const { beforeId } = req.query;
  const where = {};
  if (!!beforeId) {
    where.id = { lt: +beforeId };
  }
  let photos = [];
  try {
    photos = await prisma.photo.findMany({
      where,
      include: { src: true, user: true, topics: true },
      orderBy: { id: 'desc' },
      take: 12
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errorCode: 500,
      errorMessage: 'Error on get photos',
    });
  }
  res.status(200).json({ photos });
});

router.get('/random', async (req, res) => {
  let photo = null;
  try {
    const latestPhotos = await prisma.photo.findMany({
      include: { src: true, user: true, topics: true },
      orderBy: { id: 'desc' },
      take: 12
    });
    photo = latestPhotos[Math.floor(Math.random() * latestPhotos.length)]
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errorCode: 500,
      errorMessage: 'Error on get random user',
    });
  }
  res.send({ photo });
});

router.get('/:uid', async (req, res) => {
  const { uid } = req.params;
  let photo = null;
  try {
    photo = await prisma.photo.findUniqueOrThrow({
      where: { uid },
      include: { src: true, user: true, topics: true },
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Prisma.NotFoundError) {
      return res.status(404).json({
        errorCode: 404,
        errorMessage: 'Photo not found',
      });
    }
    return res.status(500).json({
      errorCode: 500,
      errorMessage: 'Error on get photo',
    });
  }
  res.status(200).json({ photo });
});

module.exports = router;
