import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Juraida Latif - SAIIIW',
  robots: {
    index: false,
    follow: false,
  },
};

export default function JuraidaLatifProfile() {
  return (
    <div className="w-full">
      {/* Profile Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern pointer-events-none opacity-5" />
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1 relative z-10">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">Director & Lead Practitioner</span>
              <h1 className="font-serif text-5xl md:text-6xl text-on-surface font-semibold">Juraida Latif</h1>
            </div>
            
            <div className="flex flex-col gap-8 max-w-2xl">
              <p className="text-lg text-on-surface-variant italic border-l-2 border-primary-container pl-6 py-2">
                "Bridging the gap between contemporary psychology and spiritual well-being for a holistic path to healing."
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">school</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-on-surface font-medium">Academic Excellence</h3>
                    <p className="text-on-surface-variant mt-2 leading-relaxed">Holds a Masters degree in Industrial Psychology, specializing in human behavior and organizational wellness.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-on-surface font-medium">Registered Professional</h3>
                    <p className="text-on-surface-variant mt-2 leading-relaxed">Status as a registered Industrial Psychologist with the HPCSA, ensuring clinical authority and ethical standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">history_edu</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-on-surface font-medium">Extensive Experience</h3>
                    <p className="text-on-surface-variant mt-2 leading-relaxed">Over 13 years of dedicated experience in wellness, leadership development, and spiritual integration.</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/30 text-center">
                  <div className="text-primary font-serif mb-2 text-3xl">13+</div>
                  <div className="text-xs uppercase tracking-wider text-on-surface-variant font-semibold">Years Professional Practice</div>
                </div>
                <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/30 text-center">
                  <div className="text-primary font-serif mb-2 text-3xl">HPCSA</div>
                  <div className="text-xs uppercase tracking-wider text-on-surface-variant font-semibold">Registered Psychologist</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full aspect-[4/5] max-w-[480px]">
              <div className="absolute -inset-4 bg-primary-container/10 rounded-[3rem] blur-2xl z-0" />
              <div className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-sm border border-outline-variant/30 h-full w-full relative z-10 flex flex-col items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-surface-container-high transition-colors duration-500 group-hover:bg-primary-container/10"></div>
                  <span className="font-serif text-8xl font-medium text-on-surface-variant opacity-20 relative z-10">JL</span>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-surface-container-lowest p-6 rounded-2xl shadow-md border border-outline-variant/20 hidden md:block z-20">
                <span className="material-symbols-outlined text-primary text-3xl block mb-2">spa</span>
                <p className="text-sm font-semibold uppercase tracking-wide text-on-surface whitespace-nowrap">Integrated Wellness<br />Approach</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mb-24">
        <div className="relative rounded-3xl bg-primary overflow-hidden p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
          <div className="relative z-10 text-center md:text-left">
            <h2 className="font-serif text-4xl text-white mb-4 font-medium">Start Your Healing Journey</h2>
            <p className="text-lg text-white/80 max-w-lg">Begin a transformative process that honours your faith and addresses your mental health with professional clinical expertise.</p>
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
