import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { vendaQuery } from './interfaces/query';
import { VendaService } from './venda.service';

@Controller('venda')
export class VendaController {
  constructor(private readonly vendaService: VendaService) {}

  @Post()
  create(
    @Body() createVendaDto: Omit<Prisma.vendasUncheckedCreateInput, 'valor'>
  ) {
    return this.vendaService.create(createVendaDto);
  }

  @Get()
  findAll(@Query() where: vendaQuery) {
    return this.vendaService.findAll(where);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.vendaService.findOne(id);
  }

  @Put(':id')
  @HttpCode(204)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateVendaDto: Prisma.vendasUpdateInput
  ) {
    this.vendaService.update(id, updateVendaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.vendaService.remove(id);
  }
}
