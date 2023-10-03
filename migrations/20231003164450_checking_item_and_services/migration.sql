/*
  Warnings:

  - You are about to drop the column `ServiceCategory` on the `ServiceMaster` table. All the data in the column will be lost.
  - Added the required column `ServiceCategoryId` to the `ServiceMaster` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ServiceMaster" DROP CONSTRAINT "ServiceMaster_ServiceCategory_fkey";

-- AlterTable
ALTER TABLE "ServiceMaster" DROP COLUMN "ServiceCategory",
ADD COLUMN     "ServiceCategoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ServiceMaster" ADD CONSTRAINT "ServiceMaster_ServiceCategoryId_fkey" FOREIGN KEY ("ServiceCategoryId") REFERENCES "ServiceCategory"("ServiceId") ON DELETE RESTRICT ON UPDATE CASCADE;
