const prisma = require('../client');

const jsonUsers = require('./data/users.json');
const jsonUsersAvatars = require('./data/usersAvatars.json');

module.exports = async () => {
  // Users
  const seededUsers = await Promise.all(
    jsonUsers.map(async user => {
      return await prisma.user.upsert({
        create: user,
        update: user,
        where: { uid: user.uid },
      });
    })
  );
  console.log(`Seed users x ${seededUsers.length}`);

  // Users avatars
  const seededUsersAvatars = await Promise.all(
    jsonUsersAvatars.map(async avatar => {
      const { username, ...data } = avatar;
      const user = seededUsers.find(u => u.username === username);
      return await prisma.userAvatar.upsert({
        create: { ...data, user: { connect: { username } } },
        update: { ...data },
        where: { userUid: user.uid },
      });
    })
  );
  console.log(`Seed users avatars x ${seededUsersAvatars.length}`);
};
