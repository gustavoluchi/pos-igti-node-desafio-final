/*
  Warnings:

  - Changed the type of `valor` on the `livros` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `valor` on the `vendas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "livros" DROP COLUMN "valor",
ADD COLUMN     "valor" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "vendas" DROP COLUMN "valor",
ADD COLUMN     "valor" INTEGER NOT NULL,
ALTER COLUMN "data" SET DEFAULT CURRENT_TIMESTAMP;
