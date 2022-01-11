-- CreateTable
CREATE TABLE `ScoreEntry`
(
    `id`    VARCHAR(191) NOT NULL,
    `date`  DATETIME(3)  NOT NULL,
    `level` ENUM('BEGINNER', 'ADVANCED', 'EXPERT') NOT NULL DEFAULT 'BEGINNER',
    `score` INTEGER      NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
