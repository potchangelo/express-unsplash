'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserAvatarUrls', [
      {
        userUid: 'o4weapfvs4',
        small: 'https://images.unsplash.com/photo-1522346513757-54c552451fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80',
        medium: 'https://images.unsplash.com/photo-1522346513757-54c552451fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&h=128&q=80',
        large: 'https://images.unsplash.com/photo-1522346513757-54c552451fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
        creditUser: "Hello I'm Nik 🎞",
        creditUserLink: 'https://unsplash.com/@helloimnik?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/6HzhFuiVO60',
        createdAt: new Date("2020-06-26 15:53"),
        updatedAt: new Date("2020-06-26 15:53")
      },
      {
        userUid: '4qtcj0irg3',
        small: 'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80',
        medium: 'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&h=128&q=80',
        large: 'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
        creditUser: "Warren Wong",
        creditUserLink: 'https://unsplash.com/@wflwong?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/bh4LQHcOcxE',
        createdAt: new Date("2020-06-29 10:56"),
        updatedAt: new Date("2020-06-29 10:56")
      },
      {
        userUid: 'u5et51648a',
        small: 'https://images.unsplash.com/photo-1503248947681-3198a7abfcc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80',
        medium: 'https://images.unsplash.com/photo-1503248947681-3198a7abfcc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&h=128&q=80',
        large: 'https://images.unsplash.com/photo-1503248947681-3198a7abfcc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
        creditUser: "Warren Wong",
        creditUserLink: 'https://unsplash.com/@wflwong?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/LD85Mj3rj4k',
        createdAt: new Date("2020-07-02 17:29"),
        updatedAt: new Date("2020-07-02 17:29")
      },
      {
        userUid: 'baqh9mr8u0',
        small: 'https://images.unsplash.com/photo-1519220354349-02724a4d475c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80',
        medium: 'https://images.unsplash.com/photo-1519220354349-02724a4d475c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&h=128&q=80',
        large: 'https://images.unsplash.com/photo-1519220354349-02724a4d475c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
        creditUser: "Nathan Dumlao",
        creditUserLink: 'https://unsplash.com/@nate_dumlao?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/VO3iHIsGjUk',
        createdAt: new Date("2020-07-07 09:16"),
        updatedAt: new Date("2020-07-07 09:16")
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('UserAvatarUrls', {
      userUid: {
        [Op.in]: [
          'o4weapfvs4', '4qtcj0irg3', 'u5et51648a', 'baqh9mr8u0'
        ] 
      }
    });
  }
};
