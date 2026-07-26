'use client'

import { Award } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/components/LanguageContext'

export function TrustSystem() {
  const { t } = useLanguage()

  const badges = [
    {
      name: t('trust.bronze'),
      label: t('trust.verifiedUser'),
      color: '#a97142',
      ring: 'border-[#a97142]/30',
    },
    {
      name: t('trust.silver'),
      label: t('trust.reliablePartner'),
      color: '#9ca3af',
      ring: 'border-[#9ca3af]/40',
    },
    {
      name: t('trust.gold'),
      label: t('trust.highlyTrusted'),
      color: '#d4a017',
      ring: 'border-[#d4a017]/40',
    },
    {
      name: t('trust.platinum'),
      label: t('trust.eliteMember'),
      color: '#2e7d32',
      ring: 'border-primary/40',
    },
  ]

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('trust.eyebrow')}
          title={t('trust.title')}
          description={t('trust.description')}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge, i) => (
            <Reveal
              key={badge.name}
              delay={i * 0.1}
            >
              <div
                className={`group flex h-full flex-col items-center rounded-2xl border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${badge.ring}`}
              >
                <span
                  className="flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: `${badge.color}1a`,
                    color: badge.color,
                  }}
                >
                  <Award className="h-10 w-10" />
                </span>

                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                  {badge.name}
                </h3>

                <p
                  className="mt-1 text-sm font-medium"
                  style={{ color: badge.color }}
                >
                  {badge.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}