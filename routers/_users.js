const express = require('express');
const prisma = require('../prisma/client');

const router = express.Router();

router.get('/', async (req, res) => {
  let users = [];

  // Postgres random by TABLESAMPLE
  // SYSTEM ...% from all rows
  // BERNOULI ...
  // SYSTEM_ROWS -> Must install Extension tsm_system_rows first
  try {
    /**
     * @type {(import('@prisma/client').User)[]}
     */
    const usersRaw = await prisma.$queryRaw`
      SELECT "u".*,
      "ua"."id" AS "ua_id", "ua"."small" AS "ua_small",
      "ua"."medium" AS "ua_medium", "ua"."large" AS "ua_large",
      "ua"."creditUser" AS "ua_creditUser", "ua"."creditUserLink" AS "ua_creditUserLink",
      "ua"."creditPhotoLink" AS "ua_creditPhotoLink",
      "ua"."createdAt" AS "ua_createdAt", "ua"."updatedAt" AS "ua_updatedAt"
      FROM "User" AS "u" TABLESAMPLE SYSTEM_ROWS (3)
      LEFT JOIN "UserAvatar" AS "ua" ON "u"."uid" = "ua"."userUid";
    `;

    // Reconstruct
    users = usersRaw.map(userRaw => {
      const {
        ua_id, ua_small, ua_medium, ua_large,
        ua_creditUser, ua_creditUserLink, ua_creditPhotoLink,
        ua_createdAt, ua_updatedAt,
        ...user
      } = userRaw;

      /**
       * @type {import('@prisma/client').UserAvatar|null}
       */
      let avatar = null;
      if (!!ua_id) {
        avatar = {
          id: ua_id, small: ua_small, medium: ua_medium, large: ua_large,
          creditUser: ua_creditUser, creditUserLink: ua_creditUserLink, creditPhotoLink: ua_creditPhotoLink,
          createdAt: ua_createdAt, updatedAt: ua_createdAt, userUid: user.uid
        }
      }
      return { ...user, avatar };
    });

    console.log(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errorCode: 500,
      errorMessage: 'Error on get user',
    });
  }
  res.status(200).json({ users });
});

router.get('/:username', async (req, res) => {
  const username = req.params.username;
  let user = null;
  try {
    user = await prisma.user.findUnique({
      where: { username },
      include: { avatar: true },
    });
    if (!user) throw new Error('not found')
  } catch (error) {
    console.error(error);
    if (error.message === 'not found') {
      return res.status(404).json({
        errorCode: 404,
        errorMessage: 'User not found',
      });
    }
    return res.status(500).json({
      errorCode: 500,
      errorMessage: 'Error on get user',
    });
  }
  res.status(200).json({ user });
});

module.exports = router;
