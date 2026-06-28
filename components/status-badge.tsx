import { cn } from '@/lib/utils'

const styles: Record<string, string> = {
  // positive / active
  Available: 'bg-primary/10 text-primary',
  Active: 'bg-primary/10 text-primary',
  Open: 'bg-primary/10 text-primary',
  Delivered: 'bg-primary/10 text-primary',
  Completed: 'bg-primary/10 text-primary',
  // in progress
  Reserved: 'bg-accent/15 text-accent',
  Pending: 'bg-accent/15 text-accent',
  Processing: 'bg-accent/15 text-accent',
  Shipped: 'bg-accent/15 text-accent',
  Matched: 'bg-accent/15 text-accent',
  // neutral / closed
  Sold: 'bg-muted text-muted-foreground',
  Closed: 'bg-muted text-muted-foreground',
  Cancelled: 'bg-destructive/10 text-destructive',
}

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
        styles[status] ?? 'bg-muted text-muted-foreground',
      )}
    >
      {status}
    </span>
  )
}
