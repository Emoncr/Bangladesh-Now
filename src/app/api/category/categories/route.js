import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (req, res, next) => {
  try {

    const prisma = new PrismaClient();
    const categories = await prisma.Categories.findMany({
        select: { name: true, id: true },
      });
    return NextResponse.json(
      {
        success: true,
        categories,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.toString() },
      { status: 400 }
    );
  }
};
