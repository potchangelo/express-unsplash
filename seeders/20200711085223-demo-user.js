'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        uid: 'o4weapfvs4',
        username: 'jason555',
        displayName: 'Jason',
        biography: 'Normal is not an option',
        createdAt: new Date("2020-06-26 15:53"),
        updatedAt: new Date("2020-06-26 15:53")
      },
      {
        uid: 'vqtuc0dfrg',
        username: 'carl4632',
        displayName: 'Carl 4',
        createdAt: new Date("2020-06-26 19:24"),
        updatedAt: new Date("2020-06-26 19:24")
      },
      {
        uid: '4qtcj0irg3',
        username: 'simpleman',
        displayName: 'Simple Man',
        biography: 'No man can fly',
        createdAt: new Date("2020-06-29 10:56"),
        updatedAt: new Date("2020-06-29 10:56")
      },
      {
        uid: 'u5et51648a',
        username: 'aaron7575',
        displayName: 'Aaron 75',
        createdAt: new Date("2020-07-02 17:29"),
        updatedAt: new Date("2020-07-02 17:29")
      },
      {
        uid: 'baqh9mr8u0',
        username: 'classic_harley',
        displayName: 'Harley',
        biography: 'Harley only',
        createdAt: new Date("2020-07-07 09:16"),
        updatedAt: new Date("2020-07-07 09:16")
      },
      {
        uid: '24v8at90bn',
        username: 'lewandowski',
        displayName: 'Lewandowski',
        createdAt: new Date("2020-07-08 11:52"),
        updatedAt: new Date("2020-07-08 11:52")
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      uid: {
        [Op.in]: [
          'o4weapfvs4', 'vqtuc0dfrg', '4qtcj0irg3',
          'u5et51648a', 'baqh9mr8u0', '24v8at90bn'
        ] 
      }
    });
  }
};
