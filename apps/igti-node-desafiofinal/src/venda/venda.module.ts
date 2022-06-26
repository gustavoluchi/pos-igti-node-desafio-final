import { Module } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { VendaController } from './venda.controller';
import { VendaService } from './venda.service';

@Module({
  controllers: [VendaController],
  providers: [PrismaService, VendaService],
})
export class VendaModule {}
