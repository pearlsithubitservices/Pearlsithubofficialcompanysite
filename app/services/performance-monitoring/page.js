'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import { TrendingUp, Globe, DollarSign, Target, Layers } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';

// ✅ Dynamically import recharts (prevents SSR errors)
const AreaChart = dynamic(() => import('recharts').then(m => m.AreaChart), { ssr: false });
const Area = dynamic(() => import('recharts').then(m => m.Area), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(m => m.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false });
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false });

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
      description="Transforming data into market-moving insights. We connect disparate digital signals into unified growth narratives."
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      capabilities={[
        { title: "Unified Tracking", icon: Globe, desc: "Aggregated intelligence across global ad networks." },
        { title: "Attribution Engine", icon: DollarSign, desc: "Multi-touch modeling to verify true source of revenue." },
        { title: "Intensity Mapping", icon: Target, desc: "Identifying high-priority segments for scaling." },
        { title: "Predictive Flows", icon: TrendingUp, desc: "Forecasting outcomes based on data." }
      ]}
    >
      <div className="bg-white border border-slate-100 rounded-[32px] p-10 shadow-xl">
        
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <Layers size={24} className="text-blue-600" />
            Market Velocity Index
          </h3>

          <div className="flex gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-slate-900 rounded-full" />
              Conversions
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full" />
              ROAS
            </div>
          </div>
        </div>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={PERFORMANCE_DATA}>
              
              <defs>
                <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563EB" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="day" />
              <YAxis />

              <Tooltip />

              <Area 
                type="monotone" 
                dataKey="conversions" 
                stroke="#0F172A" 
                strokeWidth={2} 
                fillOpacity={0} 
              />

              <Area 
                type="monotone" 
                dataKey="roi" 
                stroke="#2563EB" 
                strokeWidth={2} 
                fill="url(#colorPerf)" 
              />

            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>
    </ServiceLayout>
  );
}