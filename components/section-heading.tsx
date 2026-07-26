'use client'

import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/components/LanguageContext'

export function SectionHeading({
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
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
          {translateIfKeyExists(eyebrow)}
        </p>
      )}

      <h2 className="mt-2 font-heading text-balance text-3xl font-bold text-foreground sm:text-4xl">
        {translateIfKeyExists(title)}
      </h2>

      {description && (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          {translateIfKeyExists(description)}
        </p>
      )}
    </Reveal>
  )
}