

export const dynamic = 'server'; // Or 'server'

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let type = searchParams.get("type");

    const prisma = new PrismaClient();
    const result = await prisma.news_list.findMany({
      where: { type: type },
      include: { Categories: true },
    });
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.toString() });
  }
}
