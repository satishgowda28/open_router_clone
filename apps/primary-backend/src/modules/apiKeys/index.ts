import Elysia from "elysia";
import { authGuard } from "../../middleware/authGuard";

export const apiKeys = new Elysia({ prefix: "/apiKeys" })
  .use(authGuard)
  .get("/test", async ({ userId }) => {
    return { userId };
  })
  .post("/", async () => {})
  .post("/disable", async () => {})
  .delete("/", async () => {});
