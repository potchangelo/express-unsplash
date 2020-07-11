'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        uid: 'o4weapfvs4',
        username: 'jason555',
        displayName: 'Jason',
        biography: 'Normal is not an option',
        createdAt: new Date("2020-07-11 15:53"),
        updatedAt: new Date("2020-07-11 15:53")
      },
      {
        uid: 'vqtuc0dfrg',
        username: 'carl4632',
        displayName: 'Carl 4',
        createdAt: new Date("2020-07-15 19:24"),
        updatedAt: new Date("2020-07-15 19:24")
      },
      {
        uid: '4qtcj0irg3',
        username: 'simpleman',
        displayName: 'Marker',
        biography: 'No man can fly',
        createdAt: new Date("2020-07-16 10:56"),
        updatedAt: new Date("2020-07-16 10:56")
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      uid: { [Op.in]: ['o4weapfvs4', 'vqtuc0dfrg', '4qtcj0irg3'] }
    });
  }
};
