import GetWithTRPCServer from '@/components-we-care-about/get-with-trpc-server'
import PostWithTRPC from '@/components-we-care-about/post-with-trpc'
import { HydrateClient } from '@/trpc/server'

export default async function ServerPage() {
  return (
    <HydrateClient>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-2">
        <h1 className="mb-2 text-4xl font-bold">Server Component</h1>
        <div className="flex w-full">
          <div className="flex w-full">
            <div className="mx-auto flex max-w-[350px] flex-col gap-4">
              <PostWithTRPC />
            </div>
          </div>
          <div className="flex w-full">
            <div className="mx-auto flex w-[350px] flex-col gap-4">
              <GetWithTRPCServer />
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  )
}
