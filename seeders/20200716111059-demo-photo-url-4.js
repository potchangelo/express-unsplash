'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PhotoUrls', [
      {
        photoUid: 'ky5hr4t02f',
        urlThumbnail: 'https://images.unsplash.com/photo-1573920974760-53a3c9359d3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        urlSmall: 'https://images.unsplash.com/photo-1573920974760-53a3c9359d3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        urlMedium: 'https://images.unsplash.com/photo-1573920974760-53a3c9359d3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        urlLarge: 'https://images.unsplash.com/photo-1573920974760-53a3c9359d3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        urlOriginal: 'https://images.unsplash.com/photo-1573920974760-53a3c9359d3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        createdAt: new Date("2020-07-16 09:04"),
        updatedAt: new Date("2020-07-16 09:04"),
      },
      {
        photoUid: 'granwz490n',
        urlThumbnail: 'https://images.unsplash.com/photo-1594242090827-2132f706cef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        urlSmall: 'https://images.unsplash.com/photo-1594242090827-2132f706cef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        urlMedium: 'https://images.unsplash.com/photo-1594242090827-2132f706cef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        urlLarge: 'https://images.unsplash.com/photo-1594242090827-2132f706cef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        urlOriginal: 'https://images.unsplash.com/photo-1594242090827-2132f706cef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        createdAt: new Date("2020-07-16 12:38"),
        updatedAt: new Date("2020-07-16 12:38"),
      },
      {
        photoUid: '7r5yik7ygv',
        urlThumbnail: 'https://images.unsplash.com/photo-1552560880-2482cef14240?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        urlSmall: 'https://images.unsplash.com/photo-1552560880-2482cef14240?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        urlMedium: 'https://images.unsplash.com/photo-1552560880-2482cef14240?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        urlLarge: 'https://images.unsplash.com/photo-1552560880-2482cef14240?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        urlOriginal: 'https://images.unsplash.com/photo-1552560880-2482cef14240?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        createdAt: new Date("2020-07-17 20:32"),
        updatedAt: new Date("2020-07-17 20:32"),
      },
      {
        photoUid: 'ni053cn9vf',
        urlThumbnail: 'https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        urlSmall: 'https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        urlMedium: 'https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        urlLarge: 'https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        urlOriginal: 'https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        createdAt: new Date("2020-07-18 08:57"),
        updatedAt: new Date("2020-07-18 08:57"),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('PhotoUrls', {
      photoUid: {
        [Op.in]: [
          'ky5hr4t02f', 'granwz490n', '7r5yik7ygv', 'ni053cn9vf'
        ] 
      }
    });
  }
};
