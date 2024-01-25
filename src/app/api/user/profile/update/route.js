import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req, res, next) => {
  try {
    const requestId = parseInt(req.headers.get("id"));
    const reqBody = await req.json();
    const prisma = new PrismaClient();

    const user = await prisma.Users.update({
      where: { id: requestId },
      data: reqBody,
    });

    const { password, otp, ...rest } = user;
    return NextResponse.json({
      success: true,
      message: "User updated successfully",
     user: rest,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "User not found", error: error.toString() },
      { status: 404 }
    );
  }
};
