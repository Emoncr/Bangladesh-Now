import { throwError } from "@/utils/response";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (req, res, next) => {
  try {
    const { searchParams } = new URL(req.url);
    const paramsId =parseInt(searchParams.get("id"));
    const requestId = parseInt(req.headers.get("id"));
    if (requestId !== paramsId) return throwError(401, "User isn't valid");

    const prisma = new PrismaClient(); 

    const user = await prisma.Users.findUnique({
      where: { id: requestId },
    });

    return NextResponse.json({
      success: true,
      message: "User founded",
      user,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "User not found" },
      { status: 404 }
    );
  }
};
