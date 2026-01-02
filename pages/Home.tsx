import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Eye, Globe, ExternalLink } from 'lucide-react';
import { Button, Section, SectionHeader, Card } from '../components/UI';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vantom-accent/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-6 border border-vantom-accent/30 rounded-full bg-vantom-accent/5">
              <span className="text-vantom-accent text-xs font-display tracking-widest uppercase">Patent-Filed Technology</span>
            </div>
            
            {/* Version A Headline - Selected as Primary */}
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              SEE <span className="text-transparent bg-clip-text bg-gradient-to-r from-vantom-accent to-white text-glow">INTELLIGENCE.</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              VANTOM is the world's first patent-filed holographic AI assistant. Bringing artificial intelligence into the physical world with presence, depth, and eye contact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact">Request Demo</Button>
              <Button to="/product" variant="outline">View Product</Button>
            </div>
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col items-center justify-center gap-3"
          >
             <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-vantom-accent/30 shadow-[0_0_50px_rgba(0,240,255,0.15)] bg-black group">
                {/* Glowing backdrop */}
                <div className="absolute -inset-1 bg-gradient-to-r from-vantom-accent/20 to-purple-500/20 blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                
                <iframe 
                  className="relative z-10 w-full h-full"
                  src="https://www.youtube.com/embed/j7v6tbTKp10" 
                  title="VANTOM Explainer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
             </div>
             <a 
               href="https://youtu.be/j7v6tbTKp10" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-xs text-gray-500 hover:text-vantom-accent flex items-center gap-1 transition-colors"
             >
               Watch on YouTube <ExternalLink size={10} />
             </a>
          </motion.div>
        </div>
      </div>

      {/* Credibility / Off The Wall */}
      <section className="bg-black py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left md:w-1/3">
                 <h4 className="text-white font-display uppercase tracking-widest text-sm mb-2">Engineered by Off The Wall</h4>
                 <p className="text-gray-500 text-xs">Pioneering visual technology for global institutions.</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-16 opacity-40 grayscale w-full md:w-2/3">
                 {/* Text based logos for simplicity in this demo */}
                 <span className="font-bold text-xl font-display">NIKE</span>
                 <span className="font-bold text-xl font-display">UNICEF</span>
                 <span className="font-bold text-xl font-display">LACOSTE</span>
                 <span className="font-bold text-xl font-display">NYU ABU DHABI</span>
                 <span className="font-bold text-xl font-display">UNITED NATIONS</span>
              </div>
           </div>
        </div>
      </section>

      {/* Value Proposition */}
      <Section darker>
        <SectionHeader 
          title="Beyond the Chatbot" 
          subtitle="Text is flat. Voice is invisible. VANTOM gives AI a body, a face, and a spatial context."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Spatial Intelligence" icon={<Eye className="w-8 h-8"/>}>
            VANTOM doesn't just speak. It shows. Using a proprietary optical block, it projects 3D visuals and digital humans that occupy physical space, creating true engagement.
          </Card>
          <Card title="Real-Time Presence" icon={<Cpu className="w-8 h-8"/>}>
            Powered by Unreal Engine pixel streaming, VANTOM renders metahuman-fidelity avatars that react instantly to voice and environmental triggers.
          </Card>
          <Card title="Enterprise Secure" icon={<Bot className="w-8 h-8"/>}>
            Deploy on-premise or via private cloud. Your data and conversations remain within your control. Built for lobbies, secure facilities, and flagship retail.
          </Card>
        </div>
      </Section>

      {/* Secondary Hero / Version B Headline */}
      <section className="min-h-[70vh] relative overflow-hidden flex items-center justify-center bg-black border-t border-white/5">
         
         {/* Animated Grid Floor with Perspective */}
         <div className="absolute inset-0 perspective-[1000px] opacity-30 pointer-events-none">
            <motion.div 
               className="absolute -inset-[100%] bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:50px_50px]"
               style={{ transform: "rotateX(60deg) scale(2)" }}
               animate={{ y: ["0%", "5%"] }} 
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
         </div>

         {/* Deep Space Gradient Mesh */}
         <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black via-vantom-accent/5 to-black"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
         />

         {/* Floating Particles System */}
         <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            {[...Array(35)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-vantom-accent rounded-full blur-[1px]"
                style={{
                  width: Math.random() > 0.5 ? 2 : 1,
                  height: Math.random() > 0.5 ? 2 : 1,
                  left: `${Math.random() * 100}%`,
                  top: `100%`,
                }}
                animate={{
                  y: [0, -1000], // Move up
                  opacity: [0, Math.random() * 0.5 + 0.2, 0], // Fade in/out
                  x: [0, (Math.random() - 0.5) * 100], // Drift L/R
                }}
                transition={{
                  duration: Math.random() * 15 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 10,
                  ease: "linear",
                }}
              />
            ))}
         </div>

         {/* Center Content */}
         <div className="text-center relative z-10 px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="font-display text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-none">
                INTELLIGENCE,<br />
                <motion.span 
                  className="text-vantom-accent inline-block"
                  animate={{ 
                    color: ["#00F0FF", "#FFFFFF", "#00F0FF"],
                    textShadow: ["0 0 20px rgba(0,240,255,0.3)", "0 0 40px rgba(255,255,255,0.5)", "0 0 20px rgba(0,240,255,0.3)"]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                   MATERIALIZED.
                </motion.span>
              </h2>
              
              <div className="flex justify-center">
                <Link to="/technology" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-medium">
                  <span className="border-b border-vantom-accent/30 group-hover:border-vantom-accent pb-1 transition-colors duration-300">Explore The Hardware</span>
                  <ArrowRight size={16} className="text-vantom-accent group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
         </div>
      </section>
    </>
  );
};