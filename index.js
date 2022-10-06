require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const { sequelize } = require('./models');
// const { photoController, userController, topicController, searchController } = require('./controllers');

const app = express();
const port = Number(process.env.PORT || process.env.APP_PORT);

app.use(cors());

app.get('/', async (req, res) => {
  let statusMessage = 'Connection OK';
  let status = 200;
  res.status(status).send(`Express Unsplash-cloned API by Zinglecode (for educational purposes only), ${statusMessage}.`);
});

// app.get('/photos', photoController.getPhotos);
// app.get('/photos/random', photoController.getRandomPhoto);
// app.get('/photos/:uid', photoController.getPhoto);

// app.get('/users', userController.getRandomUsers);
// app.get('/users/:username', userController.getUser);

// app.get('/topics', topicController.getTopics);
// app.get('/topics/:uidOrSlug', topicController.getTopic);

// app.get('/search/photos', searchController.searchPhotos);
// app.get('/search/users', searchController.searchUsers);

app.listen(port, () => {
  console.log(`Express Unsplash-cloned API run on port ${port}!`);
});
