/*
  Warnings:

  - You are about to drop the column `catgory` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `descirption` on the `Product` table. All the data in the column will be lost.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "catgory",
DROP COLUMN "descirption",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;
