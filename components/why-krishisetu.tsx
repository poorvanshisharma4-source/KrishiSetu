import { TrendingUp, Handshake, FileSignature, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: TrendingUp,
    title: 'Demand-Driven Farming',
    description:
      'Farmers grow based on real market demand rather than uncertainty.',
  },
  {
    icon: Handshake,
    title: 'Direct Farmer-Buyer Connection',
    description: 'Reduce dependency on middlemen and keep more of the value.',
  },
  {
    icon: FileSignature,
    title: 'Smart Digital Agreements',
    description: 'Transparent contracts between farmers and buyers.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Reputation System',
    description: 'Reliable transactions backed by reputation badges.',
  },
]

export function WhyKrishiSetu() {
  return (
    <section id="features" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why KrishiSetu"
          title="Farming, reimagined with trust and intelligence"
          description="Everything you need to grow with confidence and sell with certainty."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.1}>
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
