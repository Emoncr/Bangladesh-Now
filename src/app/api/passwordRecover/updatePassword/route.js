import { throwError } from "@/utils/response";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req, res, next) => {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();

    const isValidUser = await prisma.Users.findUnique({
      where: { email: reqBody.email },
    });
    if (!isValidUser) return throwError(404, "User information not found");

    const newHashedPass = bcrypt.hashSync(reqBody.newPassword, 10);
    const updatePassword = await prisma.Users.update({
      where: { id: isValidUser.id },
      data: { password: newHashedPass, otp:"000000" },
    });

    return NextResponse.json({
      success: true,
      message: "Password recovered successfully, Login Now!",
    });
  } catch (error) {
    return NextResponse.json({ success: false, error:error.toString() }, { status: 500 });
  }
};
