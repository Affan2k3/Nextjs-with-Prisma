import { db } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Assuming you have a 'db' object for database access.
    const customer = await db.customer.findMany(); // Retrieve all customer from the database.

    return NextResponse.json(
      {
        customer,
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
    const customer = await db.customer.create({
      data: {
            CustomerTitle: body.CustomerTitle,
            CustomerPhoneNo: body.CustomerPhoneNo,
            CustomerMobileNo: body.CustomerMobileNo,
            CustomerAddress: body.CustomerAddress,
            CustomerSecondNumber: body.CustomerSecondNumber,
            CustomerEmail: body.CustomerEmail,
            IsActive: body.IsActive,
        
      },
    });

    return NextResponse.json(
      {
        customer: customer,
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

    // Check if the customer with the specified catID exists
    const existingItem = await db.customer.findUnique({
      where: {
        CustomerId: body.CustomerId,
      },
    });

    if (!existingItem) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    // Update the customer with the new data
    const updatedItem = await db.customer.update({
      where: {
        CustomerId: body.CustomerId,
      },
      data: {
        CustomerTitle: body.CustomerTitle,
        CustomerPhoneNo: body.CustomerPhoneNo,
        CustomerMobileNo: body.CustomerMobileNo,
        CustomerAddress: body.CustomerAddress,
        CustomerSecondNumber: body.CustomerSecondNumber,
        CustomerEmail: body.CustomerEmail,
        IsActive: body.IsActive,
  },
    });

    return NextResponse.json(
      {
        customer: updatedItem,
        message: "customer updated successfully",
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
    const { CustomerId } = body;

    // Check if the customer with the specified ID exists
    const existingcustomer = await db.customer.findUnique({
      where: {
        CustomerId,
      },
    });

    if (!existingcustomer) {
      return NextResponse.json(
        { message: "customer not found" },
        { status: 404 }
      );
    }

    // Delete the customer with the specified ID
    await db.customer.delete({
      where: {
        CustomerId,
      },
    });

    return NextResponse.json(
      {
        message: "Customer deleted successfully",
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
