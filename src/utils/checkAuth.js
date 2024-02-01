import { cookies } from "next/headers";

export const checkLogin = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  return !token?.value ? false : true;
};
