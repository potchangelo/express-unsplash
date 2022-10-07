const express = require('express');
const prisma = require('../prisma/client');

const router = express.Router();

router.get('/', async (req, res) => {
  let users = [];
  // try {
  //   const usersRaw = await prisma.$queryRaw`
  //     SELECT *
  //     FROM "User"
  //   `;
  //   console.log(usersRaw);
  // } catch (error) {
  //   console.error(error);
  //   return res.status(500).json({
  //     errorCode: 500,
  //     errorMessage: 'Error on get user',
  //   });
  // }
  res.status(200).json({ users });
});

router.get('/:username', async (req, res) => {
  const username = req.params.username;
  let user = null;
  try {
    user = await prisma.user.findUnique({
      where: { username },
      include: { avatar: true },
    });
    if (!user) throw new Error('not found')
  } catch (error) {
    console.error(error);
    if (error.message === 'not found') {
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
