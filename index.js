require('dotenv').config();
require('newrelic');
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const { photoController, userController, topicController, searchController } = require('./controllers');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

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
  res
  .status(status)
  .send(`Express Unsplash-cloned API by Zinglecode (for educational purposes only), ${message}.`);
});

app.get('/photos', photoController.getPhotos);
app.get('/photos/random', photoController.getRandomPhoto);
app.get('/photos/:uid', photoController.getPhoto);

app.get('/users', userController.getRandomUsers);
app.get('/users/:username', userController.getUser);

app.get('/topics', topicController.getTopics);
app.get('/topics/:uidOrSlug', topicController.getTopic);

app.get('/search/photos', searchController.searchPhotos);
app.get('/search/users', searchController.searchUsers);

app.listen(port, () => {
  console.log(`Express Unsplash-cloned API run on port ${port}!`);
});