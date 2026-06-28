import Link from 'next/link'
import { Sprout, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

export function FinalCta() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
                backgroundSize: '28px 28px',
              }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-heading text-3xl font-extrabold text-balance sm:text-4xl">
                Join the Future of Agriculture
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85 text-pretty">
                Whether you&apos;re a farmer or a buyer, KrishiSetu helps you
                build reliable and profitable partnerships.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                
                  size="lg"
                  className="h-12 bg-background px-6 text-base text-foreground hover:bg-background/90"
                >
                  <Link href="/farmer/register">
                    <Sprout className="h-5 w-5" />
                    Join as Farmer
                  </Link>
                </Button>
                <Button
                
                  size="lg"
                  variant="outline"
                  className="h-12 border-primary-foreground/40 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link href="/buyer/register">
                    <ShoppingCart className="h-5 w-5" />
                    Join as Buyer
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
