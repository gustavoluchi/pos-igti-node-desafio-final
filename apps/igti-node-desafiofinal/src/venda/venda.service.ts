import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../app/prisma.service';

@Injectable()
export class VendaService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.vendasCreateInput) {
    return this.prisma.vendas.create({ data });
  }

  findAll(where: Prisma.vendasWhereInput) {
    return this.prisma.vendas.findMany({ where });
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
