import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const transactionRouter = createTRPCRouter({

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.transaction.findMany();
  }),


  add: publicProcedure.input(z.object({
    description: z.string(),
    name: z.string(),
    amount: z.number(),
    date: z.date(),
    category: z.string(),
    categoryClass: z.string(),
    fixed: z.boolean(),
  })).mutation(({ input, ctx }) => {
    return ctx.prisma.transaction.create({
      data: {
        description: input.description,
        name: input.name,
        amount: input.amount,
        date: input.date,
        category: input.category,
        categoryClass: input.categoryClass,
        fixed: input.fixed,
      },
    });
  }
  ),


  delete: publicProcedure.input(z.object({
    id: z.string(),
  })).mutation(({ input, ctx }) => {
    return ctx.prisma.transaction.delete({
      where: {
        id: input.id,
      },
    });
  }),

  update: publicProcedure.input(z.object({
    id: z.string(),
    description: z.string(),
    name: z.string(),
    amount: z.number(),
    date: z.date(),
    category: z.string(),
    categoryClass: z.string(),
    fixed: z.boolean(),
  })).mutation(({ input, ctx }) => {
    return ctx.prisma.transaction.update({
      where: {
        id: input.id,
      },
      data: {
        description: input.description,
        name: input.name,
        amount: input.amount,
        date: input.date,
        category: input.category,
        categoryClass: input.categoryClass,
        fixed: input.fixed,
      },
    });
  })
  
});
