'use client'
import ServiceLayout from '@/components/ServiceLayout'
import { Layers, Server, Globe, Shield } from 'lucide-react'

const CloudPage = () => (
  <ServiceLayout
    category="CLOUD COMPUTING"
    title="Scalable Foundations."
    accent="pearl-blue"
    description="Migrate, modernize, and manage. We build cloud-native architectures that are resilient, cost-effective, and global by default."
    heroImage="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg"
    contentImage="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
    capabilities={[
      { title: "Hybrid Multi-Cloud", icon: Layers, desc: "Seamless orchestration across AWS, Azure, GCP, and On-prem infrastructure." },
      { title: "DevOps & SRE", icon: Server, desc: "Automate delivery pipelines and ensure 99.99% availability." },
      { title: "Serverless Design", icon: Globe, desc: "Event-driven architectures that scale instantly." },
      { title: "Cloud Security", icon: Shield, desc: "Zero-trust networking and continuous compliance monitoring." }
    ]}
  />
)

export default CloudPage