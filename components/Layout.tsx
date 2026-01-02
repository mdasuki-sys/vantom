import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Hexagon, ShieldCheck, Cpu } from 'lucide-react';
import { NavItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS: NavItem[] = [
  { label: 'Product', path: '/product' },
  { label: 'Use Cases', path: '/use-cases' },
  { label: 'Technology', path: '/technology' },
  { label: 'Security', path: '/security' },
  { label: 'About', path: '/about' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
             <Hexagon className="w-8 h-8 text-vantom-accent animate-pulse absolute" strokeWidth={1.5} />
             <div className="w-2 h-2 bg-vantom-accent rounded-full shadow-[0_0_10px_#00F0FF]"></div>
          </div>
          <span className="font-display font-bold text-2xl tracking-widest text-white group-hover:text-vantom-accent transition-colors">
            VANTOM
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`text-sm tracking-wide transition-colors ${location.pathname === item.path ? 'text-vantom-accent' : 'text-gray-400 hover:text-white'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-6 py-2 bg-vantom-accent/10 border border-vantom-accent/50 text-vantom-accent text-sm hover:bg-vantom-accent hover:text-black transition-all duration-300 uppercase tracking-wider font-semibold"
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-vantom-border"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className="text-gray-300 hover:text-vantom-accent py-2 text-lg font-display"
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="mt-4 text-center py-3 bg-vantom-accent text-black font-bold uppercase tracking-wider">
                Request Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-vantom-border bg-vantom-black pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link to="/" className="font-display font-bold text-2xl tracking-widest text-white">
            VANTOM
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed">
            Pioneering visual intelligence. Bridging the gap between artificial intelligence and physical presence.
          </p>
          <div className="text-gray-600 text-xs mt-4">
            Built by <span className="text-white">Off The Wall</span>.
          </div>
        </div>
        
        <div>
          <h4 className="font-display text-white mb-6 uppercase tracking-widest text-sm">Product</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><Link to="/product" className="hover:text-vantom-accent transition-colors">Capabilities</Link></li>
            <li><Link to="/technology" className="hover:text-vantom-accent transition-colors">Hardware</Link></li>
            <li><Link to="/security" className="hover:text-vantom-accent transition-colors">Enterprise Security</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white mb-6 uppercase tracking-widest text-sm">Solutions</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><Link to="/use-cases" className="hover:text-vantom-accent transition-colors">Corporate Offices</Link></li>
            <li><Link to="/use-cases" className="hover:text-vantom-accent transition-colors">Flagship Retail</Link></li>
            <li><Link to="/use-cases" className="hover:text-vantom-accent transition-colors">Events & Expos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white mb-6 uppercase tracking-widest text-sm">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li>Tripoli, Lebanon</li>
            <li>Global Deployments</li>
            <li><Link to="/contact" className="text-vantom-accent flex items-center gap-2">Get in Touch <ChevronRight size={14} /></Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-vantom-border flex flex-col md:flex-row justify-between items-center text-xs text-gray-700">
        <p>&copy; {new Date().getFullYear()} Off The Wall. All rights reserved. VANTOM™ is a registered trademark.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-vantom-black text-white selection:bg-vantom-accent selection:text-black">
      <Navbar />
      <main className="pt-24 min-h-[calc(100vh-400px)]">
        {children}
      </main>
      <Footer />
    </div>
  );
};