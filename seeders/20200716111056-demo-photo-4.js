'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        uid: 'ky5hr4t02f',
        width: 3150,
        height: 2100,
        description: 'Husky ride worker dog.',
        createdAt: new Date("2020-07-16 09:04"),
        updatedAt: new Date("2020-07-16 09:04"),
        userUid: 'o4weapfvs4'
      },
      {
        uid: 'granwz490n',
        width: 3054,
        height: 4319,
        description: 'Organic Vodka from Vodka Bornholm, Denmark',
        createdAt: new Date("2020-07-16 12:38"),
        updatedAt: new Date("2020-07-16 12:38"),
        userUid: '4qtcj0irg3'
      },
      {
        uid: '7r5yik7ygv',
        width: 2868,
        height: 3757,
        createdAt: new Date("2020-07-17 20:32"),
        updatedAt: new Date("2020-07-17 20:32"),
        userUid: 'o4weapfvs4'
      },
      {
        uid: 'ni053cn9vf',
        width: 3150,
        height: 2100,
        createdAt: new Date("2020-07-18 08:57"),
        updatedAt: new Date("2020-07-18 08:57"),
        userUid: 'o4weapfvs4'
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Photos', {
      uid: {
        [Op.in]: [
          'ky5hr4t02f', 'granwz490n', '7r5yik7ygv', 'ni053cn9vf'
        ] 
      }
    });
  }
};
