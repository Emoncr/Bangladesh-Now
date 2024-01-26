import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (req, res, next) => {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.Socials.findMany();

    return NextResponse.json(
      {
        success: true,

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
