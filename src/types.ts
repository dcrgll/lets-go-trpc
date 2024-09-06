import { z } from 'zod'

export const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'nName must be at least 2 characters.'
  }),
  option: z.string().min(2, {
    message: 'Option must be at least 2 characters.'
  })
})
