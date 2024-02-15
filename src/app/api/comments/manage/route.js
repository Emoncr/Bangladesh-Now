import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req, res) {
  try {
    let headerList = headers();
    let id = parseInt(headerList.get("id"));

    const prisma = new PrismaClient();
    const result = await prisma.comments.findMany({
      where: { userID: id },
      include: {
        News_list: {
          include: { Categories: {select:{name:true}} },
        },
      },
      orderBy:{id:"desc"}
    });

    return NextResponse.json({ success: true, data: result });
  } catch (e) {
    return NextResponse.json({ success: false, data: e.toString() });
  }
}
  

export async function POST(req, res) {
  try {
    let headerList = headers();
    let id = parseInt(headerList.get("id"));

    let reqBody = await req.json();
    reqBody.userID = id;

    const prisma = new PrismaClient();
    const result = await prisma.comments.create({
      data: reqBody,
    });
    return NextResponse.json({ success: true, data: result });
  } catch (e) {
    return NextResponse.json({ success: false, data: e.toString() });
  }
}
