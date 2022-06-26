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
import { AutorService } from './autor.service';

@Controller('autor')
export class AutorController {
  constructor(private readonly autorService: AutorService) {}

  @Post()
  create(@Body() createAutorDto: Prisma.autoresCreateInput) {
    return this.autorService.create(createAutorDto);
  }

  @Get()
  findAll(@Query() where: Prisma.autoresWhereInput) {
    return this.autorService.findAll(where);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autorService.findOne(+id);
  }

  @Put(':id')
  @HttpCode(204)
  update(
    @Param('id') id: string,
    @Body() updateAutorDto: Prisma.autoresUpdateInput
  ) {
    this.autorService.update(+id, updateAutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autorService.remove(+id);
  }
}
