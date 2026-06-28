import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { BuyerCta } from '@/components/buyer-cta'
import { WhyKrishiSetu } from '@/components/why-krishisetu'
import { HowItWorks } from '@/components/how-it-works'
import { AiIntelligence } from '@/components/ai-intelligence'
import { TrustSystem } from '@/components/trust-system'
import { FpoNetwork } from '@/components/fpo-network'
import { FinancialSupport } from '@/components/financial-support'
import { LanguagesSection } from '@/components/languages'
import { Impact } from '@/components/impact'
import { Testimonials } from '@/components/testimonials'
import { FinalCta } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <BuyerCta />
        <WhyKrishiSetu />
        <HowItWorks />
        <AiIntelligence />
        <TrustSystem />
        <FpoNetwork />
        <FinancialSupport />
        <LanguagesSection />
        <Impact />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}