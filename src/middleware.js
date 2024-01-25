import { NextResponse } from "next/server";
import { VerifyToken } from "./utils/JWTHelper"
import { throwError } from "./utils/response";

export const middleware = async (req,res,next)=>{
try {
    const token = req.cookies.get("token")
    if(!token) return throwError(401, "Oops! It seems like you're not authorized to access this resource.")

    const payload = await VerifyToken(token['value']);


    
} catch (error) {
    return NextResponse.redirect(new URL("/login",req.url))
}
  
}