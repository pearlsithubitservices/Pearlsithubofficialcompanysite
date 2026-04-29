'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { Rocket, Lightbulb, Target, TrendingUp } from 'lucide-react'

const StartupSolutionPage = () => (
  <ServiceLayout
    category="STARTUP SOLUTIONS"
    title="Scale Faster."
    accent="pearl-blue"
    description="From MVP to growth stage, we provide the technology foundation and strategic support startups need to scale confidently."
    heroImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    contentImage="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
    capabilities={[
      {
        title: "MVP Development",
        icon: Rocket,
        desc: "Rapid prototyping and launch of core features to enter the market quickly."
      },
      {
        title: "Product Strategy",
        icon: Lightbulb,
        desc: "Validate product-market fit and improve using real customer feedback."
      },
      {
        title: "Growth Architecture",
        icon: TrendingUp,
        desc: "Scalable backend systems designed to grow with your user base."
      },
      {
        title: "Investor Readiness",
        icon: Target,
        desc: "Prepare your tech stack and documentation for funding due diligence."
      }
    ]}
  />
)

export default StartupSolutionPage