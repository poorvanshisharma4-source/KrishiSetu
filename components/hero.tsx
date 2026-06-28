'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sprout, ShoppingCart, Leaf, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background"
    >
      {/* subtle agriculture + AI pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--light-green) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/40 px-4 py-1.5 text-sm font-medium text-primary">
            <Leaf className="h-4 w-4" />
            AI-Powered Demand-Driven Farming
          </span>
          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Why grow, without knowing{' '}
            <span className="text-primary">who will buy?</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            An AI-powered demand-driven farming platform connecting farmers
            directly with buyers through transparent agreements, trust-based
            transactions, and demand-driven cultivation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              
              size="lg"
              className="h-12 bg-primary px-6 text-base text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/farmer/login">
                <Sprout className="h-5 w-5" />
                Farmer Login / Register
              </Link>
            </Button>
            <Button
              
              size="lg"
              variant="outline"
              className="h-12 border-accent px-6 text-base text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Link href="/buyer/login">
                <ShoppingCart className="h-5 w-5" />
                Buyer Login / Register
              </Link>
            </Button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              { label: 'Farmers', value: '12K+' },
              { label: 'Buyers', value: '3.5K+' },
              { label: 'Agreements', value: '48K+' },
            ].map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-2xl font-bold text-foreground">
                  {s.value}
                </dd>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
            <Image
              src="/hero-illustration.png"
              alt="Farmers, crops, AI analytics dashboard and marketplace connectivity"
              width={720}
              height={560}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <motion.div
            className="absolute -left-4 top-10 hidden rounded-2xl border border-border bg-card p-4 shadow-lg sm:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <TrendingUp className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Demand Forecast</p>
                <p className="font-heading text-sm font-semibold text-foreground">
                  +24% Tomatoes
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-4 bottom-10 hidden rounded-2xl border border-border bg-card p-4 shadow-lg sm:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <Leaf className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Verified Buyer</p>
                <p className="font-heading text-sm font-semibold text-foreground">
                  Contract Ready
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}