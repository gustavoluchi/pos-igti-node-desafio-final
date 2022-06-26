import { Module } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { LivroController } from './livro.controller';
import { LivroService } from './livro.service';

@Module({
  controllers: [LivroController],
  providers: [PrismaService, LivroService],
})
export class LivroModule {}
