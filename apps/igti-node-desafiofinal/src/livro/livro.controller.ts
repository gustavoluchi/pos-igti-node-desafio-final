import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
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

  @Post(':id/avaliacao')
  createReview(@Param('id', ParseIntPipe) id: number, @Body() review: Review) {
    return this.livroService.createReview(id, review);
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
  update(
    @Param('id') id: string,
    @Body() updatelivroDto: Prisma.livrosUpdateInput
  ) {
    return this.livroService.update(+id, updatelivroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.livroService.remove(+id);
  }

  @Delete('/info/:id')
  removeInfo(@Param('id', ParseIntPipe) id: number) {
    return this.livroService.removeInfo(id);
  }

  @Delete(':id/avaliacao/:index')
  removeReview(
    @Param('id', ParseIntPipe) id: number,
    @Param('index', ParseIntPipe) index: number
  ) {
    return this.livroService.removeReview(id, index);
  }
}
