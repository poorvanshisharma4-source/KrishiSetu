'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sprout, LogOut, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type NavItem = {
  label: string
  href: string
  icon: LucideIcon
}

export function SidebarNav({
  items,
  roleLabel,
  onNavigate,
}: {
  items: NavItem[]
  roleLabel: string
  onNavigate?: () => void
}) {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col">
      <Link href="/" className="flex items-center gap-2 px-6 py-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Sprout className="h-5 w-5" />
        </span>
        <span className="font-heading text-lg font-bold text-foreground">
          Krishi<span className="text-primary">Setu</span>
        </span>
      </Link>

      <p className="px-6 pb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {roleLabel}
      </p>

      <nav className="flex-1 space-y-1 px-3" aria-label="Dashboard">
        {items.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                active
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-secondary/40 hover:text-primary',
              )}
              aria-current={active ? 'page' : undefined}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-border p-3">
        <Link
          href="/"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-primary"
        >
          <LogOut className="h-5 w-5 shrink-0" />
          Logout
        </Link>
      </div>
    </div>
  )
}
