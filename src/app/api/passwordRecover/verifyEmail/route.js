import { throwError } from "@/utils/response";
import { SendEmail } from "@/utils/sendEmails";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req, res, next) => {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();

    const isValidUser = await prisma.Users.findUnique({
      where: { email: reqBody.email },
    });

    if (!isValidUser) return throwError(404, "Invaild Email");

    const otp = Math.floor(Math.random() * 1000000);
    const mailText = `Your password recovery OTP : ${otp} `;
    const mailSubject = `Bangladesh Now verification`;
    const mailTo = isValidUser.email;
    await SendEmail(mailTo, mailText, mailSubject);

    const updateOTP = await prisma.Users.update({
      where: {id:isValidUser.id},
      data: { otp: otp.toString() },
    });

    return NextResponse.json(
      { success: true, updateOTP, message: `OTP send to ${mailTo} ` },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
};
