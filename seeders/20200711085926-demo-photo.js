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
      
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Photos', {
      uid: { [Op.in]: ['5jtcj402ca'] }
    });
  }
};
