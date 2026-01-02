import React from 'react';
import { Section, SectionHeader } from '../components/UI';
import { Building2, ShoppingBag, Calendar, Briefcase } from 'lucide-react';

export const UseCases: React.FC = () => {
  const cases = [
    {
      title: "Corporate Offices",
      icon: <Building2 className="w-10 h-10 text-white" />,
      image: "https://i.ibb.co/SWnFy0s/Picture2.png",
      desc: "Transform your lobby into an innovation hub. VANTOM handles visitor check-ins, answers FAQs about the facility, and reinforces your brand's commitment to technology.",
      points: ["Visitor Management", "Employee Directory", "Brand Ambassadorship"]
    },
    {
      title: "Enterprise Operations",
      icon: <Briefcase className="w-10 h-10 text-white" />,
      image: "https://i.ibb.co/C3B9d17K/v2.png",
      desc: "An always-available interface for employees to access internal data, HR policies, or IT support tickets without typing.",
      points: ["HR Assistant", "IT Helpdesk Interface", "Internal Training"]
    },
    {
      title: "Flagship Retail",
      icon: <ShoppingBag className="w-10 h-10 text-white" />,
      image: "https://i.ibb.co/84z1jXPf/Gemini-Generated-Image-luq4szluq4szluq4.png",
      desc: "Create a stopping power moment. VANTOM explains complex products, offers comparisons, and guides customers through the purchase journey.",
      points: ["Product Education", "Wayfinding", "Interactive Catalog"]
    },
    {
      title: "Events & Exhibitions",
      icon: <Calendar className="w-10 h-10 text-white" />,
      image: "https://i.ibb.co/MD7TmMZ3/v3.png",
      desc: "Attract foot traffic with a glowing, talking holographic host that never gets tired of repeating the pitch or scanning badges.",
      points: ["Lead Generation", "Booth Navigation", "Schedule Info"]
    }
  ];

  return (
    <>
      <Section darker>
        <SectionHeader 
          title="Applications" 
          subtitle="VANTOM is built for environments where presence matters and static screens are ignored."
          centered
        />
        
        <div className="space-y-24">
          {cases.map((item, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="w-16 h-16 bg-vantom-accent/10 flex items-center justify-center rounded-full mb-6 border border-vantom-accent/20">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  {item.desc}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2 text-sm text-vantom-accent font-mono">
                      <span>//</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full h-64 md:h-96 glass-panel border border-white/5 relative overflow-hidden group rounded-xl">
                <div className="absolute inset-0 bg-gray-900 transition-transform duration-700 group-hover:scale-105">
                   <img 
                      src={item.image} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" 
                      alt={item.title}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};