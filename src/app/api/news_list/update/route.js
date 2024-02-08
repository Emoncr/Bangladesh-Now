import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req, res, next) => {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();

    const news = await prisma.News_list.update({
      where: { id: reqBody.id },
      data: reqBody,
    });

    return NextResponse.json(
      {
        success: true,
        message: "news Updated successfully",
        news,
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
