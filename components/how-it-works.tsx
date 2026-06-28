import {
  ClipboardList,
  FileCheck2,
  FileSignature,
  Sprout,
  Truck,
  ArrowRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const steps = [
  { icon: ClipboardList, title: 'Buyer Posts Requirement' },
  { icon: FileCheck2, title: 'Farmer Accepts Contract' },
  { icon: FileSignature, title: 'Agreement Generated' },
  { icon: Sprout, title: 'Cultivation & Monitoring' },
  { icon: Truck, title: 'Delivery & Payment' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="From requirement to delivery in five steps"
          description="A clear, transparent journey for both farmers and buyers."
        />
        <div className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex flex-1 flex-col items-stretch gap-4 lg:flex-row lg:items-center"
            >
              <Reveal delay={i * 0.1} className="flex-1">
                <div className="relative h-full rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                  <span className="absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/40 text-primary">
                    <step.icon className="h-7 w-7" />
                  </span>
                  <p className="mt-4 font-heading text-sm font-semibold text-foreground">
                    {step.title}
                  </p>
                </div>
              </Reveal>
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center text-accent">
                  <ArrowRight className="h-6 w-6 rotate-90 lg:rotate-0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
