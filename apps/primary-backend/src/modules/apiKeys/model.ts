import { t, UnwrapSchema } from "elysia";
export const ApiKeysModel = {
  getApiKeyRequestSchema: t.Object({
    userId: t.Number(),
  }),
  getApiKeyResponseSchema: t.Array(
    t.Object({
      userId: t.Number(),
      apiKey: t.String(),
      id: t.Number(),
      name: t.String(),
      disabled: t.Boolean(),
      deleted: t.Boolean(),
      lastUsed: t.Nullable(t.Date()),
      creaditConsumend: t.Number(),
    }),
  ),
  getApiKeyFailedSchema: t.Object({
    message: t.Literal("Something went wrong"),
  }),
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
  createApiKeyRequestSchema: t.Object({
    // userId: t.Number(),
    name: t.String(),
  }),
  createApiKeyResponseSchema: t.Object({
    id: t.Number(),
    apiKey: t.String(),
  }),
  createApiKeyFailedSchema: t.Object({
    message: t.Literal("Failed creating a new api key"),
  }),
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
  updateApiKeyStatusRequestSchema: t.Object({
    userId: t.Number(),
    id: t.Number(),
    disable: t.Boolean(),
  }),
  updateApiKeyStatusResponseSchema: t.Object({
    // disabled: t.Boolean(),
    message: t.Literal("Updated Successfully"),
  }),
  updateApiKeyStatusFailedSchema: t.Object({
    message: t.Literal("Failed to upated Status"),
  }),
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
  deleteApiKeyRequestSchema: t.Object({
    userId: t.Number(),
    id: t.Number(),
  }),
  deleteApiKeyResponseSchema: t.Object({
    message: t.Literal("Deleted  Successfully"),
  }),
  deleteApiKeyFailedSchema: t.Object({
    message: t.Literal("Failed to Delete"),
  }),
};

export type getApiKeyRequestSchema = UnwrapSchema<
  typeof ApiKeysModel.getApiKeyRequestSchema
>;
export type getApiKeyResponseSchema = UnwrapSchema<
  typeof ApiKeysModel.getApiKeyResponseSchema
>;
export type getApiKeyFailedSchema = UnwrapSchema<
  typeof ApiKeysModel.getApiKeyFailedSchema
>;
/* ==-=-=-=- */
export type createApiKeyRequestSchema = UnwrapSchema<
  typeof ApiKeysModel.createApiKeyRequestSchema
>;
export type createApiKeyResponseSchema = UnwrapSchema<
  typeof ApiKeysModel.createApiKeyResponseSchema
>;
export type createApiKeyFailedSchema = UnwrapSchema<
  typeof ApiKeysModel.createApiKeyFailedSchema
>;
/* =-=-=-=-= */
export type updateApiKeyStatusRequestSchema = UnwrapSchema<
  typeof ApiKeysModel.updateApiKeyStatusRequestSchema
>;
export type updateApiKeyStatusResponseSchema = UnwrapSchema<
  typeof ApiKeysModel.updateApiKeyStatusResponseSchema
>;
export type updateApiKeyStatusFailedSchema = UnwrapSchema<
  typeof ApiKeysModel.updateApiKeyStatusFailedSchema
>;
/* =-=-=-=-= */
export type deleteApiKeyRequestSchema = UnwrapSchema<
  typeof ApiKeysModel.deleteApiKeyRequestSchema
>;
export type deleteApiKeyResponseSchema = UnwrapSchema<
  typeof ApiKeysModel.deleteApiKeyResponseSchema
>;
export type deleteApiKeyFailedSchema = UnwrapSchema<
  typeof ApiKeysModel.deleteApiKeyFailedSchema
>;
