import { db } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Assuming you have a 'db' object for database access.
    const vehicleMaster = await db.vehicleMaster.findMany(); // Retrieve all vehicleMaster from the database.

    return NextResponse.json(
      {
        vehicleMaster,
        message: "Vehicle Master retrieved successfully",
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
    const vehicleMaster = await db.vehicleMaster.create({
      data: {
            VehicleRegNo: body.VehicleRegNo,
            VehicleChechisNo: body.VehicleChechisNo,
            VehicleEngineNo: body.VehicleEngineNo,
            VehicleMake: body.VehicleMake,
            VehicleCustomerId: body.VehicleCustomerId,
      },
    });

    return NextResponse.json(
      {
        vehicleMaster: vehicleMaster,
        message: "Vehicle Master created successfully",
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
    const { VehicleId } = body;

    // Check if the vehicleMaster with the specified vehicleId exists
    const existingvehicleMaster = await db.vehicleMaster.findUnique({
      where: {
        VehicleId,
      },
    });

    if (!existingvehicleMaster) {
      return NextResponse.json(
        { message: "vehicleMaster not found" },
        { status: 404 }
      );
    }

    // Update the vehicleMaster with the new data
    const updatedvehicleMaster = await db.vehicleMaster.update({
      where: {
        VehicleId,
      },
      data: {
        VehicleRegNo: body.VehicleRegNo,
        VehicleChechisNo: body.VehicleChechisNo,
        VehicleEngineNo: body.VehicleEngineNo,
        VehicleMake: body.VehicleMake,
        VehicleCustomerId: body.VehicleCustomerId,
  },
    });

    return NextResponse.json(
      {
        vehicleMaster: updatedvehicleMaster,
        message: "vehicleMaster updated successfully",
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
    const { VehicleId } = body;

    // Check if the vehicleMaster with the specified ID exists
    const existingvehicleMaster = await db.vehicleMaster.findUnique({
      where: {
        VehicleId,
      },
    });

    if (!existingvehicleMaster) {
      return NextResponse.json(
        { message: "vehicleMaster not found" },
        { status: 404 }
      );
    }

    // Delete the vehicleMaster with the specified ID
    await db.vehicleMaster.delete({
      where: {
        VehicleId,
      },
    });

    return NextResponse.json(
      {
        message: "vehicleMaster deleted successfully",
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
