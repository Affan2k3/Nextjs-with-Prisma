import { db } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Assuming you have a 'db' object for database access.
    const serviceMaster = await db.serviceMaster.findMany(); // Retrieve all serviceMaster from the database.

    return NextResponse.json(
      {
        serviceMaster,
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
    const serviceMaster = await db.serviceMaster.create({
      data: {
        ServiceTitle: body.ServiceTitle,
        ServiceCategoryId: body.ServiceCategoryId
      },
    });

    return NextResponse.json(
      {
        serviceMaster: serviceMaster,
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

    // Check if the serviceMaster with the specified catID exists
    const existingItem = await db.serviceMaster.findUnique({
      where: {
        Serviceid: body.Serviceid,
      },
    });

    if (!existingItem) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    // Update the serviceMaster with the new data
    const updatedItem = await db.serviceMaster.update({
      where: {
        Serviceid: body.Serviceid,
      },
      data: {
        ServiceTitle: body.ServiceTitle,
        ServiceCategoryId: body.ServiceCategoryId,
       
      },
    });

    return NextResponse.json(
      {
        serviceMaster: updatedItem,
        message: "serviceMaster updated successfully",
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
    const { Serviceid } = body;

    // Check if the serviceMaster with the specified ID exists
    const existingserviceMaster = await db.serviceMaster.findUnique({
      where: {
        Serviceid,
      },
    });

    if (!existingserviceMaster) {
      return NextResponse.json(
        { message: "serviceMaster not found" },
        { status: 404 }
      );
    }

    // Delete the serviceMaster with the specified ID
    await db.serviceMaster.delete({
      where: {
        Serviceid,
      },
    });

    return NextResponse.json(
      {
        message: "Service deleted successfully",
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
