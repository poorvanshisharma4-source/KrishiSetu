'use client'

import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/components/LanguageContext'

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  const { t } = useLanguage()

  const translateIfKeyExists = (value?: string) => {
    if (!value) return value

    const translated = t(value)

    return translated === value ? value : translated
  }

  return (
    <section className="border-b border-border bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          {eyebrow && (
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
              {translateIfKeyExists(eyebrow)}
            </p>
          )}

          <h1 className="mt-2 font-heading text-balance text-4xl font-extrabold text-foreground sm:text-5xl">
            {translateIfKeyExists(title)}
          </h1>

          {description && (
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              {translateIfKeyExists(description)}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}