-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "customerVehicleCustomerVehicleId" INTEGER;

-- CreateTable
CREATE TABLE "CustomerVehicle" (
    "CustomerVehicleId" SERIAL NOT NULL,
    "VehicleId" INTEGER NOT NULL,

    CONSTRAINT "CustomerVehicle_pkey" PRIMARY KEY ("CustomerVehicleId")
);

-- CreateIndex
CREATE UNIQUE INDEX "CustomerVehicle_CustomerVehicleId_key" ON "CustomerVehicle"("CustomerVehicleId");

-- AddForeignKey
ALTER TABLE "CustomerVehicle" ADD CONSTRAINT "CustomerVehicle_VehicleId_fkey" FOREIGN KEY ("VehicleId") REFERENCES "VehicleMaster"("VehicleId") ON DELETE RESTRICT ON UPDATE CASCADE;
