import { type Post } from '@prisma/client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

export default function PostTable({ posts }: { posts: Post[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Snack</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post: Post) => (
          <TableRow key={post.id}>
            <TableCell className="font-medium">{post.name}</TableCell>
            <TableCell className="text-right">{post.snack}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
