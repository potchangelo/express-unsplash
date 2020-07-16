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
        createdAt: new Date("2020-07-01 09:30"),
        updatedAt: new Date("2020-07-01 09:30"),
        userUid: 'o4weapfvs4'
      },
      {
        uid: 'yth45984o8',
        width: 1534,
        height: 2301,
        description: 'A picture from the old-fashioned street Møllesiten in Aarhus Denmark.',
        creditUser: 'Kristian Egelund',
        creditUserLink: 'https://unsplash.com/@kristianegelund?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/FaD-Y5atnT4',
        createdAt: new Date("2020-07-01 15:37"),
        updatedAt: new Date("2020-07-01 15:37"),
        userUid: 'o4weapfvs4'
      },
      {
        uid: '45hfxg156w',
        width: 1575,
        height: 2100,
        creditUser: 'Tom Juggins',
        creditUserLink: 'https://unsplash.com/@tomjuggins_uk?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/AWguZEkl5dg',
        createdAt: new Date("2020-07-01 15:42"),
        updatedAt: new Date("2020-07-01 15:42"),
        userUid: 'o4weapfvs4'
      },
      {
        uid: 'uyesth5614',
        width: 1575,
        height: 2104,
        creditUser: 'Mihai Moisa',
        creditUserLink: 'https://unsplash.com/@moisamihai092?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/8HDWBobi7MI',
        createdAt: new Date("2020-07-01 15:45"),
        updatedAt: new Date("2020-07-01 15:45"),
        userUid: 'o4weapfvs4'
      },
      {
        uid: 'f54hjfg154',
        width: 2978,
        height: 1675,
        description: "Rowing on one of Finland's biggest lakes",
        creditUser: 'Marius Niveri',
        creditUserLink: 'https://unsplash.com/@m4r1vs?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/fmM3lFLx4xE',
        createdAt: new Date("2020-07-02 10:21"),
        updatedAt: new Date("2020-07-02 10:21"),
        userUid: 'o4weapfvs4'
      },
      {
        uid: 'opg8se156s',
        width: 3034,
        height: 4551,
        creditUser: 'Eiliv-Sonas Aceron',
        creditUserLink: 'https://unsplash.com/@shootdelicious?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/fhsEQW5ibw0',
        createdAt: new Date("2020-07-02 13:47"),
        updatedAt: new Date("2020-07-02 13:47"),
        userUid: '4qtcj0irg3'
      },
      {
        uid: 'us8e53ikg9',
        width: 3034,
        height: 4551,
        creditUser: 'Alexander W',
        creditUserLink: 'https://unsplash.com/@jawfox_photography?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/F-6v14W67Ak',
        createdAt: new Date("2020-07-02 18:54"),
        updatedAt: new Date("2020-07-02 18:54"),
        userUid: '4qtcj0irg3'
      },
      {
        uid: 'rjtu45r3e4',
        width: 3034,
        height: 4551,
        creditUser: 'Steffen Muldbjerg',
        creditUserLink: 'https://unsplash.com/@muldbjerg?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/L7FObluE5Hg',
        createdAt: new Date("2020-07-03 07:53"),
        updatedAt: new Date("2020-07-03 07:53"),
        userUid: 'o4weapfvs4'
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Photos', {
      uid: { 
        [Op.in]: [
          '5jtcj402ca', 'yth45984o8', '45hfxg156w', 'uyesth5614', 
          'f54hjfg154', 'opg8se156s', 'us8e53ikg9', 'rjtu45r3e4'
        ] 
      }
    });
  }
};
