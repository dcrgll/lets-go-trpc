import { api } from '@/trpc/server'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import PostTable from '@/components/post-table'

export default async function GetWithTRPCServer() {
  const data = await api.post.read()

  return (
    <Card animated>
      <CardHeader>
        <CardTitle>TRPC</CardTitle>
      </CardHeader>
      <CardContent>
        <PostTable posts={data} />
      </CardContent>
    </Card>
  )
}
