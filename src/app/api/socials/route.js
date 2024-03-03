export const dynamic = 'force-dynamic';
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (req, res, next) => {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.Socials.findMany(
      {
        select:{facebook:true,twitter:true, linkedin:true,youtube:true }
      }
    );


    return NextResponse.json(
      {
        success: true,
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
