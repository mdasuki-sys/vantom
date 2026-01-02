import React from 'react';
import { Section, SectionHeader, Button } from '../components/UI';
import { Server, Shield, Lock, FileKey } from 'lucide-react';

export const Security: React.FC = () => {
  return (
    <>
      <Section darker>
        <SectionHeader 
          title="Enterprise Security" 
          subtitle="VANTOM is engineered for sensitive environments where data sovereignty is non-negotiable."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-6">
              <Server className="w-8 h-8 text-vantom-accent shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Flexible Deployment</h3>
                <p className="text-gray-400">
                  Choose between a fully managed private cloud or a complete on-premise installation. VANTOM can run on your internal network, ensuring no voice data leaves your facility.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <Shield className="w-8 h-8 text-vantom-accent shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Data Ownership</h3>
                <p className="text-gray-400">
                  You own the conversation logs and user interaction data. We provide APIs to ingest this data directly into your CRM or analytics platforms.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Lock className="w-8 h-8 text-vantom-accent shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Access Control</h3>
                <p className="text-gray-400">
                  VANTOM's administrative backend supports Role-Based Access Control (RBAC), ensuring only authorized personnel can modify the AI's knowledge base or character behavior.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-xl border border-white/5">
             <h3 className="font-display text-white mb-6 uppercase tracking-wider">Security FAQ</h3>
             <div className="space-y-6">
               <div className="border-b border-white/5 pb-4">
                 <p className="text-white font-medium mb-2">Is voice data stored?</p>
                 <p className="text-sm text-gray-500">By default, voice data is processed ephemerally. Storage is optional and controlled by your policy.</p>
               </div>
               <div className="border-b border-white/5 pb-4">
                 <p className="text-white font-medium mb-2">Can it connect to internal APIs?</p>
                 <p className="text-sm text-gray-500">Yes. VANTOM can securely hook into internal databases to retrieve real-time inventory, schedules, or personnel data.</p>
               </div>
               <div className="pt-4">
                 <Button variant="outline" to="/contact" className="w-full">Request Security Whitepaper</Button>
               </div>
             </div>
          </div>
        </div>
      </Section>
    </>
  );
};