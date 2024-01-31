import { throwError } from "@/utils/response";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (req, res, next) => {
  try {
    const requestId = parseInt(req.headers.get("id"));
    const prisma = new PrismaClient();
    const user = await prisma.Users.findUnique({
      where: { id: requestId },
    });

    const { password,otp, ...rest } = user;
    return NextResponse.json({
      success: true,
      message: "User founded",
      user:rest,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "User not found", error: error.toString() },
      { status: 404 }
    );
  }
};
