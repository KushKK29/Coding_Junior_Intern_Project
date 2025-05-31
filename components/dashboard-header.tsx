'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { Search } from 'lucide-react'
import { Input } from './ui/input'

interface DashboardHeaderProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

export function DashboardHeader({ searchTerm, setSearchTerm }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold tracking-tight">User Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search users..."
              className="w-full md:w-[200px] lg:w-[300px] pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button asChild>
            <Link href="/dashboard/add">Add User</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}