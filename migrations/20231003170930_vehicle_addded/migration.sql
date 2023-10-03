-- CreateTable
CREATE TABLE "VehicleMake" (
    "VehicleMakeId" SERIAL NOT NULL,
    "vehicleMakeTitle" TEXT NOT NULL,

    CONSTRAINT "VehicleMake_pkey" PRIMARY KEY ("VehicleMakeId")
);

-- CreateTable
CREATE TABLE "VehicleMaster" (
    "VehicleId" SERIAL NOT NULL,
    "VehicleRegNo" INTEGER NOT NULL,
    "VehicleChechisNo" TEXT NOT NULL,
    "VehicleEngineNo" TEXT NOT NULL,
    "VehicleMake" INTEGER NOT NULL,

    CONSTRAINT "VehicleMaster_pkey" PRIMARY KEY ("VehicleId")
);

-- AddForeignKey
ALTER TABLE "VehicleMaster" ADD CONSTRAINT "VehicleMaster_VehicleMake_fkey" FOREIGN KEY ("VehicleMake") REFERENCES "VehicleMake"("VehicleMakeId") ON DELETE RESTRICT ON UPDATE CASCADE;
