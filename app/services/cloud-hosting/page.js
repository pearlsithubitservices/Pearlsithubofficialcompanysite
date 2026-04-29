'use client'
import ServiceLayout from '@/components/ServiceLayout'
import { Globe, HardDrive, Search, ShieldCheck } from 'lucide-react';

const CloudHostingPage = () => (
    <ServiceLayout 
       category="MANAGED CLOUD"
       title="High Availability."
       accent="pearl-blue"
       description="Premium managed hosting for mission-critical applications. Global scale with local performance."
       heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2037&auto=format&fit=crop"
       contentImage="https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1974&auto=format&fit=crop"
       capabilities={[
           { title: "Edge Performance", icon: Globe, desc: "Low-latency content delivery via our global edge network." },
           { title: "Managed K8s", icon: HardDrive, desc: "Auto-scaling Kubernetes clusters optimized for complex workloads." },
           { title: "24/7 Monitoring", icon: Search, desc: "Proactive log analysis and threat detection across all instances." },
           { title: "Backup Resilience", icon: ShieldCheck, desc: "Automated daily backups with rapid point-in-time recovery." }
       ]}
    />
);

export default CloudHostingPage;
