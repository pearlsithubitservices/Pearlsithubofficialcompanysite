'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { ShieldCheck, Server, Database, Settings } from 'lucide-react'

const MaintenancePage = () => (
  <ServiceLayout
    category="OPERATIONAL SUPPORT"
    title="Lasting Health."
    accent="pearl-blue"
    description="Ongoing support and preventive maintenance to keep your applications secure, stable, and high performing."
    heroImage="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
    contentImage="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
    capabilities={[
      {
        title: "Security Patches",
        icon: ShieldCheck,
        desc: "Immediate updates to fix newly discovered vulnerabilities."
      },
      {
        title: "Uptime Monitoring",
        icon: Server,
        desc: "Continuous monitoring to detect and resolve downtime quickly."
      },
      {
        title: "Database Care",
        icon: Database,
        desc: "Optimization, backups, and tuning for peak performance."
      },
      {
        title: "Legacy Support",
        icon: Settings,
        desc: "Maintain older systems while planning future upgrades."
      }
    ]}
  />
)

export default MaintenancePage