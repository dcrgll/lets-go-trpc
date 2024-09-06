'use client'

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

export default function PostWithFetch() {
  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const res = await fetch('/api/fetch/create', {
        method: 'POST',
        body: JSON.stringify(data)
      })

      if (!res.ok) {
        throw new Error('Failed to create post')
      }

      location.reload()
    } catch (error) {}
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Good ol&apos; fetch</CardTitle>
        <CardDescription>Submit the form with the fetch API</CardDescription>
      </CardHeader>
      <CardContent>
        <BasicForm handleSubmit={handleSubmit} />
      </CardContent>
    </Card>
  )
}
