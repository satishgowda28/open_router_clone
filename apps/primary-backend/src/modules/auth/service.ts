import { prisma } from "db";
import type { signInRequestSchema, signUpRequestSchema } from "./model";

const HASH_ALGO = "argon2id";

export abstract class AuthService {
  static async singinService({
    email,
    password,
  }: signInRequestSchema): Promise<{ isValidUser: boolean; id?: string }> {
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) {
      return { isValidUser: false };
    }
    const isAuthenticate = await Bun.password.verify(
      password,
      user.password,
      HASH_ALGO,
    );
    if (!isAuthenticate) {
      return { isValidUser: false };
    }
    return { isValidUser: true, id: user.id.toString() };
  }
  static async singupService({
    email,
    password,
  }: signUpRequestSchema): Promise<{ id: string }> {
    const user = await prisma.user.create({
      data: { email, password: await Bun.password.hash(password, HASH_ALGO) },
    });
    return { id: user.id.toString() };
  }
}
