import React, { useState } from 'react';
import { Section, SectionHeader, Button } from '../components/UI';
import { Check, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  if (formState === 'success') {
    return (
      <Section darker className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-lg glass-panel p-12 border border-vantom-accent">
          <div className="w-16 h-16 bg-vantom-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-vantom-accent">
            <Check className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-display text-white mb-4">Request Received</h2>
          <p className="text-gray-400 mb-8">
            Thank you for your interest in VANTOM. Our enterprise team will review your inquiry and contact you shortly to schedule a demonstration.
          </p>
          <Button onClick={() => setFormState('idle')} variant="outline">Back to Home</Button>
        </div>
      </Section>
    );
  }

  return (
    <Section darker>
      <div className="max-w-3xl mx-auto">
        <SectionHeader 
          title="Request a Demo" 
          subtitle="See VANTOM in action. Tell us about your use case."
          centered
        />
        
        <form onSubmit={handleSubmit} className="space-y-6 glass-panel p-8 md:p-12 border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-gray-500">First Name</label>
              <input required type="text" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-vantom-accent focus:outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-gray-500">Last Name</label>
              <input required type="text" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-vantom-accent focus:outline-none transition-colors" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-gray-500">Work Email</label>
            <input required type="email" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-vantom-accent focus:outline-none transition-colors" />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-gray-500">Company / Organization</label>
            <input required type="text" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-vantom-accent focus:outline-none transition-colors" />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-gray-500">Intended Use Case</label>
            <select className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-vantom-accent focus:outline-none transition-colors">
              <option>Corporate Office / Lobby</option>
              <option>Retail / Showroom</option>
              <option>Event / Exhibition</option>
              <option>Education / Healthcare</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
             <label className="text-xs uppercase tracking-wider text-gray-500">Message</label>
             <textarea rows={4} className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-vantom-accent focus:outline-none transition-colors"></textarea>
          </div>

          <button 
            disabled={formState === 'submitting'}
            type="submit" 
            className="w-full bg-vantom-accent text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {formState === 'submitting' ? <Loader2 className="animate-spin" /> : 'Submit Request'}
          </button>
          
          <p className="text-xs text-center text-gray-600 mt-4">
            By submitting this form, you agree to receive communications from Off The Wall regarding VANTOM.
          </p>
        </form>
      </div>
    </Section>
  );
};