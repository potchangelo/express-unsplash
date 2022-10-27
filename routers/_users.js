const { Prisma } = require('@prisma/client');
const express = require('express');
const prisma = require('../prisma/client');

const router = express.Router();

router.get('/', async (req, res) => {
  let users = [];
  try {
    users = await prisma.user.findMany({
      include: { avatar: true },
      orderBy: { id: 'desc' },
      take: 3,
    });
    users.sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errorCode: 500,
      errorMessage: 'Error on get user',
    });
  }
  res.status(200).json({ users });
});

router.get('/:username', async (req, res) => {
  const { username } = req.params;
  const { includedPhotos, photosBeforeId } = req.query;

  let photos = false;
  if (includedPhotos === '1') {
    photos = {
      include: { src: true, topics: true },
      take: 12,
      orderBy: { id: 'desc' },
    };
    if (!!photosBeforeId) {
      photos.where = { id: { lt: +photosBeforeId } };
    }
  }

  let user = null;
  try {
    user = await prisma.user.findUniqueOrThrow({
      where: { username },
      include: { avatar: true, photos },
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

  res.status(200).json({ user });
});

module.exports = router;
