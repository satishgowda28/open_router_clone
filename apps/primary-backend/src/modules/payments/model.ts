import { t, UnwrapSchema } from "elysia";
export const PaymentModel = {
  onRampResponseSchema: t.Object({
    message: t.Literal("Onramp Successful"),
    credits: t.Number(),
  }),
  onRampFailureResponseSchema: t.Object({
    message: t.Literal("OnRamp Failed due to some reason"),
  }),
};

export type onRampResponseSchema = UnwrapSchema<
  typeof PaymentModel.onRampResponseSchema
>;
export type onRampFailureResponseSchema = UnwrapSchema<
  typeof PaymentModel.onRampFailureResponseSchema
>;
