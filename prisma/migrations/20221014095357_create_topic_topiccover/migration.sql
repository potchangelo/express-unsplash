-- CreateTable
CREATE TABLE "Topic" (
    "id" SERIAL NOT NULL,
    "uid" VARCHAR(20) NOT NULL,
    "slug" VARCHAR(32) NOT NULL,
    "title" VARCHAR(32) NOT NULL,
    "description" TEXT,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TopicCover" (
    "id" SERIAL NOT NULL,
    "small" TEXT,
    "medium" TEXT,
    "large" TEXT,
    "creditUser" VARCHAR(50),
    "creditUserLink" TEXT,
    "creditPhotoLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "topicUid" TEXT,

    CONSTRAINT "TopicCover_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PhotoToTopic" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Topic_uid_key" ON "Topic"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_slug_key" ON "Topic"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "TopicCover_topicUid_key" ON "TopicCover"("topicUid");

-- CreateIndex
CREATE UNIQUE INDEX "_PhotoToTopic_AB_unique" ON "_PhotoToTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_PhotoToTopic_B_index" ON "_PhotoToTopic"("B");

-- AddForeignKey
ALTER TABLE "TopicCover" ADD CONSTRAINT "TopicCover_topicUid_fkey" FOREIGN KEY ("topicUid") REFERENCES "Topic"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhotoToTopic" ADD CONSTRAINT "_PhotoToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "Photo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhotoToTopic" ADD CONSTRAINT "_PhotoToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
