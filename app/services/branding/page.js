'use client'
import ServiceLayout from '@/components/ServiceLayout'
import { Layout, Palette, Wand2, Zap } from 'lucide-react';

const BrandingPage = () => (
    <ServiceLayout 
       category="BRANDING & DESIGN"
       title="Visual Identity."
       accent="pearl-blue"
       description="We define the visual and strategic language of modern brands. From typography to digital-first design systems."
       heroImage="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2070&auto=format&fit=crop"
       contentImage="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
       capabilities={[
           { title: "Brand Strategy", icon: Layout, desc: "Positioning and messaging frameworks that resonate with modern audiences." },
           { title: "Design Systems", icon: Palette, desc: "Scalable UI kits and brand guidelines for cohesive product experiences." },
           { title: "Verbal Identity", icon: Wand2, desc: "Copywriting and tone-of-voice that articulates your brand's unique mission." },
           { title: "Motion Design", icon: Zap, desc: "Dynamic brand elements that bring your visual identity to life." }
       ]}
    />
);

export default BrandingPage;
