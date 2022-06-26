import { Module } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';

@Module({
  controllers: [ClienteController],
  providers: [PrismaService, ClienteService],
})
export class ClienteModule {}
