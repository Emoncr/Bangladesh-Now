import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req, res, next) => {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const {id, ...rest}= reqBody; 

    const result = await prisma.Categories.update({
      where: {id},
      data:rest,
      select:{id:true,name:true}
    });
    return NextResponse.json(
      {
        success: true,
        message: "Categoru updated successfully",
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
