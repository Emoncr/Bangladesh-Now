import { GenarateToken } from "@/utils/JWTHelper";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { throwError } from "@/utils/response";

export const POST = async (req, res, next) => {
  const reqBody = await req.json();
  const prisma = new PrismaClient();
  try {
    const user = await prisma.Users.findUnique({
      where: { email: reqBody.email },
    });
    if (!user) return throwError(404, "User not found");

    const isValidPassword = bcrypt.compareSync(reqBody.password, user.password);
    if (!isValidPassword) return throwError(401, "Wrong credential");

  
    const token = await GenarateToken(user.email, user.id);
    const expeireDureation = new Date(Date.now() + 168 * 60 * 60 * 1000);
    const cookieString = `token=${token}; expires=${expeireDureation.toUTCString()}; path=/`;

    const { password, ...rest } = user;

    return NextResponse.json(
      { success: true, user: rest },
      { status: 200, headers: { "set-cookie": cookieString } }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
};
