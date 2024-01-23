import { GenarateToken } from "@/utils/JWTHelper";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req, res, next) => {
  const reqBody = await req.json();
  const prisma = new PrismaClient();
  try {
    const user = await prisma.Users.findUnique({
      where: { email: reqBody.email },
    });
    if (!user)
      return NextResponse.json(
        { status: "fail", message: "User not found" },
        { status: 401 }
      );
    const isValidPassword = bcrypt.compareSync(
      reqBody.password,
      user.password
    );
    if (!isValidPassword)
      return NextResponse.json(
        { status: "fail", message: "Wrong credential" },
        { status: 401 }
      );

    const token = await GenarateToken(user.email, user.id);
    const expeireDureation = new Date(Date.now() + 168 * 60 * 60 * 1000);
    const cookieString = `token=${token}; expires=${expeireDureation.toUTCString()}; path=/`;

    const {password, ...rest} = user;


    return NextResponse.json(
      { status: "success", user: rest, },
      { status: 200 , headers:{"set-cookie":cookieString}}
    );
  } catch (error) {
    return NextResponse.json({ status: "fail", message: error });
  }
};
