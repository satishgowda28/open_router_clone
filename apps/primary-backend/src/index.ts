import { Elysia } from "elysia";
import { apiKeys } from "./modules/apiKeys";
import { auth } from "./modules/auth";

const app = new Elysia()
  .use(auth)
  .use(apiKeys)
  .get("/", () => "Hello Elysia 12334")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
