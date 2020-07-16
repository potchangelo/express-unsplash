'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        uid: 'xpdmf4nmb9',
        width: 2848,
        height: 4288,
        creditUser: 'Oleg Yeltsov',
        creditUserLink: 'https://unsplash.com/@vostley?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/8zKCsiPHcSA',
        createdAt: new Date("2020-07-12 09:55"),
        updatedAt: new Date("2020-07-12 09:55"),
        userUid: 'baqh9mr8u0'
      },
      {
        uid: 'atngiz0et1',
        width: 3034,
        height: 4551,
        creditUser: 'Millie Olsen',
        creditUserLink: 'https://unsplash.com/@millieao?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/K-tOCLVwM20',
        createdAt: new Date("2020-07-12 10:17"),
        updatedAt: new Date("2020-07-12 10:17"),
        userUid: 'o4weapfvs4'
      },
      {
        uid: 'au5hre3t0b',
        width: 3150,
        height: 2100,
        creditUser: 'Raul Cacho Oses',
        creditUserLink: 'https://unsplash.com/@raulcachophoto?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/x8dgFTYbGOw',
        createdAt: new Date("2020-07-12 11:32"),
        updatedAt: new Date("2020-07-12 11:32"),
        userUid: 'o4weapfvs4'
      },
      {
        uid: 'nm735i0aew',
        width: 3150,
        height: 2100,
        creditUser: 'Harley-Davidson',
        creditUserLink: 'https://unsplash.com/@harleydavidson?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/kSNQz1lTBPQ',
        createdAt: new Date("2020-07-12 13:12"),
        updatedAt: new Date("2020-07-12 13:12"),
        userUid: 'baqh9mr8u0'
      },
      {
        uid: 'j03mbmdfp4',
        width: 2374,
        height: 4032,
        description: 'Harley-Davidson Dealership in Laval.',
        creditUser: 'Alexander Boon',
        creditUserLink: 'https://unsplash.com/@alexanderboon?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/21SQsd21weA',
        createdAt: new Date("2020-07-12 16:45"),
        updatedAt: new Date("2020-07-12 16:45"),
        userUid: 'baqh9mr8u0'
      },
      {
        uid: 'ygjawhjw05',
        width: 3034,
        height: 4549,
        creditUser: 'dan magatti',
        creditUserLink: 'https://unsplash.com/@danmagatti?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/pl_biChXZhw',
        createdAt: new Date("2020-07-12 16:56"),
        updatedAt: new Date("2020-07-12 16:56"),
        userUid: 'o4weapfvs4'
      },
      {
        uid: 'njetsoi939',
        width: 3150,
        height: 2100,
        creditUser: 'Harley-Davidson',
        creditUserLink: 'https://unsplash.com/@harleydavidson?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/wxSb4-Lxt3Y',
        createdAt: new Date("2020-07-12 17:20"),
        updatedAt: new Date("2020-07-12 17:20"),
        userUid: 'baqh9mr8u0'
      },
      {
        uid: 'v9ijbdnv23',
        width: 3100,
        height: 3875,
        creditUser: 'Sergey Zhesterev',
        creditUserLink: 'https://unsplash.com/@zhesterev?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/MvLG5M5ibo8',
        createdAt: new Date("2020-07-15 12:08"),
        updatedAt: new Date("2020-07-15 12:08"),
        userUid: 'baqh9mr8u0'
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Photos', {
      uid: {
        [Op.in]: [
          'xpdmf4nmb9', 'atngiz0et1', 'au5hre3t0b', 'nm735i0aew',
          'j03mbmdfp4', 'ygjawhjw05', 'njetsoi939', 'v9ijbdnv23'
        ] 
      }
    });
  }
};
