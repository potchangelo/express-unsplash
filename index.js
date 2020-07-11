const express = require('express');
const { sequelize, Photo, PhotoUrl, User } = require('./models');

const app = express();

app.get('/', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.send('OK');
  }
  catch (error) {
    console.error(error);
    res.send('Error');
  }
});

app.get('/photo', async (req, res) => {
  let photoArray = [];
  try {
    photoArray = await Photo.findAll({
      include: [
        { model: User, as: 'user' },
        { model: PhotoUrl, as: 'photoUrl' }
      ]
    });
  }
  catch (error) {
    console.error(error);
  }
  res.json(photoArray);
});

app.get('/photo-url', async (req, res) => {
  let photoUrlArray = [];
  try {
    photoUrlArray = await PhotoUrl.findAll({
      include: [
        { model: Photo, as: 'photo' }
      ]
    });
  }
  catch (error) {
    console.error(error);
  }
  res.json(photoUrlArray);
});

app.get('/user', async (req, res) => {
  let userArray = []; 
  try {
    userArray = await User.findAll({
      include: [
        { model: Photo, as: 'photos' }
      ]
    });
  }
  catch (error) {
    console.error(error);
  }
  res.json(userArray);
});

app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});