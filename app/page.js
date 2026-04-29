'use client';

import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  ChevronRight, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Cpu, 
  Globe,
  Zap,
  Award,
  Users2,
  Rocket,
  Play,
  Languages,
  HeartPulse,
  HardHat,
  Scale,
  Microscope,
  Search
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  }),
};

const industryIcons = {
  Banking: Scale,
  Retail: Rocket,
  LifeSciences: HeartPulse,
  Manufacturing: HardHat,
  Technology: Cpu,
  Communications: Languages,
  Energy: Zap,
  PublicServices: Globe
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-tcs-blue selection:text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* --- HERO SECTION --- */}
       <section className="relative min-h-screen flex items-center overflow-hidden bg-black" id="hero">
  
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/video.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/55 z-10"></div>

  {/* Content */}
  <div className="container relative z-20">
    <div className="max-w-4xl space-y-8">
      
      <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-sm">
        Pearls IT Hub
      </span>

      <h1 className="text-6xl md:text-8xl font-black text-white leading-tight">
        Build Your <br />
        <span className="text-blue-400">Digital Future</span>
      </h1>

      <p className="text-xl md:text-2xl text-slate-200 max-w-2xl leading-relaxed">
        Websites, Apps, Custom Software & Digital Growth Solutions
        for modern businesses.
      </p>

      <div className="flex flex-wrap gap-5 pt-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all">
          Learn More
        </button>

        <button className="border border-white/40 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all">
          Contact Us
        </button>
      </div>
    </div>
  </div>
</section>

        {/* --- STRATEGIC PILLARS --- */}
        <section className="py-32 bg-white" id="services">
          <div className="container">
            <div className="max-w-4xl mb-24">
              <span className="text-tcs-blue font-black uppercase text-sm tracking-widest block mb-6">What we do</span>
              <h2 className="text-6xl md:text-8xl font-black font-display text-tcs-dark leading-none tracking-tighter mb-10">
                Strategic <br /> Innovation.
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                We combine technical depth with business acumen to deliver at the 
                intersection of human belief and digital possibility.
              </p>
            </div>
