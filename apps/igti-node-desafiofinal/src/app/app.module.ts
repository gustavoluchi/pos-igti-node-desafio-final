import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AutorModule } from '../autor/autor.module';
import { ClienteModule } from '../cliente/cliente.module';
import { LivroModule } from '../livro/livro.module';
import { VendaModule } from '../venda/venda.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [    ConfigModule.forRoot(), VendaModule, AutorModule, ClienteModule, LivroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
