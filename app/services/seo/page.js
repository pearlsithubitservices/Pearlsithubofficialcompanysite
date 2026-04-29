'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { Settings, Briefcase, Globe, Search } from 'lucide-react'

const SEOPage = () => (
  <ServiceLayout
    category="SEARCH ENGINE OPTIMIZATION"
    title="Organic Power."
    accent="pearl-blue"
    description="Long-term visibility strategies that build authority, improve rankings, and drive sustainable organic traffic."
    heroImage="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg"
    contentImage="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
    capabilities={[
      {
        title: "Technical SEO",
        icon: Settings,
        desc: "Optimize speed, structure, indexing, and crawl performance."
      },
      {
        title: "Content Strategy",
        icon: Briefcase,
        desc: "Create valuable content aligned with real search intent."
      },
      {
        title: "Authority Building",
        icon: Globe,
        desc: "Ethical backlinks and digital PR that increase trust."
      },
      {
        title: "Local SEO",
        icon: Search,
        desc: "Win local searches and map visibility for your business."
      }
    ]}
  />
)

export default SEOPage