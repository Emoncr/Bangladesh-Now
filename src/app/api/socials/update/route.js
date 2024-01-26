import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const PATCH = async (req, res, next) => {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();

    const {id, ...rest} = reqBody;
    const result = await prisma.Socials.update({
      where: { id: reqBody.id },
      data: rest,
    });
    return NextResponse.json(
      {
        success: true,
        message: "Successfully updated socials link",
        result,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.toString() },
      { status: 400 }
    );
  }
};
