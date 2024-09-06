import { NextResponse, type NextRequest } from 'next/server'
import { db } from '@/server/db'

export async function POST(req: NextRequest) {
  const body = (await req.json()) as {
    name: string
    option: string
  }

  const { name, option } = body

  try {
    const post = await db.post.create({
      data: {
        name,
        snack: option,
        type: 'FETCH'
      }
    })

    return NextResponse.json({ post })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}
