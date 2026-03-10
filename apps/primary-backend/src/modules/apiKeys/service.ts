import { prisma } from "db";
import {
  deleteApiKeyRequestSchema,
  updateApiKeyStatusRequestSchema,
} from "./model";

export abstract class ApiKeyService {
  static generateApiKey(length = 32) {
    const bytes = crypto.getRandomValues(new Uint8Array(length));
    return `sk-or-v1-${Buffer.from(bytes).toString("hex")}`;
  }
  static async getAllApiKeys(userId: number) {
    const apiKeys = await prisma.apiKey.findMany({
      where: {
        userId,
        deleted: false,
      },
    });
    return apiKeys;
  }
  static async createApiKey({
    userId,
    name,
  }: {
    userId: number;
    name: string;
  }) {
    const response = await prisma.apiKey.create({
      data: { name, userId, apiKey: ApiKeyService.generateApiKey() },
    });
    return {
      id: response.id,
      apiKey: response.apiKey,
    };
  }
  static async updateApiKeyStatus({
    id,
    userId,
    disable,
  }: updateApiKeyStatusRequestSchema) {
    const response = await prisma.apiKey.update({
      where: { userId, id },
      data: { disabled: disable },
    });
  }
  static async deleteApiKey({ id, userId }: deleteApiKeyRequestSchema) {
    await prisma.apiKey.delete({ where: { id, userId } });
  }
}
