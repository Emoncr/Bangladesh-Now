import { SignJWT, jwtVerify } from "jose";

export const GenarateToken = async (email, id) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

  const payload = { email, id };
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(process.env.JWT_EXPIRES_IN)
    .setIssuedAt()
    .setSubject(payload)
    .sign(secret);

  return token;
};

export const VerifyToken = async (token) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
  const decodedToken = await jwtVerify(token, secret);
  return decodedToken["payload"];
};
