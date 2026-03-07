import { t, UnwrapSchema } from "elysia";

export const AuthModel = {
  signInRequestSchema: t.Object({
    email: t.String(),
    password: t.String(),
  }),
  signInResponseSchema: t.Object({
    message: t.Literal("logged in"),
  }),
  signInFailedSchema: t.Object({
    message: t.Literal("Provide Proper Credentials"),
  }),

  signUpRequestSchema: t.Object({
    email: t.String(),
    password: t.String(),
  }),
  signUpResponseSchema: t.Object({
    id: t.Number(),
  }),
  signUpFailedSchema: t.Object({
    message: t.Literal("Error while signing up"),
  }),
} as const;

export type signInRequestSchema = UnwrapSchema<
  typeof AuthModel.signInRequestSchema
>;
export type signInResponseSchema = UnwrapSchema<
  typeof AuthModel.signInResponseSchema
>;
export type signInFailedSchema = UnwrapSchema<
  typeof AuthModel.signInFailedSchema
>;
export type signUpRequestSchema = UnwrapSchema<
  typeof AuthModel.signUpRequestSchema
>;
export type signUpResponseSchema = UnwrapSchema<
  typeof AuthModel.signUpResponseSchema
>;
export type signUpFailedSchema = UnwrapSchema<
  typeof AuthModel.signUpFailedSchema
>;
