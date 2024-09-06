import Link from 'next/link'
import { api } from '@/trpc/server'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

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
      <Link
        href="https://github.com/dcrgll/lets-go-trpc/blob/main/src/components-we-care-about/get-with-trpc-server.tsx"
        target="_blank"
      >
        <GitHubLogoIcon className="mb-2 ml-2 hover:text-orange-400" />
      </Link>
    </Card>
  )
}
