import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Umme Muhammed - SAIIIW',
  robots: {
    index: false,
    follow: false,
  },
};

export default function UmmeMuhammedProfile() {
  return (
    <div className="w-full">
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-8 order-2 lg:order-1 relative z-10">
            <div className="absolute -top-12 -left-12 islamic-pattern w-64 h-64 -z-10 opacity-20" />
            
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">About the Founder</span>
              <h1 className="font-serif text-5xl md:text-7xl text-on-surface font-medium leading-tight">Umme Muhammed</h1>
              <p className="font-serif text-3xl text-primary-container italic mt-2">The Millennial Muslimah</p>
            </div>
            
            <div className="space-y-8 max-w-xl">
              <p className="text-lg text-on-surface-variant leading-relaxed">
                As a dedicated life coach and wellness advocate, Umme Muhammed integrates traditional Islamic wisdom with modern psychological practices. Her journey, known as "The Millennial Muslimah," focuses on empowering women to navigate the complexities of modern life while staying anchored in their faith.
              </p>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">psychology</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-on-surface font-medium mb-2">Life Coaching Experience</h3>
                    <p className="text-on-surface-variant leading-relaxed text-sm">Over a decade of guiding individuals through transformative healing and self-discovery.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">groups</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-on-surface font-medium mb-2">Women's Support Groups</h3>
                    <p className="text-on-surface-variant leading-relaxed text-sm">Fostering safe, sisterhood-driven spaces for collective growth and emotional resilience.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <button className="bg-primary-container text-white px-8 py-4 rounded text-sm font-semibold hover:bg-primary transition-all shadow-sm inline-flex items-center gap-2 group">
                Explore My Work
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full aspect-square max-w-[580px]">
              <div className="absolute inset-0 bg-primary-container/10 rounded-[3rem] rotate-3 -z-10 scale-105" />
              <div className="bg-surface-container-lowest rounded-[3rem] p-6 shadow-sm border border-outline-variant/30 h-full w-full relative z-10 flex flex-col items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-surface-container-high transition-colors duration-500 group-hover:bg-primary-container/10"></div>
                  <span className="font-serif text-9xl font-medium text-on-surface-variant opacity-20 relative z-10">UM</span>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-md border border-outline-variant/30 flex items-center gap-4 hidden md:flex z-20">
                <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-on-surface">Certified Holistic Coach</p>
                  <p className="text-sm text-on-surface-variant mt-1">Empowering the Ummah</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-6 md:px-20 mb-24">
        <div className="bg-primary rounded-[2.5rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
          <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
          <div className="relative z-10 max-w-xl text-left space-y-6">
            <h2 className="font-serif text-4xl text-white font-medium">Start Your Healing Journey</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Every transformation begins with a single step. Join a community of women dedicated to spiritual wellness and emotional clarity under the guidance of Umme Muhammed.
            </p>
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
