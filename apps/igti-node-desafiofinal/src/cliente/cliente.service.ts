import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../app/prisma.service';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.clientesCreateInput) {
    return this.prisma.clientes.create({ data });
  }
  async findAll(where: Prisma.clientesWhereInput) {
    return this.prisma.clientes.findMany({
      where,
      select: {
        cliente_id: true,
        nome: true,
        email: true,
        telefone: true,
        endereco: true,
      },
    });
  }

  findOne(cliente_id: number) {
    return this.prisma.clientes.findUnique({
      where: { cliente_id },
      select: {
        cliente_id: true,
        nome: true,
        email: true,
        telefone: true,
        endereco: true,
      },
    });
  }

  update(cliente_id: number, data: Prisma.clientesUpdateInput) {
    return this.prisma.clientes.update({ where: { cliente_id }, data });
  }

  async remove(cliente_id: number) {
    const associatedSell = await this.prisma.vendas.findFirst({
      where: { cliente_id },
    });
    if (associatedSell !== null) {
      // TODO: create a bussiness exception
      throw new BadRequestException(
        'Não é permitida a deleção de cliente com venda vinculada.'
      );
    } else {
      try {
        await this.prisma.clientes.delete({ where: { cliente_id } });
      } catch (error) {
        throw new NotFoundException();
      }
    }
  }
}
