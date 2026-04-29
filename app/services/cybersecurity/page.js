'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { Search, Lock, Zap, ShieldCheck } from 'lucide-react'

const SecurityPage = () => (
  <ServiceLayout
    category="CYBERSECURITY"
    title="Resilient Defense."
    accent="pearl-blue"
    description="In a world of constant threats, we provide proactive security that protects your digital assets without slowing down your business."
    heroImage="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg"
    contentImage="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
    capabilities={[
      {
        title: "Threat Intelligence",
        icon: Search,
        desc: "Real-time monitoring and AI-driven detection of emerging cyber threats."
      },
      {
        title: "Zero Trust Architecture",
        icon: Lock,
        desc: "Unified security policies that verify every user, device, and request."
      },
      {
        title: "Incident Response",
        icon: Zap,
        desc: "Rapid remediation strategies to minimize downtime and data loss."
      },
      {
        title: "Regulatory Compliance",
        icon: ShieldCheck,
        desc: "Ensuring GDPR, HIPAA, and ISO alignment across operations."
      }
    ]}
  />
)

export default SecurityPage