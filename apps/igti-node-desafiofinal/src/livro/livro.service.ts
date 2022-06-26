import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../app/prisma.service';

@Injectable()
export class LivroService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.livrosCreateInput) {
    return this.prisma.livros.create({ data });
  }

  findAll(where: Prisma.livrosWhereInput) {
    return this.prisma.livros.findMany({ where });
  }

  findOne(livro_id: number) {
    return this.prisma.livros.findUnique({ where: { livro_id } });
  }

  update(livro_id: number, data: Prisma.livrosUpdateInput) {
    return this.prisma.livros.update({ where: { livro_id }, data });
  }

  async remove(livro_id: number) {
    return this.prisma.livros.delete({ where: { livro_id } });
  }
}
