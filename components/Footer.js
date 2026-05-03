'use client';

import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUpRight,
  Globe,
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative" id="footer">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4 space-y-10">
            <a href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-blue-700 font-black text-2xl italic">P</span>
              </div>
              <span className="text-3xl font-black font-display tracking-tighter">PEARLS IT HUB</span>
            </a>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              A global leader in technology services and digital transformation. 
              We help enterprises reimagine their businesses for the digital age.
            </p>
            <div className="flex gap-4">

  {/* LinkedIn */}
  <a 
    href="https://www.linkedin.com/company/pearlsithub/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all group"
  >
    <Linkedin className="w-5 h-5 text-white/60 group-hover:text-white" />
  </a>

  {/* Instagram */}
  <a 
    href="https://www.instagram.com/pearls_ithub/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-all group"
  >
    <Instagram className="w-5 h-5 text-white/60 group-hover:text-white" />
  </a>

</div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-8">What we do</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li><a href="#" className="hover:text-white flex items-center gap-2 group text-sm">Cloud <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2 group text-sm">Cognitive <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2 group text-sm">Consulting <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2 group text-sm">Cybersecurity <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2 group text-sm">Data <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-8">Who we are</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li><a href="#" className="hover:text-white text-sm">About Us</a></li>
              <li><a href="#" className="hover:text-white text-sm">Careers</a></li>
              <li><a href="#" className="hover:text-white text-sm">Our Values</a></li>
              <li><a href="#" className="hover:text-white text-sm">Leadership</a></li>
              <li><a href="#" className="hover:text-white text-sm">Investors</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4 bg-white/5 p-8 rounded-[32px] border border-white/10 space-y-6">
            <h4 className="text-xl font-black">Stay Connected</h4>
            <p className="text-slate-400 text-sm font-medium">Subscribe to our newsletter for the latest in digital engineering and innovation.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Work Email" 
                className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500 outline-none transition-all pr-12"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-blue-500 transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="py-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-8 text-xs font-black uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white text-[10px]">Privacy Notice</a>
            <a href="#" className="hover:text-white text-[10px]">Cookie Policy</a>
            <a href="#" className="hover:text-white text-[10px]">Disclaimer</a>
            <a href="#" className="hover:text-white text-[10px]">Transparency</a>
          </div>
          
          <div className="flex items-center gap-4 text-slate-500">
            <Globe className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">India | English</span>
          </div>

          <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} Pearls IT Hub. Global Excellence in Engineering.
          </p>
        </div>
      </div>
    </footer>
  );
}

