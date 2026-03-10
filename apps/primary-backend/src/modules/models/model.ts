import { t, UnwrapSchema } from "elysia";
export const ModelsModel = {
  getModelsResponseSchema: t.Object({
    models: t.Array(
      t.Object({
        id: t.Number(),
        name: t.String(),
        slug: t.String(),
        companyId: t.Number(),
        company: t.Object({
          id: t.Number(),
          name: t.String(),
          website: t.String(),
        }),
      }),
    ),
  }),
  getProviderResponseSchema: t.Object({
    providers: t.Array(
      t.Object({
        id: t.Number(),
        name: t.String(),
        website: t.String(),
      }),
    ),
  }),
  getModelProviderSchema: t.Object({
    providers: t.Array(
      t.Object({
        id: t.Number(),
        modelId: t.Number(),
        providerId: t.Number(),
        inputTokenCost: t.Number(),
        outputTokenCost: t.Number(),
        model: t.Object({
          id: t.Number(),
          name: t.String(),
          slug: t.String(),
          companyId: t.Number(),
        }),
        provider: t.Object({
          id: t.Number(),
          name: t.String(),
          website: t.String(),
        }),
      }),
    ),
  }),
};

export type getModelResponseSchema = UnwrapSchema<
  typeof ModelsModel.getModelsResponseSchema
>;
export type getProviderResponseSchema = UnwrapSchema<
  typeof ModelsModel.getProviderResponseSchema
>;
export type getModelProviderSchema = UnwrapSchema<
  typeof ModelsModel.getModelProviderSchema
>;

/* {
    model: {
        id: number;
        name: string;
        slug: string;
        companyId: number;
    };
    provider: {
        id: number;
        name: string;
        website: string;
    };
} & {
    id: number;
    modelId: number;
    providerId: number;
    inputTokenCost: number;
    outputTokenCost: number;
} */
