const express = require('express');
const prisma = require('../prisma/client');

const router = express.Router();

router.get('/photos', async (req, res) => {
  const { q, beforeId } = req.query;
  if (!q) {
    return res.status(200).json({ photos: [] });
  }
  const where = { description: { contains: q, mode: 'insensitive' } };
  if (!!beforeId) {
    where.id = { lt: +beforeId };
  }

  let photos = [];
  try {
    photos = await prisma.photo.findMany({
      where,
      include: { src: true, user: { include: { avatar: true } }, topics: true },
      orderBy: { id: 'desc' },
      take: 12,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errorCode: 500,
      errorMessage: 'Error on search photos',
    });
  }

  res.send({ photos });
});

router.get('/users', async (req, res) => {
  const { q, beforeId } = req.query;
  if (!q) {
    return res.status(200).json({ users: [] });
  }
  const where = {
    OR: [{ username: { contains: q, mode: 'insensitive' } }, { displayName: { contains: q, mode: 'insensitive' } }],
  };
  if (!!beforeId) {
    where.id = { lt: +beforeId };
  }

  let users = [];
  try {
    users = await prisma.user.findMany({
      where,
      include: { avatar: true, photos: { include: { src: true } } },
      orderBy: { id: 'desc' },
      take: 12,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errorCode: 500,
      errorMessage: 'Error on search users',
    });
  }

  res.send({ users });
});

module.exports = router;
