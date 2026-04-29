'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { Code2, Layers, Cpu, ShieldCheck } from 'lucide-react'

export default function CustomSoftwarePage() {
  return (
    <ServiceLayout
      category="CUSTOM SOFTWARE"
      title="Built for You."
      description="Tailor-made software solutions engineered around your exact business workflows, scale, and goals."
      heroImage="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
      contentImage="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
      capabilities={[
        {
          title: "Web Applications",
          icon: Code2,
          desc: "Modern platforms built for speed, scale and usability."
        },
        {
          title: "System Integration",
          icon: Layers,
          desc: "Connect tools, APIs and business systems seamlessly."
        },
        {
          title: "Automation",
          icon: Cpu,
          desc: "Reduce manual work with smart digital workflows."
        },
        {
          title: "Secure Architecture",
          icon: ShieldCheck,
          desc: "Reliable systems designed with security first."
        }
      ]}
    />
  )
}