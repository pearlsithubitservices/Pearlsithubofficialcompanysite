'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { Building2, Database, Zap, Lock } from 'lucide-react'

const EnterprisePage = () => (
  <ServiceLayout
    category="ENTERPRISE SOLUTIONS"
    title="Business Scale."
    accent="pearl-blue"
    description="Custom ERP and internal systems that consolidate complex business operations into a single intelligent platform."
    heroImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    contentImage="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg"
    capabilities={[
      {
        title: "ERP Modernization",
        icon: Building2,
        desc: "Upgrading legacy planning systems to modern cloud-native platforms."
      },
      {
        title: "Data Warehousing",
        icon: Database,
        desc: "Unified data lakes for cross-department reporting and analytics."
      },
      {
        title: "Workflow Automation",
        icon: Zap,
        desc: "Custom internal tools that remove repetitive manual tasks."
      },
      {
        title: "Access Control",
        icon: Lock,
        desc: "Granular RBAC systems to protect sensitive corporate assets."
      }
    ]}
  />
)

export default EnterprisePage