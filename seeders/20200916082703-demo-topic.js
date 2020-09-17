'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Topics', [
      {
        uid: 'atvji0it74',
        title: 'Athletics',
        description: 'Ready, set, snap. Capturing action in the every day — from the tough gym workouts to the tense basketball games out on the court.',
        isFeatured: false,
        createdAt: new Date("2020-09-16 15:29"),
        updatedAt: new Date("2020-09-16 15:29")
      },
      {
        uid: 'y15sew5687',
        title: 'Food & Drink',
        description: 'It’s time to indulge, and throw yourself into the world of culinary photography — with shots of elaborate dinner parties, decadent pastries and more.',
        isFeatured: false,
        createdAt: new Date("2020-09-16 15:32"),
        updatedAt: new Date("2020-09-16 15:32")
      },
      {
        uid: '615ol8futg',
        title: 'Nature',
        description: 'Let’s celebrate the magic of Mother Earth — with images of everything our planet has to offer, from stunning seascapes, starry skies, and everything in between.',
        isFeatured: true,
        createdAt: new Date("2020-09-16 15:33"),
        updatedAt: new Date("2020-09-16 15:33")
      },
      {
        uid: 'ezrtsi7uy8',
        title: 'Travel',
        description: 'Discover hidden wonders and inspiring destinations around the world from the comfort of your own home.',
        isFeatured: true,
        createdAt: new Date("2020-09-16 15:35"),
        updatedAt: new Date("2020-09-16 15:35")
      },
      {
        uid: 'zxi61i15ok',
        title: 'Animals',
        description: 'Exotic wildlife, pet kittens — and everything in between. Uncover the beauty of the animal kingdom through your screen.',
        isFeatured: false,
        createdAt: new Date("2020-09-16 15:37"),
        updatedAt: new Date("2020-09-16 15:37")
      },
      {
        uid: 'a8gm6yr56e',
        title: 'Vehicle',
        description: 'Choose from a curated selection of vehicle photos. Always free on Unsplash.',
        isFeatured: false,
        createdAt: new Date("2020-09-16 15:39"),
        updatedAt: new Date("2020-09-16 15:39")
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Topics', {
      createdAt: {
        [Op.gt]: new Date("2020-09-16 15:28"),
        [Op.lt]: new Date("2020-09-16 15:40")
      }
    });
  }
};
