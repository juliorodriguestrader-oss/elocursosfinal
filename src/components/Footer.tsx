import { Link } from 'react-router-dom';
import { Globe, Mail, Share2, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-16 px-8 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto w-full">
        <div className="space-y-6">
          <div className="text-xl font-bold text-slate-900">Edublink Academy</div>
          <p className="font-body text-sm text-slate-500 leading-relaxed">
            Defining the next generation of online learning through premium design and editorial curation.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform">
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-headline font-bold text-on-surface">Platform</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="font-body text-sm text-slate-500 hover:text-primary-container transition-colors">About Us</Link></li>
            <li><Link to="/courses" className="font-body text-sm text-slate-500 hover:text-primary-container transition-colors">Courses</Link></li>
            <li><Link to="/blog" className="font-body text-sm text-slate-500 hover:text-primary-container transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="font-body text-sm text-slate-500 hover:text-primary-container transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-headline font-bold text-on-surface">Support</h4>
          <ul className="space-y-2">
            <li><Link to="/contact" className="font-body text-sm text-slate-500 hover:text-primary-container transition-colors">Contact</Link></li>
            <li><Link to="/terms" className="font-body text-sm text-slate-500 hover:text-primary-container transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="font-body text-sm text-slate-500 hover:text-primary-container transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-headline font-bold text-on-surface">Newsletter</h4>
          <p className="font-body text-sm text-slate-500">Subscribe for course updates and scholarly insights.</p>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-primary/40"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary">
                <Send className="w-4 h-4" />
              </button>
            </div>
            <button className="w-full py-3 bg-slate-900 text-white font-bold rounded-md hover:opacity-90 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full mt-16 pt-8 border-t border-outline-variant/10 text-center">
        <p className="font-body text-sm text-slate-500">© 2024 Edublink Academy. Designed for the Academic Atelier.</p>
      </div>
    </footer>
  );
}
