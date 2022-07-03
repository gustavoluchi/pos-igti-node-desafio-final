import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../app/prisma.service';

@Injectable()
export class LivroService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.livrosCreateInput) {
    return this.prisma.livros.create({ data });
  }

  async createReview(livro_id: number, newReview: Review) {
    const bookToUpdate = await this.prisma.livros.findUnique({
      where: { livro_id: livro_id },
    });
    if (bookToUpdate === null) throw new NotFoundException();
    const bookInfo: any = bookToUpdate?.livroinfo;
    let reviews: any[] | undefined = bookInfo?.avaliacoes;
    Array.isArray(reviews) ? reviews.push(newReview) : (reviews = [newReview]);
    return this.prisma.livros.update({
      where: { livro_id: livro_id },
      data: { livroinfo: { ...bookInfo, avaliacoes: reviews } },
    });
  }

  findAll(where: Prisma.livrosWhereInput) {
    return this.prisma.livros.findMany({
      where: {
        ...where,
        autor_id: parseInt('' + where?.autor_id) || undefined,
      },
    });
  }

  findOne(livro_id: number) {
    return this.prisma.livros.findUnique({ where: { livro_id } });
  }

  update(livro_id: number, data: Prisma.livrosUncheckedUpdateInput) {
    if (data?.nome !== undefined || data?.autor_id !== undefined)
      throw new BadRequestException(
        'Não é permitida a alteração do nome ou da autoria.'
      );
    return this.prisma.livros.update({ where: { livro_id }, data });
  }

  async remove(livro_id: number) {
    const associatedSell = await this.prisma.vendas.findFirst({
      where: { livro_id },
    });
    if (associatedSell !== null) {
      // TODO: create a bussiness exception
      throw new BadRequestException(
        'Não é permitida a deleção de livro com venda vinculada.'
      );
    } else {
      try {
        await this.prisma.livros.delete({ where: { livro_id } });
      } catch (error) {
        throw new NotFoundException();
      }
    }
  }

  removeInfo(livro_id: number) {
    return this.prisma.livros.update({
      where: { livro_id },
      data: { livroinfo: {} },
    });
  }

  async removeReview(livro_id: number, reviewIndex: number) {
    const bookToUpdate = await this.prisma.livros.findUnique({
      where: { livro_id: livro_id },
    });
    if (bookToUpdate === null) throw new NotFoundException();
    const bookInfo: any = bookToUpdate?.livroinfo;
    let avaliacoes: any = bookInfo?.avaliacoes;
    if (avaliacoes[reviewIndex] === undefined)
      throw new NotFoundException('avaliação não encontrada.');
    avaliacoes.splice(reviewIndex, 1);
    return this.prisma.livros.update({
      where: { livro_id: livro_id },
      data: { livroinfo: { ...bookInfo, avaliacoes } },
    });
  }
}
