import { NextResponse } from "next/server";

export const responseSuccess = (statusCode, message, data) => {
  return NextResponse.json(
    { status: "success", message, data },
    { status: statusCode }
  );
};
