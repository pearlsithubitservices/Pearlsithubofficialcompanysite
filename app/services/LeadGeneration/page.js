import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Zap, Globe, ShieldCheck, Database } from 'lucide-react';
import { analyzeLeads } from '../lib/gemini';
import { cn } from '../lib/utils';
import ServiceLayout from './ServiceLayout';

const INITIAL_LEADS = [
  { id: '1', name: 'Alexander Wright', email: 'alex@techflow.io', company: 'TechFlow Systems', status: 'new' },
  { id: '2', name: 'Sarah Chen', email: 'sarah.c@nexus.ai', company: 'Nexus AI', status: 'qualified' },
  { id: '3', name: 'Marcus Miller', email: 'mm@quantum.com', company: 'Quantum Dynamics', status: 'contacted' },
];

export default function LeadGeneration() {
  const [leads, setLeads] = useState(INITIAL_LEADS);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const startAnalysis = async () => {
    setIsAnalyzing(true);
    const results = await analyzeLeads(leads);
    
    setLeads(prev => prev.map(lead => {
      const analysis = results.analyses?.find(a => a.email === lead.email);
      return analysis ? { ...lead, score: analysis.score, status: 'qualified' } : lead;
    }));
    
    setIsAnalyzing(false);
  };

  return (
    <ServiceLayout
      category="PROSPECTING"
      title="High-Intent"
      accentText="Prospecting."
      description="Identifying the signals that matter. We transition from stagnant lead lists to dynamic behavioral prospecting, where identity meets intent in real-time."
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      capabilities={[
        { title: "Smart Scoring", icon: Target, desc: "AI-driven prioritization based on engagement metrics." },
        { title: "Data Enrichment", icon: Database, desc: "Automatic profile completion from public signals." },
        { title: "Velocity Tracking", icon: Zap, desc: "Monitor how fast leads move to closed-won." },
        { title: "Global Reach", icon: Globe, desc: "Localized intent signals for cross-border growth." }
      ]}
    >
      <div className="space-y-12">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-black">Active Prospect Pipeline</h3>
          <button
            onClick={startAnalysis}
            disabled={isAnalyzing}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-3 hover:bg-blue-500 transition-all disabled:opacity-50 shadow-xl"
          >
            {isAnalyzing ? (
              <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
            ) : (
              <ShieldCheck size={18} />
            )}
            {isAnalyzing ? 'Calibrating...' : 'Analyze Market Signals'}
          </button>
        </div>

        <div className="bg-white border border-slate-100 rounded-[48px] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-10 py-6 text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black">Identity</th>
                  <th className="px-10 py-6 text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black text-center">Intent Score</th>
                  <th className="px-10 py-6 text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-blue-50/30 transition-colors">
                    <td className="px-10 py-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center overflow-hidden grayscale contrast-125">
                          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${lead.name}`} alt={lead.name} />
                        </div>
                        <div>
                          <p className="font-black text-slate-900">{lead.name}</p>
                          <p className="text-[10px] text-slate-400 font-black tracking-widest uppercase mt-1">{lead.company}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-8">
                      {lead.score ? (
                        <div className="flex flex-col items-center gap-2">
                          <span className={cn(
                            "text-lg font-black",
                            lead.score > 70 ? "text-blue-600" : lead.score > 40 ? "text-blue-400" : "text-slate-400"
                          )}>{lead.score}</span>
                          <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: `${lead.score}%` }} className={cn("h-full", lead.score > 70 ? "bg-blue-600" : "bg-blue-400")} />
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-center"><div className="w-3 h-3 rounded-full bg-blue-100 animate-pulse" /></div>
                      )}
                    </td>
                    <td className="px-10 py-8">
                      <span className={cn(
                        "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border",
                        lead.status === 'qualified' ? "bg-blue-50 border-blue-200 text-blue-600" :
                        "bg-slate-50 border-slate-200 text-slate-400"
                      )}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
