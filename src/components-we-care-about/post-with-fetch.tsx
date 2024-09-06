'use client'

import Link from 'next/link'
import { type FormSchema } from '@/types'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
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
      <Link
        href="https://github.com/dcrgll/lets-go-trpc/blob/main/src/components-we-care-about/post-with-fetch.tsx"
        target="_blank"
      >
        <GitHubLogoIcon className="mb-2 ml-2 hover:text-orange-400" />
      </Link>
    </Card>
  )
}
