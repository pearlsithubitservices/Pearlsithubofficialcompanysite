'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { Smartphone, Code2, Palette, Zap } from 'lucide-react'

const MobilePage = () => (
  <ServiceLayout
    category="MOBILE DEVELOPMENT"
    title="Pocket Precision."
    accent="pearl-blue"
    description="Native and cross-platform mobile apps that deliver smooth, scalable experiences on every device."
    heroImage="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
    contentImage="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg"
    capabilities={[
      {
        title: "Native iOS / Android",
        icon: Smartphone,
        desc: "High-performance apps with full access to device capabilities."
      },
      {
        title: "React Native",
        icon: Code2,
        desc: "Single codebase apps with native-quality speed and experience."
      },
      {
        title: "Mobile UI Design",
        icon: Palette,
        desc: "Touch-first interfaces designed for intuitive user journeys."
      },
      {
        title: "API Integration",
        icon: Zap,
        desc: "Real-time sync with cloud systems and third-party services."
      }
    ]}
  />
)

export default MobilePage