import { Users, ShoppingCart, Scale, HeartHandshake } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const cards = [
  {
    icon: Users,
    title: 'Farmer Producer Organizations',
    description: 'Join verified FPOs and grow together as a collective.',
  },
  {
    icon: ShoppingCart,
    title: 'Collective Selling',
    description: 'Pool produce to access larger buyers and better prices.',
  },
  {
    icon: Scale,
    title: 'Better Negotiation Power',
    description: 'Negotiate stronger terms with combined volume and trust.',
  },
  {
    icon: HeartHandshake,
    title: 'Community Support',
    description: 'Share knowledge, resources and support across the network.',
  },
]

export function FpoNetwork() {
  return (
    <section id="fpo" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FPO & Community"
          title="Connect Through Farmer Communities"
          description="Stronger together — collaborate, negotiate and grow as one."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <div className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:flex-col">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/40 text-primary">
                  <card.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
