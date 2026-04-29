'use client'
import { useEffect } from 'react';
import { motion } from 'framer-motion'
import Link from 'next/link';

export default function ServiceLayout({
  category,
  title,
  description,
  heroImage,
  contentImage,
  capabilities
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-[72px]">
      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[60vh] flex items-center bg-slate-950 overflow-hidden">
          <div className="absolute inset-0">
             <img 
                src={heroImage} 
                className="w-full h-full object-cover opacity-40 grayscale"
                alt={`${title} background`}
             />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
          </div>

          <div className="container mx-auto relative z-10 px-6">
            <div className="max-w-4xl space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 text-pearl-blue font-black uppercase tracking-[0.4em] text-xs"
              >
                SERVICES / {category}
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-9xl font-black font-display leading-[0.9] tracking-tighter text-white"
              >
                {title.split(' ')[0]} <br />
                <span className="text-pearl-blue italic">{title.split(' ').slice(1).join(' ')}</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl"
              >
                {description}
              </motion.p>
            </div>
          </div>
        </section>

        {/* --- CORE CAPABILITIES --- */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
              <div className="space-y-12">
                <h2 className="text-5xl md:text-7xl font-black font-display tracking-tighter leading-tight">
                  Generative solutions for the <span className="text-pearl-blue">Modern Enterprise.</span>
                </h2>
                <div className="aspect-square rounded-[60px] overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl relative group">
                   <img 
                     src={contentImage} 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                     alt={title}
                   />
                </div>
              </div>
              
              <div className="space-y-16">
                 <div className="space-y-6">
                    <p className="text-xl text-slate-500 font-medium leading-relaxed">
                      We help you transition from experimental technology to production-grade 
                      systems. Our expertise spans from architecture orchestration to 
                      custom solution fine-tuning.
                    </p>
                 </div>

                 <div className="grid gap-8">
                   {capabilities.map((item, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 10 }}
                        className="flex gap-8 p-10 bg-slate-50 rounded-[40px] border border-slate-100 group transition-all"
                      >
                         <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-pearl-blue group-hover:rotate-12 transition-all">
                            <item.icon className="w-8 h-8 text-pearl-blue group-hover:text-white" />
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
           <div className="container mx-auto relative z-10 space-y-12 px-6">
              <h2 className="text-7xl md:text-[100px] font-black font-display tracking-tighter leading-none">
                Ready to <br /> <span className="text-pearl-blue italic">Innovate?</span>
              </h2>
              <Link href="/" className="inline-block bg-white text-slate-950 px-16 py-8 rounded-full font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
                Consult with Experts
              </Link>
           </div>
        </section>
      </main>
    </div>
  );
};
