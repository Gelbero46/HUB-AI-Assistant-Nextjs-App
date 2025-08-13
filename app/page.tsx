import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import AIAssistant from '@/components/sections/AIAssistant'
import HowItWorks from '@/components/sections/HowItWorks'
import Integrations from '@/components/sections/Integrations'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Pricing from '@/components/sections/Pricing'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <AIAssistant />
      <HowItWorks />
      <Integrations />
      <Testimonials />
      <FAQ />
      <Pricing />
      <CTA />
    </div>
  )
}
