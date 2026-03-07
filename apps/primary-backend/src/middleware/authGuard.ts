import jwt from "@elysiajs/jwt";
import Elysia from "elysia";

export const authGuard = new Elysia()
  .use(jwt({ name: "jwt", secret: process.env.JWT_SECRETE! }))
  .resolve({ as: "scoped" }, async ({ jwt, cookie, status }) => {
    const token = cookie.auth?.value;
    if (!token) {
      return status(401, { message: "Unauthorized" });
    }
    const tokenPayload = await jwt.verify(token as string);
    if (!tokenPayload) {
      return status(401, { message: "Unauthorized" });
    }
    return {
      userId: tokenPayload.id,
    };
  });
