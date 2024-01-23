import { NextResponse } from "next/server";

export const responseSuccess = (statusCode, message, data) => {
  return NextResponse.json(
    { success: true, message, data },
    { status: statusCode }
  );
};

export const throwError = (statusCode, message, error) => {
  return NextResponse.json(
    { success: false, message, error },
    { status: statusCode }
  );
};
