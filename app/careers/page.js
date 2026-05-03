
'use client';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion } from 'framer-motion'
import { 
  ChevronRight, 
  ArrowRight, 
  Code2, 
  BarChart3, 
  Users, 
  Palette, 
  Briefcase,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';

const subNavbarLinks = [
  { name: 'OPEN ROLES', active: true },
//   { name: 'OUR CULTURE', active: false },
//   { name: 'BENEFITS', active: false },
//   { name: 'PROCESS', active: false },
];

const jobs = [
  {
    role: "Web Developer",
    experience: "Fresher to 1 Year",
    type: "Full-time",
    icon: Code2,
    tags: ["React", "Node.js", "Tailwind CSS"],
    description: "Build cutting-edge web applications using modern frameworks and technologies."
  },
  {
    role: "Digital Marketing Executive",
    experience: "1+ Year preferred",
    type: "Full-time",
    icon: BarChart3,
    tags: ["SEO", "SEM", "Social Media"],
    description: "Drive brand awareness and performance through data-driven digital strategies."
  },
  {
    role: "Marketing Executive",
    experience: "Fresher to 2 Years",
    type: "Full-time",
    icon: Users,
    tags: ["Brand", "Content", "Strategy"],
    description: "Develop and execute innovative marketing campaigns across multiple channels."
  },
  {
    role: "UI/UX Designer",
    experience: "1+ Year Experience",
    type: "Full-time",
    icon: Palette,
    tags: ["Figma", "Design Systems", "Prototyping"],
    description: "Create intuitive and beautiful user journeys for global enterprise clients."
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-tcs-blue selection:text-white">
      {/* --- SUB NAVBAR --- */}
      <div className="bg-slate-900 text-white py-4 mt-0 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center gap-8">
          <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest">
            <a href="/" className="hover:text-tcs-light transition-colors">Home</a>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-tcs-light">Careers</span>
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
        <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
             <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-40 contrast-125"
                alt="Careers at Pearls"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 text-tcs-light font-black uppercase tracking-[0.4em] text-xs"
              >
                JOIN THE TRIBE / OPPORTUNITIES
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-[100px] font-black font-display leading-[0.9] tracking-tighter text-white"
              >
                Build the future <br />
                <span className="text-tcs-blue italic">with us.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl"
              >
                At PEARLS IT HUB, we're not just looking for employees. We're looking for architects 
                of innovation who dare to reimagine everything.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-8 pt-4"
              >
                 <a href="#roles" className="bg-white text-slate-950 px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-tcs-blue hover:text-white transition-all shadow-xl">
                    View Open Positions
                 </a>
                 <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
                       <Sparkles className="w-5 h-5 text-white group-hover:text-slate-950 transition-colors" />
                    </div>
                    <span className="text-white font-black uppercase tracking-widest text-xs">Our Values</span>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- JOB LISTINGS SECTION --- */}
        <section id="roles" className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-24 items-start mb-24">
              <div className="space-y-12">
                <div className="h-2 w-24 bg-tcs-blue" />
                <h2 className="text-5xl md:text-7xl font-black font-display tracking-tighter leading-tight text-slate-900">
                  Current <br /> opportunities <br /> for growth.
                </h2>
              </div>
              <div className="space-y-10">
                <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                  We are scaling fast and looking for passionate individuals who thrive in high-impact environments. 
                  Whether you're a fresh graduate or an experienced professional, Pearls has a place for your ambition.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {jobs.map((job, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -8 }}
                  className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:shadow-2xl transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8">
                    <job.icon className="w-12 h-12 text-slate-200 group-hover:text-tcs-blue/20 transition-colors" />
                  </div>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500">
                        {job.type}
                      </span>
                      <span className="px-4 py-1.5 bg-tcs-blue/10 text-tcs-blue rounded-full text-[10px] font-black uppercase tracking-widest">
                        {job.experience}
                      </span>
                    </div>
                    
                    <h3 className="text-4xl font-black font-display tracking-tight text-slate-900">{job.role}</h3>
                    
                    <p className="text-slate-500 font-medium leading-relaxed">
                      {job.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                       {job.tags.map(tag => (
                         <span key={tag} className="text-[11px] font-bold text-slate-400 bg-slate-200/50 px-3 py-1 rounded-md">
                           #{tag}
                         </span>
                       ))}
                    </div>

                    <div className="pt-6">
                      <button className="flex items-center gap-3 font-black uppercase tracking-widest text-xs text-tcs-blue group/btn">
                        Apply Now
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="py-24 bg-slate-950 text-white border-y border-white/5">
          <div className="container mx-auto px-4">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {[
                  { value: '50+', label: 'Global Clients' },
                  { value: '120+', label: 'Team Members' },
                  { value: '250+', label: 'Projects Delivered' },
                  { value: '15+', label: 'Tech Stacks' }
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="text-5xl font-black font-display text-tcs-blue tracking-tighter">{stat.value}</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* --- CULTURE SECTION --- */}
        <section className="py-32 bg-slate-50">
          <div className="container mx-auto px-4">
             <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="space-y-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-tcs-blue">OUR ECOSYSTEM</span>
                  <h2 className="text-5xl md:text-7xl font-black font-display tracking-tighter leading-tight">
                    Where passion <br /> meets purpose.
                  </h2>
                  <p className="text-xl text-slate-500 leading-relaxed font-medium">
                    We believe in a flat hierarchy where the best idea wins. Innovation is driven by diversity of thought 
                    and the freedom to experiment. Join a culture that celebrates curiosity.
                  </p>
                  
                  <div className="grid gap-6">
                    {[
                      { icon: Clock, title: 'Flexible Work', text: 'Hybrid or remote options for balanced life.' },
                      { icon: Briefcase, title: 'Growth Budget', text: 'Annual budget for courses and certifications.' },
                      { icon: MapPin, title: 'Global Offices', text: 'Opportunities to work across our global hubs.' }
                    ].map((perk, i) => (
                      <div key={i} className="flex gap-6 p-6 bg-white rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0">
                          <perk.icon className="w-6 h-6 text-tcs-blue" />
                        </div>
                        <div>
                          <h4 className="font-black uppercase tracking-widest text-xs text-slate-900 mb-1">{perk.title}</h4>
                          <p className="text-sm text-slate-500">{perk.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
               
               <div className="relative group">
                  <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-3xl">
                     <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        alt="Pearls Culture"
                     />
                  </div>
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-tcs-blue rounded-[40px] flex flex-col items-center justify-center p-6 text-white text-center shadow-2xl hidden md:flex">
                     <span className="text-4xl font-black font-display leading-none mb-2">#1</span>
                     <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Best places to work 2026</span>
                  </div>
               </div>
             </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="py-48 bg-slate-950 text-white text-center relative overflow-hidden">
           <div className="container mx-auto px-4 relative z-10 space-y-12">
              <h2 className="text-7xl md:text-[120px] font-black font-display tracking-tighter leading-none">
                Your journey <br /> starts <span className="text-tcs-blue italic">here</span>
              </h2>
              <p className="text-2xl text-slate-400 font-medium max-w-2xl mx-auto italic">
                "Don't wait for the right opportunity. Create it."
              </p>
              <button className="bg-white text-slate-950 px-16 py-8 rounded-full font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl group flex items-center gap-6 mx-auto">
                Join the Team
                <ArrowRight className="w-8 h-8 text-tcs-blue group-hover:translate-x-2 transition-transform" />
              </button>
           </div>
           
           {/* Decorative elements */}
           <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tcs-blue rounded-full blur-[120px]" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
           </div>
        </section>
      </main>
      
      {/* --- FOOTER --- */}
      <footer className="py-20 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-4 text-center space-y-8">
           <div className="text-white font-black text-2xl tracking-tighter uppercase">
             PEARLS<span className="text-tcs-blue"> HUB</span>
           </div>
           <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Glassdoor</a>
           </div>
           <p className="text-xs text-slate-700">© 2026 Pearls IT Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
