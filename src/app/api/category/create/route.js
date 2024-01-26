import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req, res, next) => {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.Categories.create({
      data: reqBody,
      select: { name: true, id: true },
    });
    return NextResponse.json(
      {
        success: true,
        message: "A new category created",
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
