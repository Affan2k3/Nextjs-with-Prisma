import { db } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Assuming you have a 'db' object for database access.
    const vehicleMake = await db.vehicleMake.findMany(); // Retrieve all vehicleMake from the database.

    return NextResponse.json(
      {
        vehicleMake,
        message: "Vehicle Make retrieved successfully",
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
    const vehicleMake = await db.vehicleMake.create({
      data: {
            vehicleMakeTitle: body.vehicleMakeTitle,
      },
    });

    return NextResponse.json(
      {
        vehicleMake: vehicleMake,
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
    const { VehicleMakeId, vehicleMakeTitle } = body;

    // Check if the vehicleMake with the specified vehicleMakeId exists
    const existingvehicleMake = await db.vehicleMake.findUnique({
      where: {
        VehicleMakeId,
      },
    });

    if (!existingvehicleMake) {
      return NextResponse.json(
        { message: "vehicleMake not found" },
        { status: 404 }
      );
    }

    // Update the vehicleMake with the new data
    const updatedvehicleMake = await db.vehicleMake.update({
      where: {
        VehicleMakeId,
      },
      data: {
        vehicleMakeTitle,
      },
    });

    return NextResponse.json(
      {
        vehicleMake: updatedvehicleMake,
        message: "vehicleMake updated successfully",
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
    const { VehicleMakeId } = body;

    // Check if the vehicleMake with the specified ID exists
    const existingvehicleMake = await db.vehicleMake.findUnique({
      where: {
        VehicleMakeId,
      },
    });

    if (!existingvehicleMake) {
      return NextResponse.json(
        { message: "vehicleMake not found" },
        { status: 404 }
      );
    }

    // Delete the vehicleMake with the specified ID
    await db.vehicleMake.delete({
      where: {
        VehicleMakeId,
      },
    });

    return NextResponse.json(
      {
        message: "vehicleMake deleted successfully",
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
