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
import { VendaService } from './venda.service';

@Controller('venda')
export class VendaController {
  constructor(private readonly vendaService: VendaService) {}

  @Post()
  create(@Body() createVendaDto: Prisma.vendasCreateInput) {
    return this.vendaService.create(createVendaDto);
  }

  @Get()
  findAll(@Query() where: Prisma.vendasWhereInput) {
    return this.vendaService.findAll(where);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendaService.findOne(+id);
  }

  @Put(':id')
  @HttpCode(204)
  update(
    @Param('id') id: string,
    @Body() updateVendaDto: Prisma.vendasUpdateInput
  ) {
    this.vendaService.update(+id, updateVendaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendaService.remove(+id);
  }
}
