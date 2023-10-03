/*
  Warnings:

  - A unique constraint covering the columns `[catId]` on the table `ItemCategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[itemid]` on the table `ItemMaster` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ServiceId]` on the table `ServiceCategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Serviceid]` on the table `ServiceMaster` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[VehicleMakeId]` on the table `VehicleMake` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[VehicleId]` on the table `VehicleMaster` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ItemMaster" ADD COLUMN     "ItemUomId" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "ItemUOM" (
    "ItemUomId" SERIAL NOT NULL,
    "ItemUomTitle" TEXT NOT NULL,

    CONSTRAINT "ItemUOM_pkey" PRIMARY KEY ("ItemUomId")
);

-- CreateIndex
CREATE UNIQUE INDEX "ItemUOM_ItemUomId_key" ON "ItemUOM"("ItemUomId");

-- CreateIndex
CREATE UNIQUE INDEX "ItemCategory_catId_key" ON "ItemCategory"("catId");

-- CreateIndex
CREATE UNIQUE INDEX "ItemMaster_itemid_key" ON "ItemMaster"("itemid");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceCategory_ServiceId_key" ON "ServiceCategory"("ServiceId");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceMaster_Serviceid_key" ON "ServiceMaster"("Serviceid");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "VehicleMake_VehicleMakeId_key" ON "VehicleMake"("VehicleMakeId");

-- CreateIndex
CREATE UNIQUE INDEX "VehicleMaster_VehicleId_key" ON "VehicleMaster"("VehicleId");

-- AddForeignKey
ALTER TABLE "ItemMaster" ADD CONSTRAINT "ItemMaster_ItemUomId_fkey" FOREIGN KEY ("ItemUomId") REFERENCES "ItemUOM"("ItemUomId") ON DELETE RESTRICT ON UPDATE CASCADE;
