require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const { photoController, userController } = require('./controllers');

const app = express();

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
  res.send(message);
});

app.get('/photos', photoController.getPhotos);
app.get('/photos/:uid', photoController.getPhoto);

app.get('/users/:uid', userController.getUser);
app.get('/users/:uid/photos', userController.getUserPhotos);

app.listen(process.env.PORT || 8080, () => {
  console.log('Express Unsplash run on port 8080!');
});