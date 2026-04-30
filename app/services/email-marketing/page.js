import React from 'react';
import { Mail, Zap, Layers, Server, Globe, ArrowRight } from 'lucide-react';
import ServiceLayout from './ServiceLayout';

const SEQUENCES = [
  { name: 'Enterprise Warm-up', replies: '14.2%', bounce: '0.4%' },
  { name: 'Seed Round Follow-up', replies: '22.8%', bounce: '0.2%' },
  { name: 'Webinar Retargeting', replies: '8.5%', bounce: '0.8%' },
];

export default function EmailMarketing() {
  return (
    <ServiceLayout
      category="CAMPAIGN FACTORY"
      title="Reply-Driven"
      accentText="Sequences."
      description="Automation with a human pulse. We engineer email architectures that focus on conversation over mass-broadcasting, powered by neural copywriting."
      heroImage="https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop"
      capabilities={[
        { title: "Neural Copywriting", icon: Zap, desc: "Deep-learning models trained on direct response success." },
        { title: "Smart Sequencing", icon: Layers, desc: "Adapting message flows based on real-time recipient friction." },
        { title: "Infrastructure Monitoring", icon: Server, desc: "Real-time deliverability and spam-filter bypass tracking." },
        { title: "Global Semantics", icon: Globe, desc: "Cultural and language-specific nuance adaptation." }
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 bg-white border border-slate-100 rounded-[48px] p-12 shadow-sm">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-3xl font-black mb-2">Campaign Performance</h3>
              <p className="text-slate-500 text-sm font-medium">Real-time reply rates across active neural sequences.</p>
            </div>
            <button className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 hover:translate-x-2 transition-transform">
              View All Sequences <ArrowRight size={14} />
            </button>
          </div>

          <div className="space-y-8">
            {SEQUENCES.map((seq, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-black text-slate-900">{seq.name}</span>
                  <div className="flex gap-8">
                    <div className="text-right">
                      <p className="text-xl font-black text-blue-600">{seq.replies}</p>
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Replies</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black text-slate-400">{seq.bounce}</p>
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Bounce</p>
                    </div>
                  </div>
                </div>
                <div className="h-1.5 bg-slate-50 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full group-hover:scale-x-105 transition-transform origin-left w-[65%]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 bg-slate-900 rounded-[48px] p-12 text-white flex flex-col justify-between">
          <div>
            <Mail className="text-blue-500 mb-8" size={40} />
            <h3 className="text-3xl font-black mb-6">Neural Copilot</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              "Subject line 'Quick question regarding Nexus AI growth' is projected to increase open rates by 14.8% based on current sector trends."
            </p>
          </div>
          <button className="w-full bg-white text-slate-900 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-50 transition-all">
            Optimize Subject Lines
          </button>
        </div>
      </div>
    </ServiceLayout>
  );
}
