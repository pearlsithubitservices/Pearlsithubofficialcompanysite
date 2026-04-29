import React from 'react';
import { Sparkles, Search, Zap, Image as ImageIcon } from 'lucide-react';
import ServiceLayout from './ServiceLayout';

export default function ContentMarketing() {
  return (
    <ServiceLayout
      category="CONTENT STRATEGY"
      title="Viral Narratives"
      accentText="Delivered."
      description="Crafting stories that resonate with algorithms and humans alike. We move beyond simple content production into AI-powered semantic engineering."
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      capabilities={[
        { title: "Predictive Ideation", icon: Sparkles, desc: "Early detection of market shifts and trending narratives." },
        { title: "Semantic SEO", icon: Search, desc: "Optimizing for intent-based search landscapes using LLMs." },
        { title: "Omni-Channel Adaptation", icon: Zap, desc: "Seamless transformation of core ideas across all digital touchpoints." },
        { title: "Asset Synthesis", icon: ImageIcon, desc: "Generative visual systems aligned with brand identity." }
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-100 p-12 rounded-[48px] shadow-sm">
          <h3 className="text-2xl font-black mb-6">Topic Authority Engine</h3>
          <p className="text-slate-500 mb-8 font-medium">AI-generated content clusters based on current market authority gaps.</p>
          <div className="space-y-4">
            {['AI Governance in Finance', 'Sustainable Cloud Infra', 'Agentic Workflow Design'].map(topic => (
              <div key={topic} className="p-4 bg-slate-50 rounded-2xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                <span className="font-bold text-sm text-slate-800">{topic}</span>
                <Sparkles size={16} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-900 p-12 rounded-[48px] text-white flex flex-col justify-between">
          <h3 className="text-2xl font-black mb-6">ROI Attribution</h3>
          <div className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-sm">
             <div className="text-5xl font-black text-blue-500">4.2x</div>
             <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em] leading-relaxed">Increase in <br /> organic reach <br /> velocity</p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
