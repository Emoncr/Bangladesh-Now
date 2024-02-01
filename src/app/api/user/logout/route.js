import { NextResponse } from "next/server";

export const GET = async (req, res, next) => {
  const expireDate = new Date(Date.now() - 168 * 60 * 60 * 1000);
  const response = NextResponse.redirect(new URL("/", req.url), 303);
  response.cookies.set("token", "", { expires: expireDate });
  return response;
};
