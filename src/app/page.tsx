import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-2">
      <Button asChild>
        <Link href="/client">Client Components</Link>
      </Button>

      <Button asChild variant="outline">
        <Link href="/server">Server Components</Link>
      </Button>
    </main>
  )
}
