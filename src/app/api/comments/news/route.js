import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();

    let { searchParams } = new URL(req.url);
    let postID = parseInt(searchParams.get("postID"));

    const result = await prisma.comments.findMany({
      where: { postID: postID },
      include: {
        Users: { select: { firstName: true } },
      },
      orderBy: { id: "desc" },
    });
    return NextResponse.json({ success: true, data: result });
  } catch (e) {
    return NextResponse.json({ success: false, data: e.toString() });
  }
}
