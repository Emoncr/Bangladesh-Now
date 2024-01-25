import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req, res, next) => {
  try {
    const reqBody = await req.json();

    const prisma = new PrismaClient();

    await prisma.Subscribers.create({
      data: reqBody,
    });

    return NextResponse.json({
      success: true,
      message: "subscription complete",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Subscriber request fail",
        error: error.toString(),
      },
      { status: 400 }
    );
  }
};
