import { prisma } from "db";

export const ModelService = {
  async getAllTheModels() {
    const allModelData = await prisma.model.findMany({
      include: {
        company: true,
      },
    });

    return allModelData;
  },
  async getAllProvides() {
    const allProviders = await prisma.provider.findMany();

    return allProviders;
  },
  async getModelProvides(modelId: number) {
    const response = await prisma.modelProviderMapping.findMany({
      where: {
        modelId,
      },
      include: {
        provider: true,
        model: true,
      },
    });

    return response;
  },
};
