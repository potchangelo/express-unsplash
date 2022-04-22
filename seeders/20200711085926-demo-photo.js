'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        uid: '5jtcj402ca',
        width: 3150,
        height: 2100,
        createdAt: new Date('2020-07-01 09:30'),
        updatedAt: new Date('2020-07-01 09:30'),
        userUid: 'o4weapfvs4',
      },
      {
        uid: 'yth45984o8',
        width: 1534,
        height: 2301,
        description: 'A picture from the old-fashioned street Møllesiten in Aarhus Denmark.',
        createdAt: new Date('2020-07-01 15:37'),
        updatedAt: new Date('2020-07-01 15:37'),
        userUid: 'o4weapfvs4',
      },
      {
        uid: '45hfxg156w',
        width: 1575,
        height: 2100,
        createdAt: new Date('2020-07-01 15:42'),
        updatedAt: new Date('2020-07-01 15:42'),
        userUid: 'o4weapfvs4',
      },
      {
        uid: 'uyesth5614',
        width: 1575,
        height: 2104,
        createdAt: new Date('2020-07-01 15:45'),
        updatedAt: new Date('2020-07-01 15:45'),
        userUid: 'o4weapfvs4',
      },
      {
        uid: 'f54hjfg154',
        width: 2978,
        height: 1675,
        description: "Rowing on one of Finland's biggest lakes",
        createdAt: new Date('2020-07-02 10:21'),
        updatedAt: new Date('2020-07-02 10:21'),
        userUid: 'o4weapfvs4',
      },
      {
        uid: 'opg8se156s',
        width: 3034,
        height: 4551,
        createdAt: new Date('2020-07-02 13:47'),
        updatedAt: new Date('2020-07-02 13:47'),
        userUid: '4qtcj0irg3',
      },
      {
        uid: 'us8e53ikg9',
        width: 3034,
        height: 4551,
        createdAt: new Date('2020-07-02 18:54'),
        updatedAt: new Date('2020-07-02 18:54'),
        userUid: '4qtcj0irg3',
      },
      {
        uid: 'rjtu45r3e4',
        width: 3034,
        height: 4551,
        createdAt: new Date('2020-07-03 07:53'),
        updatedAt: new Date('2020-07-03 07:53'),
        userUid: 'o4weapfvs4',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Photos', {
      uid: {
        [Op.in]: [
          '5jtcj402ca',
          'yth45984o8',
          '45hfxg156w',
          'uyesth5614',
          'f54hjfg154',
          'opg8se156s',
          'us8e53ikg9',
          'rjtu45r3e4',
        ],
      },
    });
  },
};
