import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    name: 'Ramesh Patil',
    role: 'Farmer, Maharashtra',
    initials: 'RP',
    rating: 5,
    quote:
      'I now grow only what buyers actually need. My income is steadier and I waste far less of my harvest.',
  },
  {
    name: 'Lakshmi Devi',
    role: 'Farmer, Telangana',
    initials: 'LD',
    rating: 5,
    quote:
      'The digital agreements gave me confidence. Payments arrive on time and there are no middlemen taking a cut.',
  },
  {
    name: 'Anand Sharma',
    role: 'Buyer, Delhi',
    initials: 'AS',
    rating: 5,
    quote:
      'Posting a requirement and getting matched with verified farmers has made our sourcing reliable and transparent.',
  },
  {
    name: 'Meera Foods',
    role: 'Bulk Buyer, Gujarat',
    initials: 'MF',
    rating: 4,
    quote:
      'The reputation badges help us pick trustworthy partners quickly. Quality and delivery have been consistent.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by farmers and buyers alike"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-4 w-4 ${
                        idx < t.rating
                          ? 'fill-[#d4a017] text-[#d4a017]'
                          : 'text-border'
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
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
