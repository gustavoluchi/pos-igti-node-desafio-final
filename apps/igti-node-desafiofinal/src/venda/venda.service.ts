import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../app/prisma.service';
import { vendaQuery } from './interfaces/query';

@Injectable()
export class VendaService {
  constructor(private prisma: PrismaService) {}

  async create(data: Omit<Prisma.vendasUncheckedCreateInput, 'valor'>) {
    const book = await this.prisma.livros.findFirst({
      where: { livro_id: data.livro_id },
      select: { estoque: true, valor: true },
    });
    if (book.estoque < 1) {
      const BOOK_OUT_OF_STOCK =
        'Não há estoque para o livro indicado. Venda não realizada.';
      throw new BadRequestException(BOOK_OUT_OF_STOCK);
    }
    const [_, createdVenda] = await this.prisma.$transaction([
      this.prisma.livros.update({
        where: { livro_id: data.livro_id },
        data: { estoque: book.estoque - 1 },
      }),
      this.prisma.vendas.create({
        data: { ...data, valor: book.valor },
      }),
    ]);
    return createdVenda;
  }

  findAll(where: vendaQuery) {
    const { autor_id, ...newWhere } = where;
    return this.prisma.vendas.findMany({
      where: {
        ...newWhere,
        cliente_id: parseInt('' + where?.cliente_id) || undefined,
        livro_id: parseInt('' + where?.livro_id) || undefined,
        livro: { autor_id: parseInt('' + autor_id) || undefined },
      },
    });
  }

  findOne(venda_id: number) {
    return this.prisma.vendas.findUnique({ where: { venda_id } });
  }

  update(venda_id: number, data: Prisma.vendasUpdateInput) {
    return this.prisma.vendas.update({ where: { venda_id }, data });
  }

  async remove(venda_id: number) {
    return this.prisma.vendas.delete({ where: { venda_id } });
  }
}
