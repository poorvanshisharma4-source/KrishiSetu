import { Languages as LanguagesIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const langs = [
  'English',
  'हिन्दी',
  'मराठी',
  'বাংলা',
  'ગુજરાતી',
  'தமிழ்',
  'తెలుగు',
  'ਪੰਜਾਬੀ',
]

export function LanguagesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Multi-Language Support"
          title="Farming Speaks Many Languages"
          description="Use KrishiSetu comfortably in the language you know best."
        />
        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <LanguagesIcon className="h-6 w-6" />
            </span>
            {langs.map((lang) => (
              <span
                key={lang}
                className="cursor-default rounded-full border border-border bg-card px-5 py-2.5 font-heading text-base font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-secondary/40 hover:text-primary"
              >
                {lang}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
