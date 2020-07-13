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
      {
        photoUid: 'yth45984o8',
        urlThumbnail: 'https://images.unsplash.com/photo-1531817681549-404231e6ffda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        urlSmall: 'https://images.unsplash.com/photo-1531817681549-404231e6ffda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        urlMedium: 'https://images.unsplash.com/photo-1531817681549-404231e6ffda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        urlLarge: 'https://images.unsplash.com/photo-1531817681549-404231e6ffda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        urlOriginal: 'https://images.unsplash.com/photo-1531817681549-404231e6ffda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        createdAt: new Date("2020-07-20 15:37"),
        updatedAt: new Date("2020-07-20 15:37"),
      },
      {
        photoUid: '45hfxg156w',
        urlThumbnail: 'https://images.unsplash.com/photo-1527455425643-782083b04d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        urlSmall: 'https://images.unsplash.com/photo-1527455425643-782083b04d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        urlMedium: 'https://images.unsplash.com/photo-1527455425643-782083b04d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        urlLarge: 'https://images.unsplash.com/photo-1527455425643-782083b04d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        urlOriginal: 'https://images.unsplash.com/photo-1527455425643-782083b04d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        createdAt: new Date("2020-07-20 15:42"),
        updatedAt: new Date("2020-07-20 15:42"),
      },
      {
        photoUid: 'uyesth5614',
        urlThumbnail: 'https://images.unsplash.com/photo-1558443968-68267a520ef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        urlSmall: 'https://images.unsplash.com/photo-1558443968-68267a520ef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        urlMedium: 'https://images.unsplash.com/photo-1558443968-68267a520ef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        urlLarge: 'https://images.unsplash.com/photo-1558443968-68267a520ef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        urlOriginal: 'https://images.unsplash.com/photo-1558443968-68267a520ef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        createdAt: new Date("2020-07-20 15:45"),
        updatedAt: new Date("2020-07-20 15:45"),
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
