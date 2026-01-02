import React from 'react';
import { Section, SectionHeader, Card } from '../components/UI';
import { Cpu, Eye, Layers, ShieldCheck } from 'lucide-react';

export const Technology: React.FC = () => {
  return (
    <>
      <Section darker>
        <SectionHeader 
          title="Designed for Depth" 
          subtitle="VANTOM doesn’t simulate depth. It creates it."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Through a custom-built visual architecture, VANTOM gives digital intelligence a sense of space, volume, and position; allowing AI to feel present rather than projected.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 border-b border-white/5 pb-4 items-center">
                <span className="text-vantom-accent font-bold text-xl">01</span>
                <span className="text-white font-display uppercase tracking-wider text-lg">No wearables.</span>
              </div>
              <div className="flex gap-4 border-b border-white/5 pb-4 items-center">
                <span className="text-vantom-accent font-bold text-xl">02</span>
                <span className="text-white font-display uppercase tracking-wider text-lg">No illusions.</span>
              </div>
              <div className="flex gap-4 border-b border-white/5 pb-4 items-center">
                <span className="text-vantom-accent font-bold text-xl">03</span>
                <span className="text-white font-display uppercase tracking-wider text-lg">Just presence.</span>
              </div>
            </div>
          </div>
          <div className="glass-panel p-8 flex flex-col justify-center items-center text-center">
            <div className="w-48 h-48 border-2 border-vantom-accent/30 rounded-full flex items-center justify-center relative animate-[spin_10s_linear_infinite]">
              <div className="w-40 h-40 border border-white/10 rounded-full"></div>
              <div className="absolute top-0 w-2 h-2 bg-vantom-accent rounded-full shadow-[0_0_10px_cyan]"></div>
            </div>
            <p className="mt-8 text-xs font-mono text-vantom-accent">OPTICAL PATH VISUALIZATION</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader title="How It Works" centered />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Input", desc: "User speaks to VANTOM. The mic array isolates voice from background noise." },
            { step: "02", title: "Process", desc: "Audio is sent to the LLM core (On-prem or Cloud) to generate an intelligent text response." },
            { step: "03", title: "Render", desc: "Unreal Engine animates the digital human's lips and expressions to match the response in real-time." },
            { step: "04", title: "Display", desc: "The optical engine projects the character into 3D space, creating eye contact with the user." }
          ].map((item, i) => (
            <div key={i} className="relative p-6 border-t-2 border-white/10 hover:border-vantom-accent transition-colors">
              <span className="text-4xl font-display font-bold text-white/10 absolute top-4 right-4">{item.step}</span>
              <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};