import { NextResponse } from 'next/server'
import { db } from '@/server/db'

export async function GET() {
  try {
    const posts = await db.post.findMany({
      where: {
        type: 'FETCH'
      },
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        name: true,
        snack: true,
        createdAt: true,
        type: true
      }
    })

    return NextResponse.json({ posts })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}
