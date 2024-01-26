import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req, res, next) => {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();

    const result = await prisma.Socials.create({
      data: reqBody,
    });
    return NextResponse.json(
      {
        success: true,
        message: "Successfully created socials link",
        result,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.toString() },
      { status: 400 }
    );
  }
};
