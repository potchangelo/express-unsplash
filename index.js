require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const { photoController, userController } = require('./controllers');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', async (req, res) => {
  let message = 'Connection OK', status = 200;
  try {
    await sequelize.authenticate();
  }
  catch (error) {
    console.error(error);
    message = 'Connection Error';
    status = 502;
  }
  res.status(status);
  res.send(`Express Unsplash-cloned API by Zinglecode (for educational purposes only), ${message}.`);
});

app.get('/photos', photoController.getPhotos);
app.get('/photos/:uid', photoController.getPhoto);

app.get('/users/:uid', userController.getUser);
app.get('/users/:uid/photos', userController.getUserPhotos);

app.listen(port, () => {
  console.log(`Express Unsplash-cloned API run on port ${port}!`);
});