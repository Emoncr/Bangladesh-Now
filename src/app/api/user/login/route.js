import { GenarateToken } from "@/utils/JWTHelper";
import { NextResponse } from "next/server";

export const POST = async (req, res, next) => {
  const reqBody = await req.json();
  

  return NextResponse.json(tooken);
};
