import React from 'react';
import { Section, SectionHeader } from '../components/UI';

export const About: React.FC = () => {
  return (
    <>
      <Section darker>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">BUILT BY <span className="text-vantom-accent">OFF THE WALL</span></h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            We are a visual technology company based in Tripoli, Lebanon. For over a decade, we have been engineering light and pixels to create immersive experiences that stop people in their tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { name: "Mustafa Dasuki", role: "CEO", bio: "Computer Communication Engineer. Recognized as 'Most Pioneering Visual Technology CEO 2024'." },
            { name: "Wassim Yassin", role: "CTO", bio: "Product & UX Design expert leading the hardware and optical engineering of VANTOM." },
            { name: "Nivine Nehmane", role: "Marketing Director", bio: "MA in Graphic Design. Driving the aesthetic and brand vision of holographic interaction." }
          ].map((member, i) => (
             <div key={i} className="glass-panel p-6 border-t-2 border-vantom-accent">
               <h3 className="text-xl font-bold text-white">{member.name}</h3>
               <p className="text-vantom-accent text-sm uppercase tracking-wider mb-4">{member.role}</p>
               <p className="text-gray-400 text-sm">{member.bio}</p>
             </div>
          ))}
        </div>

        <div className="border border-white/10 p-8 md:p-12 rounded-lg bg-white/5">
          <h3 className="font-display text-2xl text-white mb-4">Our Track Record</h3>
          <p className="text-gray-400 mb-6">
            Off The Wall has delivered massive installations, including a 30-fan hologram setup for a major venue and collaborations with the United Nations, Nike, and Lacoste. VANTOM is the evolution of this expertise—moving from display to interaction.
          </p>
          <div className="flex gap-4">
             <div className="h-1 w-20 bg-vantom-accent"></div>
             <div className="h-1 w-10 bg-gray-600"></div>
          </div>
        </div>
      </Section>
    </>
  );
};