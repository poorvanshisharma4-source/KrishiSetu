import Link from 'next/link'
import { Sprout, Share2, AtSign, MessageCircle, Send } from 'lucide-react'

const links = [
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
]

const portals = [
  { label: 'Farmer Login', href: '/farmer/login' },
  { label: 'Farmer Register', href: '/farmer/register' },
  { label: 'Buyer Login', href: '/buyer/login' },
  { label: 'Buyer Register', href: '/buyer/register' },
]

const socials = [
  { icon: Share2, label: 'Facebook' },
  { icon: AtSign, label: 'Twitter' },
  { icon: MessageCircle, label: 'WhatsApp' },
  { icon: Send, label: 'Telegram' },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Sprout className="h-5 w-5" />
              </span>
              <span className="font-heading text-xl font-bold text-foreground">
                Krishi<span className="text-primary">Setu</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              An AI-powered demand-driven farming platform connecting farmers
              directly with buyers through transparent, trust-based agreements.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Portals">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Portals
            </h3>
            <ul className="mt-4 space-y-2">
              {portals.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} KrishiSetu. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
