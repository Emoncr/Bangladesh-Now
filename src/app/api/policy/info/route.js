export const dynamic = 'force-dynamic'; // Or 'server', blocking

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (req, res, next) => {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");

    const prisma = new PrismaClient();

    const result = await prisma.Policy.findMany({
      where: { type: type },
    });
    return NextResponse.json(
      {
        success: true,
        message: "Successfully created socials link",
        result
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
