'use client'

import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/components/LanguageContext'

export function Testimonials() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: 'Ramesh Patil',
      role: t('testimonials.ramesh.role'),
      initials: 'RP',
      rating: 5,
      quote: t('testimonials.ramesh.quote'),
    },
    {
      name: 'Lakshmi Devi',
      role: t('testimonials.lakshmi.role'),
      initials: 'LD',
      rating: 5,
      quote: t('testimonials.lakshmi.quote'),
    },
    {
      name: 'Anand Sharma',
      role: t('testimonials.anand.role'),
      initials: 'AS',
      rating: 5,
      quote: t('testimonials.anand.quote'),
    },
    {
      name: 'Meera Foods',
      role: t('testimonials.meera.role'),
      initials: 'MF',
      rating: 4,
      quote: t('testimonials.meera.quote'),
    },
  ]

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('testimonials.eyebrow')}
          title={t('testimonials.title')}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <Reveal
              key={testimonial.name}
              delay={i * 0.1}
            >
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-4 w-4 ${
                        idx < testimonial.rating
                          ? 'fill-[#d4a017] text-[#d4a017]'
                          : 'text-border'
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground text-pretty">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                    {testimonial.initials}
                  </span>

                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}