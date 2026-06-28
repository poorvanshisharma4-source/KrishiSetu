'use client'

import { useState, type ReactNode } from 'react'
import { Menu, X, Bell } from 'lucide-react'
import { SidebarNav, type NavItem } from '@/components/dashboard/sidebar-nav'

export function DashboardShell({
  items,
  roleLabel,
  userName,
  children,
}: {
  items: NavItem[]
  roleLabel: string
  userName: string
  children: ReactNode
}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-border bg-card lg:block">
        <SidebarNav items={items} roleLabel={roleLabel} />
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <aside className="absolute inset-y-0 left-0 w-64 border-r border-border bg-card">
            <button
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-md text-foreground"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
            <SidebarNav
              items={items}
              roleLabel={roleLabel}
              onNavigate={() => setMobileOpen(false)}
            />
          </aside>
        </div>
      )}

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background/85 px-4 py-3 backdrop-blur-md sm:px-6">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          <p className="hidden font-heading text-sm font-semibold text-foreground sm:block">
            {roleLabel} Portal
          </p>
          <div className="ml-auto flex items-center gap-3">
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-primary"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {userName.charAt(0)}
              </span>
              <span className="hidden text-sm font-medium text-foreground sm:block">
                {userName}
              </span>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">{children}</main>
      </div>
    </div>
  )
}
