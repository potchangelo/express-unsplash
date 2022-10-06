const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send({ user: 'json' });
});

router.get('/:username', async (req, res) => {
  res.send({ username: req.params.username });
});

module.exports = router;
