require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { photosRouter, usersRouter, topicsRouter, searchRouter } = require('./routers');

const app = express();
const port = Number(process.env.PORT || process.env.APP_PORT);

app.use(cors());

app.get('/', async (req, res) => {
  let statusMessage = 'Connection OK';
  let status = 200;
  res.status(status).send(`Express Unsplash-cloned API by Zinglecode (for educational purposes only), ${statusMessage}.`);
});

app.use('/photos', photosRouter);
app.use('/users', usersRouter);
app.use('/topics', topicsRouter);
app.use('/search', searchRouter);

app.listen(port, () => {
  console.log(`Express Unsplash-cloned API run on port ${port}!`);
});
