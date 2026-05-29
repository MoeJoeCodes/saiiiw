import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shaakirah Dockrat Boda - SAIIIW',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ShaakirahBodaProfile() {
  return (
    <div className="w-full">
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern pointer-events-none opacity-5" />
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1 relative z-10">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">Executive Leadership & Wellness</span>
              <h1 className="font-serif text-5xl md:text-6xl text-on-surface font-semibold">Shaakirah Dockrat Boda</h1>
            </div>
            
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Bridging the gap between organizational excellence and spiritual wellbeing. A multidisciplinary leader dedicated to Islamically integrated wellness and professional development.
            </p>
              
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
              <div className="p-8 bg-surface-container-low rounded-2xl border-l-4 border-primary">
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">school</span>
                <h3 className="font-serif text-xl mb-3 font-medium">Academic Foundation</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Completed Masters research focusing on holistic frameworks that integrate spiritual values with modern psychological practices.</p>
              </div>
              <div className="p-8 bg-surface-container-low rounded-2xl border-l-4 border-primary">
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">leaderboard</span>
                <h3 className="font-serif text-xl mb-3 font-medium">Director Role</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Providing strategic direction at the South African Institute of Islamically Integrated Wellness, steering global initiatives.</p>
              </div>
              <div className="p-8 bg-surface-container-low rounded-2xl border-l-4 border-primary">
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">corporate_fare</span>
                <h3 className="font-serif text-xl mb-3 font-medium">OD Experience</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Extensive experience in Organizational Development, helping institutions foster cultures of integrity, purpose, and growth.</p>
              </div>
              <div className="p-8 bg-surface-container-low rounded-2xl border-l-4 border-primary">
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">groups</span>
                <h3 className="font-serif text-xl mb-3 font-medium">Recruitment Consulting</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Specialized talent acquisition strategies that align professional skills with organizational ethos and values.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full aspect-square max-w-[480px]">
              <div className="absolute -inset-4 bg-primary-container/10 rounded-[3rem] blur-2xl z-0" />
              <div className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-sm border border-outline-variant/30 h-full w-full relative z-10 flex flex-col items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-surface-container-high transition-colors duration-500 group-hover:bg-primary-container/10"></div>
                  <span className="font-serif text-8xl font-medium text-on-surface-variant opacity-20 relative z-10">SB</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-6 md:px-20 mb-24">
        <div className="relative rounded-3xl bg-primary overflow-hidden p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
          <div className="relative z-10 text-center md:text-left">
            <h2 className="font-serif text-4xl text-white mb-4 font-medium">Start Your Healing Journey</h2>
            <p className="text-lg text-white/80 max-w-lg">Take the first step towards a balanced life with personalized guidance that honors your spiritual path.</p>
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
