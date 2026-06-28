import { Reveal } from '@/components/reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </Reveal>
  )
}
