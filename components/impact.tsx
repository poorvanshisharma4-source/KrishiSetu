'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trash2, TrendingUp, Store, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const stats = [
  { icon: Trash2, value: 42, suffix: '%', label: 'Reduced Crop Wastage' },
  { icon: TrendingUp, value: 35, suffix: '%', label: 'Increased Farmer Income' },
  { icon: Store, value: 3, suffix: 'x', label: 'Better Market Access' },
  { icon: ShieldCheck, value: 100, suffix: '%', label: 'Transparent Transactions' },
]

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const duration = 1400
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export function Impact() {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-light-green">
            Our Impact
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-balance sm:text-4xl">
            Real change, measured in trust and income
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-sm"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <stat.icon className="h-6 w-6" />
              </span>
              <p className="mt-4 font-heading text-4xl font-extrabold">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-primary-foreground/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
