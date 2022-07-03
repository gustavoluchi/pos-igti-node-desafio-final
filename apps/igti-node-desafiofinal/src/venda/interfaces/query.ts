import { Prisma } from '@prisma/client';

export interface vendaQuery extends Prisma.vendasWhereInput {
  autor_id?: string;
}
