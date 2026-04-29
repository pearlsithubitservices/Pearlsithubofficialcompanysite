'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { Share2, Users, MessageSquare, TrendingUp } from 'lucide-react'

const SocialMediaPage = () => (
  <ServiceLayout
    category="SOCIAL MEDIA MARKETING"
    title="Viral Impact."
    accent="pearl-blue"
    description="Strategic social media growth that builds communities, drives engagement, and strengthens your brand presence."
    heroImage="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg"
    contentImage="https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg"
    capabilities={[
      {
        title: "Campaign Strategy",
        icon: Share2,
        desc: "Platform-specific content plans built for measurable growth."
      },
      {
        title: "Community Management",
        icon: Users,
        desc: "Engage audiences and build loyal brand advocates."
      },
      {
        title: "Paid Social",
        icon: TrendingUp,
        desc: "High-ROI ad campaigns across Meta, Instagram, and LinkedIn."
      },
      {
        title: "Influencer Synergy",
        icon: MessageSquare,
        desc: "Partner with trusted creators for authentic brand reach."
      }
    ]}
  />
)

export default SocialMediaPage