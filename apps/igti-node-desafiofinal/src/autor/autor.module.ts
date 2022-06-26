import { Module } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { AutorController } from './autor.controller';
import { AutorService } from './autor.service';

@Module({
  controllers: [AutorController],
  providers: [PrismaService, AutorService],
})
export class AutorModule {}
