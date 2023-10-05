/*
  Warnings:

  - Added the required column `VehicleCustomerId` to the `VehicleMaster` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VehicleMaster" ADD COLUMN     "VehicleCustomerId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Customer" (
    "CustomerId" SERIAL NOT NULL,
    "CustomerTitle" TEXT NOT NULL,
    "CustomerPhoneNo" INTEGER NOT NULL,
    "CustomerMobileNo" INTEGER NOT NULL,
    "CustomerAddress" TEXT NOT NULL,
    "CustomerEmail" TEXT NOT NULL,
    "CustomerSecondNumber" INTEGER NOT NULL,
    "IsActive" BOOLEAN NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("CustomerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_CustomerId_key" ON "Customer"("CustomerId");

-- AddForeignKey
ALTER TABLE "VehicleMaster" ADD CONSTRAINT "VehicleMaster_VehicleCustomerId_fkey" FOREIGN KEY ("VehicleCustomerId") REFERENCES "Customer"("CustomerId") ON DELETE RESTRICT ON UPDATE CASCADE;
