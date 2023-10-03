-- CreateTable
CREATE TABLE "ItemCategory" (
    "catId" SERIAL NOT NULL,
    "catTitle" TEXT NOT NULL,

    CONSTRAINT "ItemCategory_pkey" PRIMARY KEY ("catId")
);

-- CreateTable
CREATE TABLE "ItemMaster" (
    "itemid" SERIAL NOT NULL,
    "itemTitle" TEXT NOT NULL,
    "itemCategoryId" INTEGER NOT NULL,

    CONSTRAINT "ItemMaster_pkey" PRIMARY KEY ("itemid")
);

-- AddForeignKey
ALTER TABLE "ItemMaster" ADD CONSTRAINT "ItemMaster_itemCategoryId_fkey" FOREIGN KEY ("itemCategoryId") REFERENCES "ItemCategory"("catId") ON DELETE RESTRICT ON UPDATE CASCADE;
