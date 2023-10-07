import { db } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Assuming you have a 'db' object for database access.
    const itemCategories = await db.itemCategory.findMany(); // Retrieve all itemCategories from the database.

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
    const itemCategories = await db.itemCategory.create({
      data: {
        catTitle: body.catTitle,
      },
    });

    return NextResponse.json(
      {
        ItemCategories: itemCategories,
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
    const { catId, catTitle } = body;

    // Check if the itemCategory with the specified catID exists
    const existingItemCategory = await db.itemCategory.findUnique({
      where: {
        catId,
      },
    });

    if (!existingItemCategory) {
      return NextResponse.json(
        { message: "ItemCategory not found" },
        { status: 404 }
      );
    }

    // Update the itemCategory with the new data
    const updatedItemCategory = await db.itemCategory.update({
      where: {
        catId,
      },
      data: {
        catTitle,
      },
    });

    return NextResponse.json(
      {
        itemCategory: updatedItemCategory,
        message: "ItemCategory updated successfully",
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
    const { catId } = body;

    // Check if the itemCategory with the specified ID exists
    const existingItemCategory = await db.itemCategory.findUnique({
      where: {
        catId,
      },
    });

    if (!existingItemCategory) {
      return NextResponse.json(
        { message: "ItemCategory not found" },
        { status: 404 }
      );
    }

    // Delete the itemCategory with the specified ID
    await db.itemCategory.delete({
      where: {
        catId,
      },
    });

    return NextResponse.json(
      {
        message: "ItemCategory deleted successfully",
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
