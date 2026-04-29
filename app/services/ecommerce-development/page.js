'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { ShoppingCart, Shield, Database, BarChart3 } from 'lucide-react'

const EcommercePage = () => (
  <ServiceLayout
    category="E-COMMERCE"
    title="Digital Commerce."
    accent="pearl-blue"
    description="Building high-conversion retail platforms that blend seamless UX with powerful enterprise backends."
    heroImage="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
    contentImage="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
    capabilities={[
      {
        title: "Headless Commerce",
        icon: ShoppingCart,
        desc: "Decoupled frontends for maximum speed and creative flexibility."
      },
      {
        title: "Payment Integrity",
        icon: Shield,
        desc: "Secure global payment processing with multi-currency support."
      },
      {
        title: "Inventory Sync",
        icon: Database,
        desc: "Real-time stock management across all physical and digital channels."
      },
      {
        title: "Analytics Engines",
        icon: BarChart3,
        desc: "Deep insights into customer behavior and sales performance."
      }
    ]}
  />
)

export default EcommercePage