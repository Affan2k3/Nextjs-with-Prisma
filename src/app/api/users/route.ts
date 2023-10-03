import { db } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
// import * as z from "zod";

// const userSchema = z.object({
//   username: z.string().min(1, "Username is required").max(100),
//   email: z.string().min(1, "Email is required").email("Invalid email"),
//   password: z
//     .string()
//     .min(1, "Password is required")
//     .min(8, "Password must have than 8 characters"),
//   confirmPassword: z.string().min(1, "Password confirmation is required"),
// });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, username, password } = body;
    const existingUserbyEmail = await db.user.findUnique({
      where: { email: email },
    });

    if (existingUserbyEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "User with this email already exists",
        },
        { status: 409 }
      );
    }

    const existingUserbyUsername = await db.user.findUnique({
      where: { username: username },
    });

    if (existingUserbyUsername) {
      return NextResponse.json(
        {
          user: null,
          message: "User with this username already exists",
        },
        { status: 409 }
      );
    }

    const newUser = await db.user.create({
      data: {
        username,
        email,
        password,
      },
    });
    const { password: newUserName, ...rest } = newUser;
    return NextResponse.json(
      {
        user: rest,
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

export async function GET(req: NextRequest) {
  try {
    // Assuming you have a 'db' object for database access.
    const users = await db.user.findMany(); // Retrieve all users from the database.

    return NextResponse.json(
      {
        users,
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
