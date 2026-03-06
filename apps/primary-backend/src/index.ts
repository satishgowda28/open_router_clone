import { Elysia } from "elysia";
import { auth } from "./modules/auth";

const app = new Elysia()
  .use(auth)
  .get("/", () => "Hello Elysia 12334")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
