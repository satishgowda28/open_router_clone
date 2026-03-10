import { Elysia } from "elysia";
import { authGuard } from "../../middleware/authGuard";

export const llModels = new Elysia({ prefix: "/models" })
  .use(authGuard)
  .get("/", () => {})
  .get("/providers", async () => {})
  .get("/:id/providers", async () => {});
