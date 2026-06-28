import { Reveal } from '@/components/reveal'

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <section className="border-b border-border bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          {eyebrow && (
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-2 font-heading text-4xl font-extrabold text-foreground text-balance sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
