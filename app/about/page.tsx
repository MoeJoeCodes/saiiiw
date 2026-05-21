import { ClipboardList, Building2, Heart } from 'lucide-react';
import Link from 'next/link';

const TEAM = [
  { name: 'Juraida Latif', role: 'Organisational Psychologist and Islamic Psychology Practitioner', initials: 'JL', slug: 'juraida-latif' },
  { name: 'Shaakirah Dockrat Boda', role: 'Organisational Psychologist and Islamic Psychology Practitioner', initials: 'SB', slug: 'shaakirah-dockrat-boda' },
  { name: 'Umme Muhammed', role: 'Counsellor', initials: 'UM', slug: 'umme-muhammed' },
  { name: 'Saeed Nasser', role: 'Integrated Consultant', initials: 'SN', slug: 'saeed-nasser' },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative px-6 md:px-20 py-24 md:py-32 w-full mx-auto text-center overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none -z-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-40" 
        />
        <h1 className="font-serif text-5xl md:text-6xl mb-6 text-on-surface font-semibold tracking-tight">Meet Our Team</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
          Experienced practitioners dedicated to Islamically integrated psychological wellness. We combine clinical expertise with spiritual wisdom to support your healing journey.
        </p>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </section>

      {/* Team Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="group bg-surface-container-lowest rounded-3xl p-6 shadow-sm border border-outline-variant/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-md flex flex-col">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-surface-container-high flex flex-col items-center justify-center text-on-surface-variant group-hover:bg-primary-container/20 group-hover:text-primary transition-colors duration-500 shrink-0 relative">
                    {/* Placeholder for portraits */}
                    <span className="font-serif text-5xl font-medium opacity-50 z-10">{member.initials}</span>
                </div>
                <div className="space-y-1 mb-8 flex-1">
                  <h3 className="font-serif text-2xl text-on-surface leading-tight font-medium">{member.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-surface-container py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-on-surface mb-4 font-medium">Our Commitment</h2>
            <div className="h-1 w-20 bg-primary-container mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center flex flex-col items-center">
              <ClipboardList className="text-primary w-12 h-12 mb-4" />
              <h4 className="font-serif text-xl mb-3 font-medium">Clinical Excellence</h4>
              <p className="text-on-surface-variant leading-relaxed">Combining modern psychological frameworks with evidence-based practices.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <Building2 className="text-primary w-12 h-12 mb-4" />
              <h4 className="font-serif text-xl mb-3 font-medium">Spiritual Integrity</h4>
              <p className="text-on-surface-variant leading-relaxed">Ensuring all wellness strategies align with Islamic values and traditions.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <Heart className="text-primary w-12 h-12 mb-4" />
              <h4 className="font-serif text-xl mb-3 font-medium">Compassionate Care</h4>
              <p className="text-on-surface-variant leading-relaxed">Providing a safe, empathetic space for deep healing and personal growth.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
