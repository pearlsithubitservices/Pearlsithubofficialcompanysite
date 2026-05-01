'use client'

import React from 'react';
import { Mail, Zap, Layers, Server, Globe, ArrowRight } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';

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
      description="Automation with a human pulse. We engineer email architectures that focus on conversation over mass broadcasting."
      heroImage="https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop"
      capabilities={[
        { title: "Neural Copywriting", icon: Zap, desc: "High-performing copy based on proven strategies." },
        { title: "Smart Sequencing", icon: Layers, desc: "Adaptive email flows based on user behavior." },
        { title: "Infrastructure Monitoring", icon: Server, desc: "Ensuring deliverability and avoiding spam filters." },
        { title: "Global Semantics", icon: Globe, desc: "Localized messaging for different audiences." }
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-8 bg-white border rounded-3xl p-8 shadow-sm">

          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold">Campaign Performance</h3>
              <p className="text-sm text-slate-500">Reply rates across active campaigns</p>
            </div>

            <button className="text-blue-600 text-xs font-bold flex items-center gap-2 hover:translate-x-1 transition">
              View All <ArrowRight size={14} />
            </button>
          </div>

          <div className="space-y-6">
            {SEQUENCES.map((seq, i) => (
              <div key={i}>
                
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{seq.name}</span>

                  <div className="flex gap-6 text-sm">
                    <span className="text-blue-600 font-bold">{seq.replies}</span>
                    <span className="text-slate-400">{seq.bounce}</span>
                  </div>
                </div>

                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 w-[60%]" />
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-4 bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-between">

          <div>
            <Mail className="text-blue-500 mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-4">AI Email Copilot</h3>

            <p className="text-sm text-slate-400">
              "Subject line suggestion can improve open rates by up to 15% based on engagement patterns."
            </p>
          </div>

          <button className="mt-6 bg-white text-black py-3 rounded-full text-xs font-bold hover:bg-blue-50 transition">
            Optimize Emails
          </button>

        </div>

      </div>
    </ServiceLayout>
  );
}