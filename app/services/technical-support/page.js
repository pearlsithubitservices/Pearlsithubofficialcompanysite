'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { LifeBuoy, Zap, ShieldCheck, Headphones } from 'lucide-react'

const TechnicalSupportPage = () => (
  <ServiceLayout
    category="TECHNICAL SUPPORT"
    title="Always On."
    accent="pearl-blue"
    description="Enterprise-grade support systems that keep your business running smoothly with reliable 24/7 technical assistance."
    heroImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    contentImage="https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg"
    capabilities={[
      {
        title: "24/7 Help Desk",
        icon: Headphones,
        desc: "Round-the-clock support for software, systems, and user issues."
      },
      {
        title: "Rapid Remediation",
        icon: Zap,
        desc: "Fast response to critical failures, outages, and urgent incidents."
      },
      {
        title: "Security Monitoring",
        icon: ShieldCheck,
        desc: "Continuous oversight to detect and prevent threats early."
      },
      {
        title: "Infrastructure Support",
        icon: LifeBuoy,
        desc: "Maintenance for servers, devices, networks, and core systems."
      }
    ]}
  />
)

export default TechnicalSupportPage