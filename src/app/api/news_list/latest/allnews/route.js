import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.news_list.findMany({
      take: 40,
      include: { Categories: true },
      orderBy: { id: "desc" },
    });
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.toString() },
      { status: 500 }
    );
  }
}
