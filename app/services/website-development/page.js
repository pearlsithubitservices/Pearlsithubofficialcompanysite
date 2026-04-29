'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { Globe, Layout, Code2, Smartphone } from 'lucide-react'

const WebsiteDevelopmentPage = () => (
  <ServiceLayout
    category="WEBSITE DEVELOPMENT"
    title="Modern Web."
    accent="pearl-blue"
    description="Performance-first websites built to convert — fast, accessible, responsive, and visually premium."
    heroImage="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg"
    contentImage="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
    capabilities={[
      {
        title: "Responsive UI",
        icon: Layout,
        desc: "Pixel-perfect interfaces that adapt to every screen size."
      },
      {
        title: "Next-Gen Frameworks",
        icon: Code2,
        desc: "Built with React, Next.js, and modern scalable architecture."
      },
      {
        title: "Global Accessibility",
        icon: Globe,
        desc: "Usable experiences for every user, device, and region."
      },
      {
        title: "PWA & Mobile Ready",
        icon: Smartphone,
        desc: "App-like web experiences with speed and offline support."
      }
    ]}
  />
)

export default WebsiteDevelopmentPage