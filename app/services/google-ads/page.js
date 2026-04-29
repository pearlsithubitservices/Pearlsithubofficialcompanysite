'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { MousePointer2, Layout, Zap, LineChart } from 'lucide-react'

const GoogleAdsPage = () => (
  <ServiceLayout
    category="PERFORMANCE MARKETING"
    title="Growth Engines."
    accent="pearl-blue"
    description="Data-driven search marketing that maximizes ROI through smart targeting, optimization, and measurable performance."
    heroImage="https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg"
    contentImage="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
    capabilities={[
      {
        title: "Search Strategy",
        icon: MousePointer2,
        desc: "Precise keyword targeting that captures high-intent customers."
      },
      {
        title: "Display Networks",
        icon: Layout,
        desc: "Visual campaigns across websites, apps, and digital platforms."
      },
      {
        title: "Remarketing",
        icon: Zap,
        desc: "Dynamic ads that re-engage previous website visitors."
      },
      {
        title: "Conversion Tracking",
        icon: LineChart,
        desc: "Advanced attribution models to measure real campaign impact."
      }
    ]}
  />
)

export default GoogleAdsPage