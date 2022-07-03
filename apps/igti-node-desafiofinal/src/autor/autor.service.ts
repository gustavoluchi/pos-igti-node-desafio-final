import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../app/prisma.service';

@Injectable()
export class AutorService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.autoresCreateInput) {
    return this.prisma.autores.create({ data });
  }

  findAll(where: Prisma.autoresWhereInput) {
    return this.prisma.autores.findMany({ where });
  }

  findOne(autor_id: number) {
    return this.prisma.autores.findUnique({ where: { autor_id } });
  }

  update(autor_id: number, data: Prisma.autoresUpdateInput) {
    return this.prisma.autores.update({ where: { autor_id }, data });
  }

  async remove(autor_id: number) {
    const linkedBook = await this.prisma.livros.findFirst({
      where: { autor_id },
    });
    if (linkedBook !== null) {
      // TODO: create a bussiness exception
      throw new BadRequestException(
        'Não é permitida a deleção de autor com livro vinculado.'
      );
    } else {
      try {
        await this.prisma.autores.delete({ where: { autor_id } });
      } catch (error) {
        throw new NotFoundException();
      }
    }
  }
}
