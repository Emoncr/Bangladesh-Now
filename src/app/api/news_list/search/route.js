import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let keyword = searchParams.get("keyword");
    console.log(keyword, "before query");

    const prisma = new PrismaClient();
    const result = await prisma.news_list.findMany({
      where: {
        title: { contains: keyword, mode: "insensitive" },
        short_des: { contains: keyword, mode: "insensitive" },
      },
      include: { Categories: true },
      take: 10,
      orderBy: { id: "desc" },
    });
    console.log(keyword, "after query");
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json({ success: false, data: error.toString() });
  }
}
