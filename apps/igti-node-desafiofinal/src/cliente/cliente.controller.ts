import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  create(@Body() createClienteDto: Prisma.clientesCreateInput) {
    return this.clienteService.create(createClienteDto);
  }

  @Get()
  findAll(@Query() where: Prisma.clientesWhereInput) {
    return this.clienteService.findAll(where);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(+id);
  }

  @Put(':id')
  @HttpCode(204)
  update(
    @Param('id') id: string,
    @Body() updateClienteDto: Prisma.clientesUpdateInput
  ) {
    this.clienteService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clienteService.remove(+id);
  }
}
