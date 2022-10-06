require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { photoRouter, userRouter, topicsRouter, searchRouter } = require('./routers');

const app = express();
const port = Number(process.env.PORT || process.env.APP_PORT);

app.use(cors());

app.get('/', async (req, res) => {
  let statusMessage = 'Connection OK';
  let status = 200;
  res.status(status).send(`Express Unsplash-cloned API by Zinglecode (for educational purposes only), ${statusMessage}.`);
});

app.use('/photos', photoRouter);
app.use('/users', userRouter);
app.use('/topics', topicsRouter);
app.use('/search', searchRouter);

app.listen(port, () => {
  console.log(`Express Unsplash-cloned API run on port ${port}!`);
});
