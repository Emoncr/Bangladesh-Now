import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req, res, next) => {
  const reqBody = await req.json();
  const { password } = reqBody;
  const hashedPass = bcrypt.hashSync(password, 10);
  reqBody.otp = "0";
  reqBody.password = hashedPass;
  const prisma = new PrismaClient();
  try {
    await prisma.Users.create({
      data: reqBody,
    });

    return NextResponse.json(
      { status: "success", message: "Registration Successfull" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({
      status: "fali",
      error,
      message: toString(error),
    });
  }
};
