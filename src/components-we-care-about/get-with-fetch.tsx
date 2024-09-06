'use client'

import { useEffect, useState } from 'react'
import { type Post } from '@prisma/client'

import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import PostTable from '@/components/post-table'

export default function GetWithFetch() {
  const [posts, setPosts] = useState<Post[]>([])

  const getPosts = async () => {
    try {
      const res = await fetch('/api/fetch/read')
      const data = (await res.json()) as { posts: Post[] }
      setPosts(data.posts)
    } catch (error) {
      setPosts([])

      toast({
        title: 'Error fetching posts',
        description: 'Please try again later'
      })
    }
  }

  const deletePosts = async () => {
    try {
      await fetch('/api/fetch/delete', { method: 'DELETE' })
    } catch (error) {
      toast({
        title: 'Error deleting posts',
        description: 'Please try again later'
      })
    }
  }

  useEffect(() => {
    void getPosts()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Good ol&apos; fetch</CardTitle>
      </CardHeader>
      <CardContent>
        <PostTable posts={posts} />
      </CardContent>
      <CardFooter className="flex justify-end">
        {posts[0] && (
          <Button
            variant="destructive"
            onClick={async () => {
              await deletePosts()

              await getPosts()
            }}
          >
            Delete all
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
