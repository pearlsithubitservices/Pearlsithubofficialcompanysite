'use client'

import React from 'react';
import { Sparkles, Search, Zap, Image as ImageIcon } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';

export default function ContentMarketing() {
  return (
    <ServiceLayout
      category="CONTENT STRATEGY"
      title="Viral Narratives"
      accentText="Delivered."
      description="Crafting stories that resonate with both users and algorithms using AI-driven content strategies."
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      capabilities={[
        { title: "Predictive Ideation", icon: Sparkles, desc: "Identify trending topics early." },
        { title: "Semantic SEO", icon: Search, desc: "Optimize content for intent-based search." },
        { title: "Omni-Channel Adaptation", icon: Zap, desc: "Repurpose content across platforms." },
        { title: "Asset Synthesis", icon: ImageIcon, desc: "Generate visuals aligned with brand identity." }
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT */}
        <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h3 className="text-xl font-bold mb-4">Topic Authority Engine</h3>
          <p className="text-sm text-slate-500 mb-6">
            AI-generated content ideas based on trending gaps.
          </p>

          <div className="space-y-3">
            {[
              'AI Governance in Finance',
              'Sustainable Cloud Infra',
              'Agentic Workflow Design'
            ].map((topic, i) => (
              <div
                key={i}
                className="p-3 bg-slate-50 rounded-xl flex justify-between items-center hover:bg-blue-50 transition"
              >
                <span className="text-sm font-semibold">{topic}</span>
                <Sparkles size={16} className="text-blue-500" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-slate-900 p-8 rounded-3xl text-white flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-4">ROI Attribution</h3>

          <div className="flex items-center gap-4 p-6 bg-white/10 rounded-2xl">
            <div className="text-4xl font-bold text-blue-500">4.2x</div>
            <p className="text-xs text-slate-300 uppercase">
              Increase in organic reach velocity
            </p>
          </div>
        </div>

      </div>
    </ServiceLayout>
  );
}