import { NextResponse } from "next/server";

export const responseSuccess = (statusCode, message, data) => {
  return NextResponse.json(
    { status: "success", message, data },
    { status: statusCode }
  );
};

export const throwError = (statusCode, message, error) => {
  return NextResponse.json(
    { status: "failed", message, error },
    { status: statusCode }
  );
};
