import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req, res, next) => {
  const reqBody = await req.json();

  reqBody.otp = "0";
  console.log(reqBody);
  const prisma = new PrismaClient();
  try {
    await prisma.Users.create({
      data: reqBody,
    });
    return NextResponse.json(
      {status: "success", message: "Registration Successfull", },{ status: 201 }
    );
  } catch (error) {
    return NextResponse.json({
      status: "fali",
      error,
      message: toString(error),
    });
  }
};
