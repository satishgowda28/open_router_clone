import { Elysia } from "elysia";
import { authGuard } from "../../middleware/authGuard";
import { PaymentModel } from "./model";
import { PaymentService } from "./service";

export const payment = new Elysia({ prefix: "/payment" }).use(authGuard).post(
  "/onramp",
  async ({ userId, status }) => {
    try {
      const credits = await PaymentService.onRamp(userId);
      return {
        message: "Onramp Successful",
        credits,
      };
    } catch (e) {
      return status(400, { message: "OnRamp Failed due to some reason" });
    }
  },
  {
    response: {
      200: PaymentModel.onRampResponseSchema,
      400: PaymentModel.onRampFailureResponseSchema,
    },
  },
);
