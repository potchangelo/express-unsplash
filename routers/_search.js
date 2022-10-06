const express = require('express');

const router = express.Router();

router.get('/photos', async (req, res) => {
  res.send({ photos: 'search' });
});

router.get('/users', async (req, res) => {
  res.send({ users: 'search' });
});

module.exports = router;
