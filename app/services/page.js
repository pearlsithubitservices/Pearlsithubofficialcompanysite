'use client';
import { motion } from 'framer-motion'
import { 
  ChevronRight, 
  ArrowRight, 
  Cpu, 
  Database, 
  Cloud, 
  Zap, 
  Play
} from 'lucide-react';
import Link from 'next/link';

const subNavbarLinks = [
  { name: 'AI AND DATA', active: true },
  { name: 'CLOUDE', active: false },
  { name: 'CYBER SECURITY', active: false },
  { name: 'CONSULTING', active: false },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* --- SUB NAVBAR --- */}
      <div className="bg-slate-900 text-white py-4 mt-[72px] relative z-50">
        <div className="container flex items-center gap-8">
          <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest">
            <Link href="/" className="hover:text-tcs-light transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-tcs-light">Services</span>
          </div>
          <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
          <nav className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
            {subNavbarLinks.map(link => (
              <a 
                key={link.name} 
                href="#" 
                className={`hover:text-white transition-colors relative py-1 ${link.active ? 'text-white border-b-2 border-tcs-blue' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
             <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-50 contrast-125"
                alt="Technology background"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 text-tcs-light font-black uppercase tracking-[0.4em] text-xs"
              >
                SERVICES / AI AND DATA & ANALYTICS
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-[100px] font-black font-display leading-[0.9] tracking-tighter text-white"
              >
                Re-imagining how <br />
                <span className="text-tcs-blue italic">AI & Data</span> deliver.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl"
              >
                PEARLS IT HUB enables organizations to move beyond digital transformation into 
                AI-powered reinvention— where data is not just stored but exploited.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-8 pt-4"
              >
                 <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-2xl group">
                    <Play className="w-6 h-6 text-tcs-blue fill-tcs-blue group-hover:scale-110 transition-transform" />
                 </button>
                 <span className="text-white font-black uppercase tracking-widest text-xs">Watch the Vision</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- MAIN CONTENT SECTION --- */}
        <section className="py-32 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
              <div className="space-y-12">
                <div className="h-2 w-24 bg-tcs-blue" />
                <h2 className="text-5xl md:text-7xl font-black font-display tracking-tighter leading-tight text-slate-900">
                  Bringing AI to <br /> life with Data, <br /> Models & Agents.
                </h2>
              </div>
              <div className="space-y-10">
                <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                  Our strategy is to move away from the foundational enterprise software 
                  paradigm of databases, algorithms and applications serving industry value chains 
                  powered by human employees.
                </p>
                <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                  We switch to a paradigm of Data, Models and Agents used to serve reimagined 
                  value chains where humans are in the loop.
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-8">
                   {[
                     { label: 'Data Estate Expansion', icon: Database },
                     { label: 'Hyperscaler AI Services', icon: Cloud },
                     { label: 'Vertical AI Models', icon: Cpu },
                     { label: 'Agentic Workflows', icon: Zap }
                   ].map((item, i) => (
                     <div key={i} className="flex flex-col gap-4 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                        <item.icon className="w-8 h-8 text-tcs-blue group-hover:scale-110 transition-transform" />
                        <span className="font-black uppercase tracking-widest text-[10px] text-slate-400">{item.label}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- IMAGE GRID SECTION --- */}
        <section className="py-32 bg-slate-50">
          <div className="container">
             <div className="grid md:grid-cols-2 gap-12">
               <motion.div 
                 whileHover={{ y: -10 }}
                 className="group cursor-pointer space-y-8"
               >
                 <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl relative">
                    <img 
                      src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      alt="Explore AI"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                 </div>
                 <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-tcs-blue">STRATEGY</span>
                    <h3 className="text-4xl font-black font-display tracking-tight group-hover:text-tcs-blue transition-colors leading-tight">Explore AI</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">Secure your data foundations while looking into an AI-driven future.</p>
                 </div>
               </motion.div>

               <motion.div 
                 whileHover={{ y: -10 }}
                 className="group cursor-pointer space-y-8"
               >
                 <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl relative">
                    <img 
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      alt="Explore Data"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                 </div>
                 <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-tcs-blue">ENGINEERING</span>
                    <h3 className="text-4xl font-black font-display tracking-tight group-hover:text-tcs-blue transition-colors leading-tight">Explore Data and Analytics</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">Leverage actionable insights through physical and digital data streamlining.</p>
                 </div>
               </motion.div>
             </div>
          </div>
        </section>

        {/* --- PARTNER SECTION --- */}
        <section className="py-32 bg-white border-y border-slate-100">
           <div className="container">
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                 <div className="space-y-10">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg" 
                      className="h-16 w-auto" 
                      alt="Nvidia Logo"
                      referrerPolicy="no-referrer"
                    />
                    <h2 className="text-5xl font-black font-display tracking-tighter leading-tight">
                      PEARLS<br /> AI adoption for enterprises
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed font-medium">
                    PEARLS streamline advanced AI by analyzing data from physical AI to deliver actionable insights. 
                      TCS's expertise, combined with NVIDIA's validated designs, enables enterprises to maximize the value of their infrastructure.
                    </p>
                    <div className="space-y-6 pt-4">
                       {[
                         "Consulting Partner of the Year Award",
                         "Solutions for the Telecom Sector",
                         "Enterprise AI factories with NVIDIA"
                       ].map((item, i) => (
                         <a key={i} href="#" className="flex items-center justify-between p-6 border-b border-slate-100 hover:bg-slate-50 group transition-all">
                            <span className="font-bold text-lg text-slate-800">{item}</span>
                            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-tcs-blue group-hover:translate-x-2 transition-all" />
                         </a>
                       ))}
                    </div>
                 </div>
                 <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1558494949-ef8b5655d939?q=80&w=2137&auto=format&fit=crop" 
                      className="w-full rounded-[60px] shadow-3xl grayscale hover:grayscale-0 transition-all duration-700" 
                      alt="Data center"
                    />
                 </div>
              </div>
           </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="py-48 bg-slate-950 text-white text-center relative overflow-hidden">
           <div className="container relative z-10 space-y-12">
              <h2 className="text-7xl md:text-[120px] font-black font-display tracking-tighter leading-none">
                Adaptability <br /> starts <span className="text-tcs-blue italic">here</span>
              </h2>
              <p className="text-2xl text-slate-400 font-medium max-w-2xl mx-auto italic">
                "Want to deliver memorable experiences to your customers?"
              </p>
              <button className="bg-white text-slate-950 px-16 py-8 rounded-full font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
                Talk to our experts
              </button>
           </div>
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        </section>
      </main>
    </div>
  );
}
