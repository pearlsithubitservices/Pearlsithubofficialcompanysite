'use client'
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, Globe, DollarSign, Target, Layers } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout'

const PERFORMANCE_DATA = [
  { day: 'Mon', spend: 400, roi: 1.2, conversions: 12 },
  { day: 'Tue', spend: 600, roi: 1.8, conversions: 18 },
  { day: 'Wed', spend: 500, roi: 2.1, conversions: 24 },
  { day: 'Thu', spend: 800, roi: 1.5, conversions: 14 },
  { day: 'Fri', spend: 750, roi: 2.4, conversions: 26 },
  { day: 'Sat', spend: 450, roi: 3.1, conversions: 32 },
  { day: 'Sun', spend: 350, roi: 2.8, conversions: 28 },
];

export default function PerformanceMarketing() {
  return (
    <ServiceLayout
      category="PERFORMANCE ANALYTICS"
      title="ROI-Centric"
      accentText="Optimization."
      description="Transforming data into market-moving insights. We connect disparate digital signals into unified growth narratives, ensuring visibility into every dollar spent."
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      capabilities={[
        { title: "Unified Tracking", icon: Globe, desc: "Aggregated intelligence across global ad networks." },
        { title: "Attribution Engine", icon: DollarSign, desc: "Multi-touch modeling to verify true source of revenue." },
        { title: "Intensity Mapping", icon: Target, desc: "Identifying high-priority segments for rapid scaling." },
        { title: "Predictive Flows", icon: TrendingUp, desc: "Forecasting outcomes based on historic volatility." }
      ]}
    >
        <div className="bg-white border border-slate-100 rounded-[64px] p-16 shadow-2xl">
          <div className="flex items-center justify-between mb-16">
            <h3 className="text-4xl font-black flex items-center gap-4 group cursor-pointer">
              <div className="p-4 bg-blue-50 rounded-2xl group-hover:rotate-12 transition-transform">
                <Layers size={32} className="text-blue-600" /> 
              </div>
              Market Velocity Index
            </h3>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
              <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-slate-900" /> Conversions</div>
              <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-blue-600" /> Net ROAS</div>
            </div>
          </div>
          <div className="h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PERFORMANCE_DATA}>
                <defs>
                  <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94A3B8', fontWeight: 'bold' }} dy={20} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94A3B8', fontWeight: 'bold' }} />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '24px', 
                    border: 'none', 
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', 
                    fontSize: '12px',
                    fontWeight: 'bold',
                    padding: '20px'
                  }} 
                />
                <Area type="monotone" dataKey="conversions" stroke="#0F172A" strokeWidth={4} fillOpacity={0} />
                <Area type="monotone" dataKey="roi" stroke="#2563EB" strokeWidth={4} fillOpacity={1} fill="url(#colorPerf)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
    </ServiceLayout>
  );
}
