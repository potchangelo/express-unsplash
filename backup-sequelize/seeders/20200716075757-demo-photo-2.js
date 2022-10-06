'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        uid: '0jy84iahge',
        width: 2900,
        height: 2900,
        description: 'Black burger - chiken and bekon | phototastyfood.ru',
        createdAt: new Date('2020-07-05 12:41'),
        updatedAt: new Date('2020-07-05 12:41'),
        userUid: '4qtcj0irg3',
      },
      {
        uid: 'b0xdi4tois',
        width: 3150,
        height: 2100,
        description:
          'Vågsøy is a municipality in Sogn og Fjordane county, Norway. It is located in the traditional district of Nordfjord. Kannesteinen rock, the rock shaped as a teapot.',
        createdAt: new Date('2020-07-05 16:58'),
        updatedAt: new Date('2020-07-05 16:58'),
        userUid: 'o4weapfvs4',
      },
      {
        uid: '40j8hi9oye',
        width: 2002,
        height: 3000,
        createdAt: new Date('2020-07-06 07:43'),
        updatedAt: new Date('2020-07-06 07:43'),
        userUid: 'o4weapfvs4',
      },
      {
        uid: 'pa7y345w90',
        width: 3150,
        height: 2100,
        createdAt: new Date('2020-07-08 15:04'),
        updatedAt: new Date('2020-07-08 15:04'),
        userUid: '4qtcj0irg3',
      },
      {
        uid: 'vt2q40iouo',
        width: 3034,
        height: 4551,
        description:
          'PORTRAITS INSTAGRAM - @LGNWVRPRTRTS EDITORIAL INSTAGRAM - @LGNWVRPHTO PERSONAL INSTAGRAM - @LGNWVR',
        createdAt: new Date('2020-07-08 19:35'),
        updatedAt: new Date('2020-07-08 19:35'),
        userUid: '24v8at90bn',
      },
      {
        uid: 'djxtmry6if',
        width: 3150,
        height: 2100,
        description: 'Planche at the Playground',
        createdAt: new Date('2020-07-09 08:27'),
        updatedAt: new Date('2020-07-09 08:27'),
        userUid: '24v8at90bn',
      },
      {
        uid: 'atyijrw4gk',
        width: 3095,
        height: 2228,
        description: 'Sunset with a view (Odda, Norway) ',
        createdAt: new Date('2020-07-09 10:22'),
        updatedAt: new Date('2020-07-09 10:22'),
        userUid: 'o4weapfvs4',
      },
      {
        uid: 's5ey3j0oip',
        width: 3067,
        height: 2300,
        description: 'Pickleball paddles come in some wild colors!',
        createdAt: new Date('2020-07-11 07:36'),
        updatedAt: new Date('2020-07-11 07:36'),
        userUid: '24v8at90bn',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Photos', {
      uid: {
        [Op.in]: [
          '0jy84iahge',
          'b0xdi4tois',
          '40j8hi9oye',
          'pa7y345w90',
          'vt2q40iouo',
          'djxtmry6if',
          'atyijrw4gk',
          's5ey3j0oip',
        ],
      },
    });
  },
};
