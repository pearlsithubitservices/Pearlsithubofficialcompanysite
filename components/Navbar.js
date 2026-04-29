'use client';
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Globe, Search, ArrowRight, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const megaMenuData = {
  Services: {
    title: "Perpetually Adaptive Enterprise",
    desc: "At Pearls IT Hub, we help businesses grow through modern technology, innovation, and scalable digital solutions.",
    cta: "Explore Services",
    href: "/services",
    categories: [
      {
        name: "Core Services",
        items: [
          { name: "Artificial Intelligence", href: "/services/artificial-intelligence" },
          { name: "Cloud Solutions", href: "/services/cloud" },
          { name: "Consulting", href: "/services/consulting" },
          { name: "Cybersecurity", href: "/services/cybersecurity" },
          { name: "Enterprise Solutions", href: "/services/enterprise-solutions" },
          { name: "Network Solutions", href: "/services/network-solutions" }
        ]
      },
      {
        name: "Development",
        items: [
          { name: "Website Development", href: "/services/website-development" },
          { name: "E-Commerce Development", href: "/services/ecommerce-development" },
          { name: "Mobile App Development", href: "/services/mobile-app-development" },
          { name: "Custom Software", href: "/services/custom-software" }
        ]
      },
      {
        name: "Marketing",
        items: [
          { name: "SEO Services", href: "/services/seo" },
          { name: "Social Media Marketing", href: "/services/social-media-marketing" },
          { name: "Google Ads", href: "/services/google-ads" },
          { name: "Branding", href: "/services/branding" }
        ]
      },
      {
        name: "Support",
        items: [
          { name: "Maintenance", href: "/services/maintenance" },
          { name: "Cloud Hosting", href: "/services/cloud-hosting" },
          { name: "Technical Support", href: "/services/technical-support" },
          { name: "Startup Solutions", href: "/services/startup-solutions" }
        ]
      }
    ]
  },

  Industries: {
    title: "Domain Excellence",
    desc: "We deliver industry-specific solutions with deep business understanding and technology expertise.",
    cta: "Explore Industries",
    href: "/industries",
    categories: [
      {
        name: "Business",
        items: [
          { name: "Banking", href: "/industries/banking" },
          { name: "Insurance", href: "/industries/insurance" },
          { name: "Retail", href: "/industries/retail" }
        ]
      },
      {
        name: "Healthcare",
        items: [
          { name: "Hospitals", href: "/industries/hospitals" },
          { name: "Pharma", href: "/industries/pharma" },
          { name: "Medical Devices", href: "/industries/medical-devices" }
        ]
      },
      {
        name: "Manufacturing",
        items: [
          { name: "Automotive", href: "/industries/automotive" },
          { name: "Industrial Products", href: "/industries/industrial-products" }
        ]
      },
      {
        name: "Education",
        items: [
          { name: "Schools", href: "/industries/schools" },
          { name: "Colleges", href: "/industries/colleges" },
          { name: "EdTech", href: "/industries/edtech" }
        ]
      }
    ]
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);
 const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setActiveMegaMenu(null);
    setIsOpen(false);
 }, [pathname]);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Industries', href: '/#industries' },
    { name: 'Insights', href: '/#insights' },
    { name: 'About Us', href: '/#about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled || activeMegaMenu ? 'bg-slate-950 border-b border-white/5 py-4' : 'bg-transparent py-7'
      }`}
      onMouseLeave={() => {
        setActiveMegaMenu(null);
        setActiveCategory(0);
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transform hover:rotate-6 transition-transform shadow-lg shadow-blue-600/30">
            <span className="text-white font-bold text-xl uppercase italic">P</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold font-display tracking-tight text-white uppercase italic leading-[1]">PEARLS IT HUB</span>
            <span className="text-[9px] text-blue-400 font-bold tracking-[0.3em] uppercase mt-1">Digital Excellence</span>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div 
              key={link.name}
              onMouseEnter={() => setActiveMegaMenu(link.name)}
              className="relative py-2"
            >
              <Link 
                href={link.href}
                className={`text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1.5 group ${
                  activeMegaMenu === link.name ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMegaMenu === link.name ? 'rotate-180 opacity-100' : 'opacity-30'}`} />
              </Link>
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="hidden lg:flex items-center gap-8">
          <button className="text-slate-400 hover:text-white transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <button className="text-slate-400 hover:text-white transition-colors">
            <Globe className="w-4 h-4" />
          </button>
          <Link href="/contact" className="bg-white hover:bg-blue-50 text-slate-950 px-7 py-2.5 rounded-full text-xs font-bold tracking-widest transition-all hover:scale-105 active:scale-95 uppercase">
            Let's Talk
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MEGA MENU OVERLAY */}
      <AnimatePresence>
        {activeMegaMenu && megaMenuData[activeMegaMenu] && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-slate-950 border-t border-white/5 shadow-2xl py-16 overflow-hidden"
          >
            <div className="container mx-auto px-6 grid grid-cols-12 gap-12">
              {/* Left Info */}
              <div className="col-span-3 space-y-8">
                <h3 className="text-3xl font-black font-display text-white leading-tight">
                  {megaMenuData[activeMegaMenu].title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {megaMenuData[activeMegaMenu].desc}
                </p>
                <Link href={megaMenuData[activeMegaMenu].href} className="flex items-center gap-3 text-blue-400 font-bold text-sm tracking-tight group">
                  {megaMenuData[activeMegaMenu].cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Categories Navigation */}
              <div className="col-span-3 border-l border-white/10 pl-8 space-y-4">
                {megaMenuData[activeMegaMenu].categories.map((cat, idx) => (
                  <button
                    key={cat.name}
                    onMouseEnter={() => setActiveCategory(idx)}
                    className={`w-full text-left py-3 px-4 rounded-xl flex items-center justify-between transition-all font-bold text-sm tracking-tight ${
                      activeCategory === idx ? 'bg-white/5 text-white' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {cat.name}
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeCategory === idx ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                  </button>
                ))}
              </div>

              {/* Specific Items */}
             <div className="col-span-6 grid grid-cols-2 gap-x-12 gap-y-6 pl-8">
  {megaMenuData[activeMegaMenu].categories[activeCategory].items.map((item, idx) => (
    <Link
      key={idx}
      href={item.href}
      className="text-slate-400 hover:text-white font-medium text-sm transition-colors block py-1"
    >
      {item.name}
    </Link>
  ))}
</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-slate-950 border-t border-white/5 py-8 px-6 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-lg font-bold text-slate-300" onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="w-full bg-blue-600 text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm mt-4 text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
