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
import { LivroService } from './livro.service';

@Controller('livro')
export class LivroController {
  constructor(private readonly livroService: LivroService) {}

  @Post()
  create(@Body() createlivroDto: Prisma.livrosCreateInput) {
    return this.livroService.create(createlivroDto);
  }

  @Get()
  findAll(@Query() where: Prisma.livrosWhereInput) {
    return this.livroService.findAll(where);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.livroService.findOne(+id);
  }

  @Put(':id')
  @HttpCode(204)
  update(
    @Param('id') id: string,
    @Body() updatelivroDto: Prisma.livrosUpdateInput
  ) {
    this.livroService.update(+id, updatelivroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.livroService.remove(+id);
  }
}
