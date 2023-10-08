import { db } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Assuming you have a 'db' object for database access.
    const serviceCategories = await db.serviceCategory.findMany(); // Retrieve all serviceCategories from the database.

    return NextResponse.json(
      {
        serviceCategories,
        message: "Service Category list retrieved successfully",
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
    const serviceCategories = await db.serviceCategory.create({
      data: {
        ServiceTitle: body.ServiceTitle,
      },
    });

    return NextResponse.json(
      {
        serviceCategories: serviceCategories,
        message: "Service Category created successfully",
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
    const { ServiceId , ServiceTitle } = body;

    // Check if the serviceCategory with the specified ServiceId exists
    const existingserviceCategory = await db.serviceCategory.findUnique({
      where: {
        ServiceId,
      },
    });

    if (!existingserviceCategory) {
      return NextResponse.json(
        { message: "serviceCategory not found" },
        { status: 404 }
      );
    }

    // Update the serviceCategory with the new data
    const updatedserviceCategory = await db.serviceCategory.update({
      where: {
        ServiceId,
      },
      data: {
        ServiceTitle,
      },
    });

    return NextResponse.json(
      {
        serviceCategory: updatedserviceCategory,
        message: "serviceCategory updated successfully",
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
    const { ServiceId } = body;

    // Check if the serviceCategory with the specified ID exists
    const existingserviceCategory = await db.serviceCategory.findUnique({
      where: {
        ServiceId,
      },
    });

    if (!existingserviceCategory) {
      return NextResponse.json(
        { message: "serviceCategory not found" },
        { status: 404 }
      );
    }

    // Delete the serviceCategory with the specified ID
    await db.serviceCategory.delete({
      where: {
        ServiceId,
      },
    });

    return NextResponse.json(
      {
        message: "serviceCategory deleted successfully",
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
