import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
      <div className="w-full max-w-lg space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">User Management Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          View and manage users with our simple and intuitive dashboard.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}