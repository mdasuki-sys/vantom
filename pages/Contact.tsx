import React, { useState } from 'react';
import { Section, SectionHeader, Button } from '../components/UI';
import { Check, Loader2 } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xzdzgprd', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormState('success');
        form.reset();
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <Section darker className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-lg glass-panel p-12 border border-vantom-accent">
          <div className="w-16 h-16 bg-vantom-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-vantom-accent">
            <Check className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-display text-white mb-4">
            Request Received
          </h2>
          <p className="text-gray-400 mb-8">
            Thank you for your interest in VANTOM. Our enterprise team will review your inquiry and contact you shortly.
          </p>
          <Button onClick={() => setFormState('idle')} variant="outline">
            Back to Home
          </Button>
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

        <form
          onSubmit={handleSubmit}
          className="space-y-6 glass-panel p-8 md:p-12 border border-white/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs uppercase tracking-wider text-gray-500">
                First Name
              </label>
              <input
                name="firstName"
                required
                type="text"
                className="w-full bg-black/50 border border-white/10 p-3 text-white"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-gray-500">
                Last Name
              </label>
              <input
                name="lastName"
                required
                type="text"
                className="w-full bg-black/50 border border-white/10 p-3 text-white"
              />
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider text-gray-500">
              Work Email
            </label>
            <input
              name="email"
              required
              type="email"
              className="w-full bg-black/50 border border-white/10 p-3 text-white"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider text-gray-500">
              Company / Organization
            </label>
            <input
              name="company"
              required
              type="text"
              className="w-full bg-black/50 border border-white/10 p-3 text-white"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider text-gray-500">
              Intended Use Case
            </label>
            <select
              name="useCase"
              className="w-full bg-black/50 border border-white/10 p-3 text-white"
            >
              <option>Corporate Office / Lobby</option>
              <option>Retail / Showroom</option>
              <option>Event / Exhibition</option>
              <option>Education / Healthcare</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider text-gray-500">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full bg-black/50 border border-white/10 p-3 text-white"
            />
          </div>

          {/* Helps identify the form in your inbox */}
          <input type="hidden" name="formName" value="VANTOM Demo Request" />

          {formState === 'error' && (
            <p className="text-red-400 text-sm">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            disabled={formState === 'submitting'}
            type="submit"
            className="w-full bg-vantom-accent text-black font-bold uppercase tracking-widest py-4 flex items-center justify-center gap-2"
          >
            {formState === 'submitting' ? (
              <Loader2 className="animate-spin" />
            ) : (
              'Submit Request'
            )}
          </button>
        </form>
      </div>
    </Section>
  );
};
