const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send({ topics: 'json' });
});

router.get('/:uidOrSlug', async (req, res) => {
  res.send({ uidOrSlug: req.params.uidOrSlug });
});

module.exports = router;
