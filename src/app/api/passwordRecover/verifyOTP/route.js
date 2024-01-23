import { throwError } from "@/utils/response";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req, res, next) => {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();

    const isValidOTP = await prisma.Users.findUnique({
      where: reqBody,
    });

    if (!isValidOTP) return throwError(404, "Wrong OTP");

    return NextResponse.json(
      { success: true, message: "OTP Matched!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
};
