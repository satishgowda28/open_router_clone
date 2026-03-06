import { jwt } from "@elysiajs/jwt";
import { Elysia } from "elysia";
import { AuthModel } from "./model";
import { AuthService } from "./service";

export const auth = new Elysia({ prefix: "/auth" })
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SCRETE!,
      exp: "7d",
    }),
  )
  .post(
    "/sign-in",
    async ({ body, status, cookie, jwt }) => {
      try {
        const { isValidUser, id } = await AuthService.singinService({
          email: body.email,
          password: body.password,
        });
        if (isValidUser && id) {
          cookie.auth.set({
            value: await jwt.sign({ id }),
            httpOnly: true,
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
          });
          return { message: "logged in" };
        }
        return status(400, { message: "Provide Proper Credentials" });
      } catch (e) {
        return status(400, { message: "Provide Proper Credentials" });
      }
    },
    {
      body: AuthModel.signInRequestSchema,
      response: {
        200: AuthModel.signInResponseSchema,
        400: AuthModel.signInFailedSchema,
      },
    },
  )
  .post(
    "/sign-up",
    async ({ body, status }) => {
      try {
        const response = await AuthService.singupService({
          email: body.email,
          password: body.password,
        });
        return response;
      } catch (e) {
        console.log(e);
        return status(400, { message: "Error while signing up" });
      }
    },
    {
      body: AuthModel.signUpRequestSchema,
      response: {
        200: AuthModel.signUpResponseSchema,
        400: AuthModel.signUpFailedSchema,
      },
    },
  );
