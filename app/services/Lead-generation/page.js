'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Globe, ShieldCheck, Database } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';

// ✅ Local cn function (fix missing import)
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const INITIAL_LEADS = [
  { id: '1', name: 'Alexander Wright', email: 'alex@techflow.io', company: 'TechFlow Systems', status: 'new' },
  { id: '2', name: 'Sarah Chen', email: 'sarah.c@nexus.ai', company: 'Nexus AI', status: 'qualified' },
  { id: '3', name: 'Marcus Miller', email: 'mm@quantum.com', company: 'Quantum Dynamics', status: 'contacted' },
];

export default function LeadGeneration() {
  const [leads, setLeads] = useState(INITIAL_LEADS);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // ✅ FIX: remove external API → use dummy logic
  const startAnalysis = async () => {
    setIsAnalyzing(true);

    setTimeout(() => {
      setLeads(prev =>
        prev.map(lead => ({
          ...lead,
          score: Math.floor(Math.random() * 100),
          status: 'qualified'
        }))
      );
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <ServiceLayout
      category="PROSPECTING"
      title="High-Intent"
      accentText="Prospecting."
      description="Identifying high-value leads with smart behavioral tracking."
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      capabilities={[
        { title: "Smart Scoring", icon: Target, desc: "AI-driven prioritization." },
        { title: "Data Enrichment", icon: Database, desc: "Auto profile completion." },
        { title: "Velocity Tracking", icon: Zap, desc: "Track conversion speed." },
        { title: "Global Reach", icon: Globe, desc: "Cross-border targeting." }
      ]}
    >
      <div className="space-y-10">

        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">Active Leads</h3>

          <button
            onClick={startAnalysis}
            disabled={isAnalyzing}
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2"
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Leads'}
          </button>
        </div>

        <div className="bg-white border rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-sm">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4 text-center">Score</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-t">

                  <td className="px-6 py-4">
                    <p className="font-semibold">{lead.name}</p>
                    <p className="text-xs text-gray-400">{lead.company}</p>
                  </td>

                  <td className="px-6 py-4 text-center">
                    {lead.score ? (
                      <div>
                        <p className="font-bold">{lead.score}</p>

                        <div className="w-full bg-gray-100 h-2 rounded mt-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${lead.score}%` }}
                            className="bg-blue-500 h-2 rounded"
                          />
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-400">--</span>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs",
                      lead.status === 'qualified'
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-500"
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
    </ServiceLayout>
  );
}