const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send({ photo: 'json' });
});

router.get('/random', async (req, res) => {
  res.send({ photo: 'random' });
});

router.get('/:uid', async (req, res) => {
  res.send({ uid: req.params.uid });
});

module.exports = router;
