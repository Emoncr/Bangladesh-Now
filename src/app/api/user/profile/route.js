import { PrismaClient } from "@prisma/client";
import { useParams } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = async (req, res, next) => {
  try {
    const { searchParams } = new URL(req.url);
    console.log(searchParams);
    const id = searchParams.get("id");
    const prisma = new PrismaClient();


  } catch (error) {
    return NextResponse.json(
      { success: false, message: "User not found" },
      { status: 404 }
    );
  }
};
