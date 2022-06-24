-- CreateTable
CREATE TABLE "clientes" (
    "cliente_id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("cliente_id")
);

-- CreateTable
CREATE TABLE "autores" (
    "autor_id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "autores_pkey" PRIMARY KEY ("autor_id")
);

-- CreateTable
CREATE TABLE "livros" (
    "livro_id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "estoque" INTEGER NOT NULL,
    "autor_id" INTEGER NOT NULL,

    CONSTRAINT "livros_pkey" PRIMARY KEY ("livro_id")
);

-- CreateTable
CREATE TABLE "vendas" (
    "venda_id" SERIAL NOT NULL,
    "valor" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "cliente_id" INTEGER NOT NULL,

    CONSTRAINT "vendas_pkey" PRIMARY KEY ("venda_id")
);

-- AddForeignKey
ALTER TABLE "livros" ADD CONSTRAINT "livros_autor_id_fkey" FOREIGN KEY ("autor_id") REFERENCES "autores"("autor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vendas" ADD CONSTRAINT "vendas_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "clientes"("cliente_id") ON DELETE RESTRICT ON UPDATE CASCADE;
