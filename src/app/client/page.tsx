import GetWithFetch from '@/components-we-care-about/get-with-fetch'
import GetWithTRPC from '@/components-we-care-about/get-with-trpc'
import PostWithFetch from '@/components-we-care-about/post-with-fetch'
import PostWithTRPC from '@/components-we-care-about/post-with-trpc'
import { HydrateClient } from '@/trpc/server'

export default async function ClientPage() {
  return (
    <HydrateClient>
      <main className="container mx-auto flex min-h-screen items-center justify-center gap-2">
        <div className="flex w-full">
          <div className="mx-auto flex max-w-[350px] flex-col gap-4">
            <PostWithFetch />
            <PostWithTRPC />
          </div>
        </div>

        <div className="flex w-full">
          <div className="mx-auto flex w-[350px] flex-col gap-4">
            <GetWithFetch />
            <GetWithTRPC />
          </div>
        </div>
      </main>
    </HydrateClient>
  )
}
