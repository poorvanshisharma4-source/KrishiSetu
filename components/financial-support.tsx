import { Landmark, ShieldCheck, FileBadge, GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const cards = [
  {
    icon: Landmark,
    title: 'Banks & Credit Access',
    description: 'Connect with lending partners for timely agricultural credit.',
  },
  {
    icon: ShieldCheck,
    title: 'Crop Insurance',
    description: 'Protect your harvest against weather and market risks.',
  },
  {
    icon: FileBadge,
    title: 'Government Schemes',
    description: 'Discover and apply for relevant subsidies and schemes.',
  },
  {
    icon: GraduationCap,
    title: 'Financial Literacy',
    description: 'Learn smart money management built for farming cycles.',
  },
]

export function FinancialSupport() {
  return (
    <section id="financial" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Financial Support"
          title="Funding and protection that grows with you"
          description="Access the financial tools that keep farming sustainable and secure."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <card.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
