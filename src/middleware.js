import { NextResponse } from "next/server";
import { VerifyToken } from "./utils/JWTHelper";
import { throwError } from "./utils/response";

export const middleware = async (req, res, next) => {
  try {
    const token = req.cookies.get("token");

    if (!token)  return NextResponse.redirect(new URL("/login", req.url)); 

    const payload = await VerifyToken(token["value"]);

    const requestHeader = req.headers;
    requestHeader.set("id", payload["id"]);
    requestHeader.set("email", payload["email"]);
    return NextResponse.next({ request: { headers: requestHeader } });
  } catch (error) {
    if (req.nextUrl.pathname.startsWith("/api/")) {
      return NextResponse.json({
        success: false,
        message: "Unauthorized request",
      });
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
};

export const config = {
  matcher: [
    "/api/user/profile/:path*",
    "/api/comments/manage/:path*",
    "/profile",
    "/comments",
  ],
};
