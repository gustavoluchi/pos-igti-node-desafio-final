/*
  Warnings:

  - Added the required column `livroinfo` to the `livros` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "livros" ADD COLUMN     "livroinfo" JSONB NOT NULL;
