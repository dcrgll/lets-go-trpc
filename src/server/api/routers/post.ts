import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { z } from 'zod'

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1), option: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
          snack: input.option,
          type: 'TRPC'
        }
      })
    }),
  read: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.post.findMany({
      where: {
        type: 'TRPC'
      },
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        name: true,
        snack: true,
        createdAt: true,
        updatedAt: true,
        type: true
      }
    })
  }),
  deleteAll: publicProcedure.mutation(async ({ ctx }) => {
    return ctx.db.post.deleteMany({
      where: {
        type: 'TRPC'
      }
    })
  })
})
