import { Brain, LineChart, BarChart3, Coins } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const cards = [
  {
    icon: Brain,
    title: 'Crop Recommendation',
    description:
      'AI suggests the most profitable crops based on soil, season and demand.',
  },
  {
    icon: LineChart,
    title: 'Demand Forecasting',
    description:
      'Predict upcoming market demand so you plant exactly what sells.',
  },
  {
    icon: BarChart3,
    title: 'Market Trend Analysis',
    description: 'Track price movements and trends across regions in real time.',
  },
  {
    icon: Coins,
    title: 'Profit Estimation',
    description: 'Estimate returns before you sow with data-backed projections.',
  },
]

export function AiIntelligence() {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--light-green) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-light-green">
              AI Intelligence
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-balance sm:text-4xl">
              AI-Powered Farming Intelligence
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-background/70 text-pretty">
              Smarter decisions, from seed to sale, powered by data.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-light-green/50">
                <div
                  aria-hidden
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/40 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
                />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_24px_rgba(46,125,50,0.6)]">
                  <card.icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 font-heading text-lg font-semibold">
                  {card.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-background/70">
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
