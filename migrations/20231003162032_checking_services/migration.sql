-- CreateTable
CREATE TABLE "ServiceCategory" (
    "ServiceId" SERIAL NOT NULL,
    "ServiceTitle" TEXT NOT NULL,

    CONSTRAINT "ServiceCategory_pkey" PRIMARY KEY ("ServiceId")
);

-- CreateTable
CREATE TABLE "ServiceMaster" (
    "Serviceid" SERIAL NOT NULL,
    "ServiceTitle" TEXT NOT NULL,
    "ServiceCategory" INTEGER NOT NULL,

    CONSTRAINT "ServiceMaster_pkey" PRIMARY KEY ("Serviceid")
);

-- AddForeignKey
ALTER TABLE "ServiceMaster" ADD CONSTRAINT "ServiceMaster_ServiceCategory_fkey" FOREIGN KEY ("ServiceCategory") REFERENCES "ServiceCategory"("ServiceId") ON DELETE RESTRICT ON UPDATE CASCADE;
