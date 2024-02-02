import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let keyword = searchParams.get("keyword");

    const prisma = new PrismaClient();
    const result = await prisma.news_list.findMany({
      where: {
        OR: [
          {
            title: { contains: keyword },
          },
          {
            short_des: { contains: keyword },
          },
        ],
      },
      include: { Categories: true },
      take: 6,
      orderBy: { id: "desc" },
    });

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json({ success: false, data: error.toString() });
  }
}
