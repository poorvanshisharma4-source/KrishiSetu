'use client'

import {
  TrendingUp,
  Handshake,
  FileSignature,
  ShieldCheck,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/components/LanguageContext'

export function WhyKrishiSetu() {
  const { t } = useLanguage()

  const features = [
    {
      icon: TrendingUp,
      title: t('why.demand.title'),
      description: t('why.demand.description'),
    },
    {
      icon: Handshake,
      title: t('why.connection.title'),
      description: t('why.connection.description'),
    },
    {
      icon: FileSignature,
      title: t('why.agreements.title'),
      description: t('why.agreements.description'),
    },
    {
      icon: ShieldCheck,
      title: t('why.trust.title'),
      description: t('why.trust.description'),
    },
  ]

  return (
    <section id="features" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('why.eyebrow')}
          title={t('why.title')}
          description={t('why.description')}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={i * 0.1}
            >
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </span>

                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}