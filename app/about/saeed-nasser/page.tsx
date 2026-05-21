import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Saeed Nasser - SAIIIW',
};

export default function SaeedNasserProfile() {
  return (
    <div className="w-full">
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 relative z-10">
            <div className="absolute -top-10 -left-10 w-40 h-40 islamic-pattern rounded-full pointer-events-none opacity-20" />
            
            <div className="space-y-4">
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em] block">Lead Practitioner</span>
              <h1 className="font-serif text-5xl md:text-7xl text-on-surface font-medium">Saeed Nasser</h1>
              <p className="font-serif text-2xl md:text-3xl text-on-surface-variant max-w-2xl leading-relaxed mt-4">
                Qualified Integrative Counsellor & Clinical Supervisor based in the United Kingdom.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">verified_user</span>
                  <span className="text-xs font-semibold uppercase tracking-wide">UK Accredited</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  Clinical supervision expertise focusing on professional standards and ethical practice within the mental health sector.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">psychology</span>
                  <span className="text-xs font-semibold uppercase tracking-wide">Person-Centred</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  An empathetic approach that places the individual's lived experience at the core of the therapeutic journey.
                </p>
              </div>
            </div>
            
            <div className="bg-surface-container-low p-8 rounded-2xl shadow-sm border-l-4 border-primary mt-10">
              <p className="font-serif text-xl text-on-surface italic leading-relaxed">
                "My practice is rooted in the belief that every individual possesses the innate capacity for growth and healing when provided with a safe, non-judgmental, and culturally sensitive environment."
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-sm bg-surface-container-highest flex items-center justify-center p-8 group">
              <div className="absolute inset-0 bg-surface-container-high transition-colors duration-500 group-hover:bg-primary-container/10"></div>
              <span className="font-serif text-9xl font-medium text-on-surface-variant opacity-20 relative z-10">SN</span>
              <div className="absolute inset-0 border-[16px] border-surface/50 pointer-events-none z-20" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-container/20 rounded-full blur-3xl -z-10" />
          </div>
          
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-6 md:px-20 mb-24">
        <div className="relative rounded-3xl bg-primary overflow-hidden p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
          <div className="relative z-10 text-center md:text-left">
            <h2 className="font-serif text-4xl text-white mb-4 font-medium">Start Your Healing Journey</h2>
            <p className="text-lg text-white/80 max-w-lg leading-relaxed">Take the first step towards emotional wellness with a confidential, person-centred approach tailored to your unique spiritual and cultural needs.</p>
          </div>
          <div className="relative z-10">
            <Link href="/contact">
              <button className="bg-white text-primary px-8 py-4 rounded text-sm font-semibold hover:bg-surface transition-all active:scale-95 shadow-sm inline-flex items-center gap-2">
                Book a Session
                <span className="material-symbols-outlined">calendar_today</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
