'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PhotoUrls', [
      {
        photoUid: '5jtcj402ca',
        urlThumbnail: 'https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        urlSmall: 'https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        urlMedium: 'https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        urlLarge: 'https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        urlOriginal: 'https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        createdAt: new Date("2020-07-20 09:30"),
        updatedAt: new Date("2020-07-20 09:30"),
      },
      
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('PhotoUrls', {
      photoUid: { [Op.in]: ['5jtcj402ca'] }
    });
  }
};
