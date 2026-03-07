-- AlterTable
ALTER TABLE "ApiKey" ADD COLUMN     "creaditConsumend" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lastUsed" TIMESTAMP(3);
