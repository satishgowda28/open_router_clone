import Elysia from "elysia";
import { authGuard } from "../../middleware/authGuard";
import { ApiKeysModel } from "./model";
import { ApiKeyService } from "./service";

export const apiKeys = new Elysia({ prefix: "/apiKeys" })
  .use(authGuard)
  .get(
    "/",
    async ({ userId, status }) => {
      try {
        const apiKeys = await ApiKeyService.getAllApiKeys(userId);
        return apiKeys;
      } catch (e) {
        return status(400, { message: "Something went wrong" });
      }
    },
    {
      body: ApiKeysModel.getApiKeyRequestSchema,
      response: {
        200: ApiKeysModel.getApiKeyResponseSchema,
        400: ApiKeysModel.getApiKeyFailedSchema,
      },
    },
  )
  .post(
    "/",
    async ({ body, status, userId }) => {
      console.log("userId", userId);
      console.log("typeof", typeof userId);
      try {
        const response = await ApiKeyService.createApiKey({
          userId: Number(userId),
          name: body.name,
        });
        return response;
      } catch (e) {
        return status(400, { message: "Failed creating a new api key" });
      }
    },
    {
      body: ApiKeysModel.createApiKeyRequestSchema,
      response: {
        200: ApiKeysModel.createApiKeyResponseSchema,
        400: ApiKeysModel.createApiKeyFailedSchema,
      },
    },
  )
  .put(
    "/:id",
    async ({ params: { id }, userId, body, status }) => {
      try {
        await ApiKeyService.updateApiKeyStatus({
          userId,
          id: Number(id),
          disable: body.disable,
        });
        return status(200, { message: "Updated Successfully" });
      } catch (e) {
        return status(400, { message: "Failed to upated Status" });
      }
    },
    {
      body: ApiKeysModel.updateApiKeyStatusRequestSchema,
      response: {
        200: ApiKeysModel.updateApiKeyStatusResponseSchema,
        400: ApiKeysModel.updateApiKeyStatusFailedSchema,
      },
    },
  )
  .delete(
    "/:id",
    async ({ params: { id }, userId, status }) => {
      try {
        await ApiKeyService.deleteApiKey({ id: Number(id), userId });
        return status(200, { message: "Deleted  Successfully" });
      } catch (e) {
        return status(400, { message: "Failed to Delete" });
      }
    },
    {
      body: ApiKeysModel.deleteApiKeyRequestSchema,
      response: {
        200: ApiKeysModel.deleteApiKeyResponseSchema,
        400: ApiKeysModel.deleteApiKeyFailedSchema,
      },
    },
  );
