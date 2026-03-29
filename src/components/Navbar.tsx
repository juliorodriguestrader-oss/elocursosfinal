import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(27,28,28,0.05)]">
      <div className="flex justify-between items-center h-20 px-8 max-w-screen-2xl mx-auto w-full">
        <Link to="/" className="text-2xl font-black text-primary-container tracking-tighter font-headline">
          Edublink Academy
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "font-headline font-semibold tracking-tight transition-colors",
                location.pathname === link.path 
                  ? "text-primary-container border-b-2 border-primary-container pb-1" 
                  : "text-slate-600 hover:text-primary-container"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-all">
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden sm:block px-6 py-2 text-primary-container font-headline font-semibold hover:opacity-80 transition-all">
            Login
          </button>
          <button className="px-8 py-3 primary-gradient text-white rounded-full font-headline font-bold shadow-lg hover:opacity-80 transition-all scale-95 active:scale-90">
            Sign Up
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-headline font-semibold text-lg",
                    location.pathname === link.path ? "text-primary-container" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <button className="text-left font-headline font-semibold text-primary-container">Login</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
