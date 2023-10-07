import { db } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Assuming you have a 'db' object for database access.
    const itemCategories = await db.itemMaster.findMany(); // Retrieve all itemCategories from the database.

    return NextResponse.json(
      {
        itemCategories,
        message: "User list retrieved successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const itemMaster = await db.itemMaster.create({
      data: {
        itemTitle: body.itemTitle,
        itemCategoryId: body.itemCategoryId,
        ItemUomId: body.ItemUomId,
      },
    });

    return NextResponse.json(
      {
        ItemMaster: itemMaster,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    // const { catId, catTitle } = body;

    // Check if the itemMaster with the specified catID exists
    const existingItem = await db.itemMaster.findUnique({
      where: {
        itemid: body.itemid,
      },
    });

    if (!existingItem) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    // Update the itemMaster with the new data
    const updatedItem = await db.itemMaster.update({
      where: {
        itemid: body.itemid,
      },
      data: {
        itemTitle: body.itemTitle,
        itemCategoryId: body.itemCategoryId,
        ItemUomId: body.ItemUomId,
      },
    });

    return NextResponse.json(
      {
        itemMaster: updatedItem,
        message: "ItemMasteritemMaster updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { itemid } = body;

    // Check if the itemMaster with the specified ID exists
    const existingItemMaster = await db.itemMaster.findUnique({
      where: {
        itemid,
      },
    });

    if (!existingItemMaster) {
      return NextResponse.json(
        { message: "ItemMaster not found" },
        { status: 404 }
      );
    }

    // Delete the itemMaster with the specified ID
    await db.itemMaster.delete({
      where: {
        itemid,
      },
    });

    return NextResponse.json(
      {
        message: "Item deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
