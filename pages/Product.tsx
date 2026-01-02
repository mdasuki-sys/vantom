import React from 'react';
import { Section, SectionHeader, Button } from '../components/UI';
import { Mic, Layers, User, Smartphone, Wifi, Zap } from 'lucide-react';

export const Product: React.FC = () => {
  return (
    <>
      <Section darker className="min-h-[60vh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div>
             <h1 className="font-display text-5xl font-bold text-white mb-6">THE DEVICE</h1>
             <p className="text-xl text-gray-400 leading-relaxed mb-8">
               VANTOM transforms intelligence from something you hear into something you experience.
             </p>
             <ul className="space-y-4 mb-8">
               {[
                 "Proprietary Optical Depth System",
                 "Unreal Engine Real-Time Rendering",
                 "Two-way Voice Interaction",
                 "Compact Footprint"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-gray-300">
                   <div className="w-1.5 h-1.5 bg-vantom-accent rounded-full"></div>
                   {item}
                 </li>
               ))}
             </ul>
             <Button to="/contact">Get Specifications</Button>
           </div>
           <div className="relative aspect-square glass-panel border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center bg-black/40">
             <div className="absolute inset-0 bg-gradient-to-br from-vantom-accent/5 to-transparent"></div>
             <img 
                src="https://i.ibb.co/0VBnHfSf/Picture1.png" 
                alt="Vantom Device Render" 
                className="w-[90%] h-[90%] object-contain relative z-10 drop-shadow-2xl"
             />
           </div>
        </div>
      </Section>

      <Section>
        <SectionHeader 
          title="Core Capabilities" 
          subtitle="Designed to replace static kiosks and faceless voice assistants."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <User className="w-6 h-6" />,
              title: "Metahuman Fidelity",
              desc: "Lifelike facial expressions and lip-syncing driven by AI text-to-speech engines in real-time."
            },
            {
              icon: <Mic className="w-6 h-6" />,
              title: "Conversational AI",
              desc: "Integrates with leading LLMs to handle complex queries, FAQs, and navigational assistance naturally."
            },
            {
              icon: <Layers className="w-6 h-6" />,
              title: "Visual Context",
              desc: "VANTOM can pull up 3D objects, QR codes, maps, or videos 'floating' next to the avatar during conversation."
            },
            {
              icon: <Smartphone className="w-6 h-6" />,
              title: "Mobile Control",
              desc: "Admins can control the character, change content, or take over the voice remotely via mobile app."
            },
            {
              icon: <Wifi className="w-6 h-6" />,
              title: "Pixel Streaming",
              desc: "Offloads heavy graphical processing to edge compute or cloud, ensuring the device stays cool and silent."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Always On",
              desc: "Built for 24/7 commercial operation with auto-sleep and wake-on-presence sensors."
            }
          ].map((feature, idx) => (
            <div key={idx} className="border-l border-white/10 pl-6 py-2 hover:border-vantom-accent transition-colors">
              <div className="text-vantom-accent mb-4">{feature.icon}</div>
              <h3 className="text-white font-bold font-display uppercase tracking-wider mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};