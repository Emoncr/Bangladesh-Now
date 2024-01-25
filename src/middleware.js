import { NextResponse } from "next/server";
import { VerifyToken } from "./utils/JWTHelper";
import { throwError } from "./utils/response";

export const middleware = async (req, res, next) => {
  try {
    const token = req.cookies.get("token");
    if (!token)
      return throwError(
        401,
        "Oops! It seems like you're not authorized to access this resource."
      );

    const payload = await VerifyToken(token["value"]);

    const requestHeader = req.headers;
    requestHeader.set("id", payload["id"]);
    requestHeader.set("email", payload["email"]);

    return NextResponse.next({ request: { headers: requestHeader } });
  } catch (error) {
    const requestHeader = req.headers;
    requestHeader.set("id", false);
    requestHeader.set("email", false);

    return NextResponse.next({ request: { headers: requestHeader } });
  }
}; 

export const config = {
  matcher: ["/api/user/profile/:path*"],
};
