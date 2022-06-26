/*
  Warnings:

  - Added the required column `livro_id` to the `vendas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "vendas" ADD COLUMN     "livro_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "vendas" ADD CONSTRAINT "vendas_livro_id_fkey" FOREIGN KEY ("livro_id") REFERENCES "livros"("livro_id") ON DELETE RESTRICT ON UPDATE CASCADE;
