/*
  Warnings:

  - Added the required column `categoryClass` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fixed` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "categoryClass" TEXT NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fixed" BOOLEAN NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
