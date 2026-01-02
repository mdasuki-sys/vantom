import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Section: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
  darker?: boolean;
}> = ({ children, className = "", id, darker = false }) => (
  <section id={id} className={`py-20 md:py-32 px-6 ${darker ? 'bg-black' : 'bg-vantom-dark'} ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

export const SectionHeader: React.FC<{
  title: string;
  subtitle?: string;
  centered?: boolean;
}> = ({ title, subtitle, centered }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-display text-3xl md:text-5xl font-bold uppercase tracking-widest text-white mb-6"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  onClick?: () => void;
  to?: string;
  className?: string;
}> = ({ children, variant = 'primary', onClick, to, className = "" }) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-8 py-4 font-display font-bold uppercase tracking-widest text-sm transition-all duration-300 group";
  
  const variants = {
    primary: "bg-vantom-accent text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]",
    outline: "bg-transparent border border-vantom-accent text-vantom-accent hover:bg-vantom-accent hover:text-black",
    ghost: "bg-transparent text-gray-400 hover:text-white"
  };

  const content = (
    <>
      {children}
      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};

export const Card: React.FC<{
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}> = ({ title, children, icon, className = "" }) => (
  <div className={`glass-panel p-8 border border-white/5 hover:border-vantom-accent/50 transition-colors group ${className}`}>
    <div className="mb-6 text-vantom-accent opacity-70 group-hover:opacity-100 transition-opacity">
      {icon}
    </div>
    <h3 className="font-display text-xl font-bold text-white mb-4 uppercase tracking-wide">{title}</h3>
    <div className="text-gray-400 leading-relaxed text-sm">
      {children}
    </div>
  </div>
);