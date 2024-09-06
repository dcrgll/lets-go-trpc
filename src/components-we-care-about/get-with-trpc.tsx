'use client'

import Link from 'next/link'
import { api } from '@/trpc/react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import PostTable from '@/components/post-table'

export default function GetWithTRPC() {
  const utils = api.useUtils()
  const { data } = api.post.read.useQuery()
  const { mutate: deleteAll } = api.post.deleteAll.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate()
    }
  })

  return (
    <Card animated>
      <CardHeader>
        <CardTitle>TRPC</CardTitle>
      </CardHeader>
      <CardContent>{data && <PostTable posts={data} />}</CardContent>
      <CardFooter className="flex justify-end">
        {data?.[0] && (
          <Button
            variant="destructive"
            onClick={() => {
              deleteAll()
            }}
          >
            Delete all
          </Button>
        )}
      </CardFooter>
      <Link
        href="https://github.com/dcrgll/lets-go-trpc/blob/main/src/components-we-care-about/get-with-trpc.tsx"
        target="_blank"
      >
        <GitHubLogoIcon className="mb-2 ml-2 hover:text-orange-400" />
      </Link>
    </Card>
  )
}