<div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
         
  {[
    { 
      title: 'Website Development', 
      icon: Cloud, 
      desc: 'Premium business websites designed for trust, branding, and lead generation.',
      color: 'bg-blue-50' 
    },
    { 
      title: 'E-Commerce Solutions', 
      icon: Database, 
      desc: 'Online stores with payment gateways, product management, and sales automation.',
      color: 'bg-purple-50'
    },
    { 
      title: 'Custom Software', 
      icon: Cpu, 
      desc: 'CRM, ERP, HRMS, billing, and workflow systems tailored for your business.',
      color: 'bg-cyan-50'
    },
    { 
      title: 'Mobile App Development', 
      icon: Cloud, 
      desc: 'Android and iOS apps with smooth UI, performance, and scalable backend systems.',
      color: 'bg-green-50'
    },
    { 
      title: 'Digital Marketing', 
      icon: Database, 
      desc: 'SEO, Google Ads, Meta Ads, and social media strategies that bring real leads.',
      color: 'bg-pink-50'
    },
    { 
      title: 'UI / UX Design', 
      icon: Cpu, 
      desc: 'Modern interfaces that improve user experience and increase conversions.',
      color: 'bg-yellow-50'
    },
    { 
      title: 'Cloud Hosting', 
      icon: Cloud, 
      desc: 'Secure cloud deployment, domain setup, hosting, backups, and maintenance.',
      color: 'bg-indigo-50'
    },
    { 
      title: 'Maintenance & Support', 
      icon: Database, 
      desc: 'Ongoing updates, bug fixes, monitoring, and technical support for your systems.',
      color: 'bg-red-50'
    },
    { 
      title: 'Startup Tech Solutions', 
      icon: Cpu, 
      desc: 'Complete MVP development for startups from idea validation to launch.',
      color: 'bg-orange-50'
    }
  ].map((service, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      whileHover={{ y: -15 }}
      className="group cursor-pointer"
    >
                  <div className={`aspect-[4/5] ${service.color} rounded-[40px] p-12 flex flex-col justify-between transition-all duration-500 group-hover:shadow-2xl`}>
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm group-hover:bg-tcs-blue group-hover:rotate-[10deg] transition-all">
                      <service.icon className="w-10 h-10 text-tcs-blue group-hover:text-white" />
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-4xl font-black text-tcs-dark group-hover:text-tcs-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-lg text-slate-600 font-medium leading-relaxed">
                        {service.desc}
                      </p>
                      <div className="flex items-center gap-3 font-black text-tcs-blue opacity-0 group-hover:opacity-100 transition-all">
                        Learn More <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- INDUSTRY MATRIX --- */}
        <section className="py-32 bg-tcs-blue text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '80px 80px' }} />
          
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-10">
                <span className="text-white/60 font-black uppercase tracking-widest text-sm">Industry Focus</span>
                <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter">Domain <br /> Matters.</h2>
                <p className="text-2xl text-blue-100 font-medium leading-relaxed max-w-xl">
                  Technology is only as good as the context it serves. We bring deep vertical 
                  expertise to every digital transformation.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="bg-white text-tcs-blue px-10 py-5 rounded-full font-black text-xl hover:bg-tcs-light hover:text-white transition-all shadow-xl active:scale-95">
                    Our Solutions
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-10">
                {Object.entries(industryIcons).map(([name, Icon], i) => (
                  <motion.div 
                    key={name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col gap-6 group cursor-pointer"
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl group-hover:bg-white group-hover:scale-110 transition-all shadow-xl">
                      <Icon className="w-8 h-8 text-white group-hover:text-tcs-blue transition-colors" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">{name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- INSIGHTS HUB --- */}
        <section className="py-32 bg-white" id="insights">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
              <div className="space-y-4">
                <span className="text-tcs-blue font-black uppercase text-sm tracking-widest">Intelligence Index 2026</span>
                <h2 className="text-6xl font-black text-tcs-dark tracking-tighter">Knowledge.</h2>
              </div>
              <button className="font-black text-xl border-b-4 border-tcs-blue pb-1 hover:text-tcs-blue transition-colors">
                View Intelligence Index →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              {/* Feature Article */}
              <div className="md:col-span-12 lg:col-span-8 group cursor-pointer">
                <div className="aspect-[21/9] bg-tcs-dark rounded-[40px] overflow-hidden mb-12 relative border border-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                    alt="AI Whitepaper"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tcs-dark via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-10 left-10 p-2">
                     <span className="px-4 py-2 bg-tcs-blue text-white text-xs font-black rounded-lg uppercase tracking-widest">LATEST WHITEPAPER</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-5xl font-black text-tcs-dark group-hover:text-tcs-blue transition-colors leading-[1.1] tracking-tight">
                    The Quantum Sovereign Cloud: A Roadmap for Next-Gen Infrastructure.
                  </h3>
                  <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-4xl">
                    Discover how nations are leveraging decentralized infrastructure to 
                    ensure digital sovereignty while scaling global innovation.
                  </p>
                  <div className="flex items-center gap-10 text-sm font-black text-slate-400 uppercase tracking-[0.2em]">
                    <span>Policy Research</span>
                    <span>•</span>
                    <span>15 Min Read</span>
                  </div>
                </div>
              </div>

              {/* Side Articles */}
              <div className="md:col-span-12 lg:col-span-4 space-y-12">
                {[
                  { tag: 'STRATEGY', title: 'Post-Digital Darwinism: Why agility is no longer enough.' },
                  { tag: 'SECURITY', title: 'Adaptive Zero Trust: Protecting the edge of everything.' },
                  { tag: 'ESG', title: 'Carbon Neutral Computation: The rise of Green DevOps.' }
                ].map((article, i) => (
                  <div key={i} className="group cursor-pointer border-b border-slate-100 pb-10 last:border-0 hover:bg-slate-50 p-4 rounded-3xl transition-colors">
                    <span className="text-tcs-blue font-black text-xs uppercase tracking-widest block mb-4">{article.tag}</span>
                    <h4 className="text-2xl font-black text-tcs-dark group-hover:text-tcs-blue transition-colors leading-tight tracking-tight">
                      {article.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- GLOBAL IMPACT BAR --- */}
        <section className="py-24 bg-slate-950 text-white relative">
           <div className="container">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 text-center">
                 {[
                   { n: '100+', d: 'Global Clients' },
                   { n: '500K', d: 'Lines of Impact' },
                   { n: '99%', d: 'Client Retention' },
                   { n: '24/7', d: 'Support Available' }
                 ].map((stat, i) => (
                   <div key={i} className="space-y-3">
                      <div className="text-5xl md:text-8xl font-black text-white tracking-tighter">{stat.n}</div>
                      <div className="text-xs font-black uppercase tracking-[0.4em] text-slate-600">{stat.d}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* --- FINAL CALL TO ACTION --- */}
        <section className="py-48 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tcs-blue/5 rounded-full blur-[120px] -translate-y-1/2" />
          
          <div className="container text-center space-y-16 relative z-10">
            <h2 className="text-7xl md:text-[140px] font-black text-tcs-dark tracking-tighter leading-[0.8]">
              Believe <br /> in the <span className="text-tcs-blue italic">Next.</span>
            </h2>
            <p className="text-3xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
              Partner with the leaders in digital transformation. 
              Let’s engineer the future of your enterprise together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8">
              <button className="bg-tcs-blue text-white px-16 py-8 rounded-full font-black text-2xl hover:bg-tcs-dark transition-all shadow-2xl shadow-tcs-blue/40 active:scale-95">
                Contact Our Specialists
              </button>
              <button className="bg-slate-100 text-tcs-dark px-16 py-8 rounded-full font-black text-2xl hover:bg-slate-200 transition-all active:scale-95">
                Careers Hub
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
