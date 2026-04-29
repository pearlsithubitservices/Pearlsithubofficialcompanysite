'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { Network, Lock, Server, Search } from 'lucide-react'

const NetworkPage = () => (
  <ServiceLayout
    category="NETWORK SOLUTIONS"
    title="Global Connect."
    accent="pearl-blue"
    description="Modern networking for hybrid businesses — secure, software-defined, and built to scale globally."
    heroImage="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
    contentImage="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg"
    capabilities={[
      {
        title: "SD-WAN",
        icon: Network,
        desc: "Smart traffic routing that prioritizes mission-critical applications."
      },
      {
        title: "VPN / SASE",
        icon: Lock,
        desc: "Secure remote access for distributed teams and global staff."
      },
      {
        title: "Infrastructure Design",
        icon: Server,
        desc: "Custom network architecture for offices, branches, and data centers."
      },
      {
        title: "Network Audit",
        icon: Search,
        desc: "Identify bottlenecks, risks, and performance gaps in your network."
      }
    ]}
  />
)

export default NetworkPage