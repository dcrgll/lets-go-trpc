'use client'

import { api } from '@/trpc/react'

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
    </Card>
  )
}
