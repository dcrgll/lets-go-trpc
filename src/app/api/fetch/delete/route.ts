import { NextResponse } from 'next/server'
import { db } from '@/server/db'

export async function DELETE() {
  try {
    await db.post.deleteMany({
      where: {
        type: 'FETCH'
      }
    })

    return NextResponse.json({ message: 'Posts deleted' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}
