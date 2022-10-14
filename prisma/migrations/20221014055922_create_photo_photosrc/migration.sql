-- CreateTable
CREATE TABLE "Photo" (
    "id" SERIAL NOT NULL,
    "uid" VARCHAR(20) NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userUid" TEXT,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhotoSrc" (
    "id" SERIAL NOT NULL,
    "thumbnail" TEXT,
    "small" TEXT,
    "medium" TEXT,
    "large" TEXT,
    "original" TEXT,
    "creditUser" VARCHAR(50),
    "creditUserLink" TEXT,
    "creditPhotoLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "photoUid" TEXT,

    CONSTRAINT "PhotoSrc_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Photo_uid_key" ON "Photo"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "Photo_userUid_key" ON "Photo"("userUid");

-- CreateIndex
CREATE UNIQUE INDEX "PhotoSrc_photoUid_key" ON "PhotoSrc"("photoUid");

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "User"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhotoSrc" ADD CONSTRAINT "PhotoSrc_photoUid_fkey" FOREIGN KEY ("photoUid") REFERENCES "Photo"("uid") ON DELETE SET NULL ON UPDATE CASCADE;
