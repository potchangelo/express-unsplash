'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        uid: '5jtcj402ca',
        width: 3150,
        height: 2100,
        creditUser: 'Steffen Muldbjerg',
        creditUserLink: 'https://unsplash.com/@muldbjerg?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/nMfmwgyZn3I',
        createdAt: new Date("2020-07-20 09:30"),
        updatedAt: new Date("2020-07-20 09:30"),
        userUid: 'o4weapfvs4'
      },
      {
        uid: 'yth45984o8',
        width: 1534,
        height: 2301,
        creditUser: 'Kristian Egelund',
        creditUserLink: 'https://unsplash.com/@kristianegelund?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/FaD-Y5atnT4',
        createdAt: new Date("2020-07-20 15:37"),
        updatedAt: new Date("2020-07-20 15:37"),
        userUid: 'o4weapfvs4'
      },
      {
        uid: '45hfxg156w',
        width: 1575,
        height: 2100,
        creditUser: 'Tom Juggins',
        creditUserLink: 'https://unsplash.com/@tomjuggins_uk?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/AWguZEkl5dg',
        createdAt: new Date("2020-07-20 15:42"),
        updatedAt: new Date("2020-07-20 15:42"),
        userUid: 'o4weapfvs4'
      },
      {
        uid: 'uyesth5614',
        width: 1575,
        height: 2104,
        creditUser: 'Mihai Moisa',
        creditUserLink: 'https://unsplash.com/@moisamihai092?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/8HDWBobi7MI',
        createdAt: new Date("2020-07-20 15:45"),
        updatedAt: new Date("2020-07-20 15:45"),
        userUid: 'o4weapfvs4'
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Photos', {
      uid: { [Op.in]: ['5jtcj402ca', 'yth45984o8', '45hfxg156w', 'uyesth5614'] }
    });
  }
};
