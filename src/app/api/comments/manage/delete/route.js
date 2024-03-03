export const dynamic = 'force-dynamic'; // Or 'server', blocking

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const DELETE = async (req, res, next) => {
  try {
    const { searchParams } = new URL(req.url);
    const commentID = parseInt(searchParams.get("id"));

    const prisma = new PrismaClient();
    const res = await prisma.Comments.delete({
      where: { id: commentID },
    });

    return NextResponse.json({ success: true, message: res }, { status: 203 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
};
