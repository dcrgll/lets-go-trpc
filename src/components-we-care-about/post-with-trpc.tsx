'use client'

import { api } from '@/trpc/react'
import { type FormSchema } from '@/types'
import { type z } from 'zod'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import BasicForm from '@/components/basic-form'

export default function PostWithTRPC() {
  const utils = api.useUtils()
  const { mutate } = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate()
    }
  })

  const handleSubmit = (data: z.infer<typeof FormSchema>) => {
    mutate(data)
  }

  return (
    <Card animated className="w-[350px]">
      <CardHeader>
        <CardTitle>TRPC</CardTitle>
        <CardDescription>Submit the form with TRPC</CardDescription>
      </CardHeader>
      <CardContent>
        <BasicForm handleSubmit={handleSubmit} />
      </CardContent>
    </Card>
  )
}
