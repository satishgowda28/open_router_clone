import { Elysia } from "elysia";
import { authGuard } from "../../middleware/authGuard";
import { ModelsModel } from "./model";
import { ModelService } from "./service";

export const llModels = new Elysia({ prefix: "/models" })
  .use(authGuard)
  .get(
    "/",
    async ({ status }) => {
      const response = await ModelService.getAllTheModels();
      return { models: response };
    },
    {
      response: {
        200: ModelsModel.getModelsResponseSchema,
      },
    },
  )
  .get(
    "/providers",
    async () => {
      const response = await ModelService.getAllProvides();
      return { providers: response };
    },
    {
      response: {
        200: ModelsModel.getProviderResponseSchema,
      },
    },
  )
  .get(
    "/:id/providers",
    async ({ params: { id } }) => {
      const response = await ModelService.getModelProvides(Number(id));
      return {
        providers: response,
      };
    },
    {
      response: {
        200: ModelsModel.getModelProviderSchema,
      },
    },
  );
