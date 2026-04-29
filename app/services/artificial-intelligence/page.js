'use client'
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ArrowRight, 
  Cpu, 
  Database, 
  Zap, 
  Brain,
  Wand2,
  BarChart3,
  Search,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

export default function ArtificialIntelligence() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-[72px]">
      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[60vh] flex items-center bg-slate-950 overflow-hidden">
          <div className="absolute inset-0">
             <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-40 grayscale"
                alt="AI background"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 text-tcs-blue font-black uppercase tracking-[0.4em] text-xs"
              >
                SERVICES / ARTIFICIAL INTELLIGENCE
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-9xl font-black font-display leading-[0.9] tracking-tighter text-white"
              >
                Intelligence <br />
                <span className="text-tcs-blue italic">Evolved.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl"
              >
                Moving beyond automation into the era of Generative Intelligence. 
                We build the models that power the future of enterprise decisions.
              </motion.p>
            </div>
          </div>
        </section>

        {/* --- CORE CAPABILITIES --- */}
        <section className="py-32 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
              <div className="space-y-12">
                <h2 className="text-5xl md:text-7xl font-black font-display tracking-tighter leading-tight">
                  Generative AI for the <span className="text-tcs-blue">Modern Enterprise.</span>
                </h2>
                <div className="aspect-square rounded-[60px] overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl relative group">
                   <img 
                     src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                     alt="AI Hardware"
                   />
                </div>
              </div>
              
              <div className="space-y-16">
                 <div className="space-y-6">
                    <p className="text-xl text-slate-500 font-medium leading-relaxed">
                      We help you transition from experimental AI to production-grade 
                      Autonomous Agents. Our expertise spans from LLM orchestration to 
                      Custom Model Fine-tuning.
                    </p>
                 </div>

                 <div className="grid gap-8">
                   {[
                     {
                       title: "Predictive Analytics",
                       icon: BarChart3,
                       desc: "Turn historical data into precise future insights for supply chains and finance."
                     },
                     {
                       title: "Computer Vision",
                       icon: Wand2,
                       desc: "High-precision visual inspection systems for smart manufacturing and retail."
                     },
                     {
                       title: "Natural Language Processing",
                       icon: Brain,
                       desc: "Custom LLMs and agentic workflows that understand your unique business context."
                     },
                     {
                       title: "AI Governance",
                       icon: ShieldCheck,
                       desc: "Ethical AI frameworks that ensure compliance, security, and unbiased results."
                     }
                   ].map((item, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 10 }}
                        className="flex gap-8 p-10 bg-slate-50 rounded-[40px] border border-slate-100 group transition-all"
                      >
                         <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-tcs-blue group-hover:rotate-12 transition-all">
                            <item.icon className="w-8 h-8 text-tcs-blue group-hover:text-white" />
                         </div>
                         <div className="space-y-3">
                            <h3 className="text-2xl font-black">{item.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                         </div>
                      </motion.div>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <section className="py-48 bg-slate-950 text-white text-center relative overflow-hidden">
           <div className="container relative z-10 space-y-12">
              <h2 className="text-7xl md:text-[100px] font-black font-display tracking-tighter leading-none">
                Ready to <br /> <span className="text-tcs-blue italic">Innovate?</span>
              </h2>
              <Link href="/contact" className="inline-block bg-white text-slate-950 px-16 py-8 rounded-full font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
                Consult with AI Experts
              </Link>
           </div>
        </section>
      </main>
    </div>
  );
}
