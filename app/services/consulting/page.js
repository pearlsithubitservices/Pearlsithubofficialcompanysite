'use client'
import ServiceLayout from '@/components/ServiceLayout'
import { Search, LineChart, Settings, Briefcase } from 'lucide-react';

const ConsultingPage = () => (
    <ServiceLayout 
       category="STRATEGIC CONSULTING"
       title="Expert Guidance."
       accent="pearl-blue"
       description="Navigating the complex landscape of digital transformation with domain-specific expertise."
       heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
       contentImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
       capabilities={[
           { title: "Tech Audits", icon: Search, desc: "Comprehensive deep-dives into your current infrastructure and processes." },
           { title: "Roadmap Design", icon: LineChart, desc: "Multi-year digital strategies aligned with your business objectives." },
           { title: "Process Optimization", icon: Settings, desc: "Modernizing operational workflows to increase efficiency and speed." },
           { title: "Change Management", icon: Briefcase, desc: "Helping your team transition smoothly to new technological paradigms." }
       ]}
    />
);

export default ConsultingPage;
