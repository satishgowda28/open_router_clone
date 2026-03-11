import { Elysia } from "elysia";
import { apiKeys } from "./modules/apiKeys";
import { auth } from "./modules/auth";
import { llModels } from "./modules/models";
import { payment } from "./modules/payments";

const app = new Elysia()
  .use(auth)
  .use(apiKeys)
  .use(llModels)
  .use(payment)
  .get("/", () => "Hello Elysia 12334")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
