import { ClipboardList, Building2, Heart } from 'lucide-react';
import Link from 'next/link';
import { TeamMemberCard } from '@/components/TeamMemberCard';

const TEAM = [
  { 
    name: 'Juraida Latif', 
    role: 'Organisational Psychologist and Islamic Psychology Practitioner', 
    initials: 'JL', 
    slug: 'juraida-latif',
    bio: 'Holds a Masters Degree in Industrial Psychology from the University of the Witwatersrand. Juraida is the director of The South African Institute of Islamically Integrated Wellness, an organisation created to advance the adoption, education and practice of Islamic Psychology Counselling and Psychotherapy as well as overall wellness adopting Quranic and Sunnah/Prophetic based methods and applications such as Tibb, Hijama, Ruqya-Ash-Shariah and sunnah sports etc. She is also the founder of Dar-Al-Shifaa Consulting and Counselling. She is a qualified and registered Industrial Psychologist with the (HPCSA) and a trained and practicing Islamic Psychology Practitioner having completed courses in Istanbul (Turkey) and Cambridge (UK). She is registered as an Associate Fellow with the International Association of Islamic Psychology (IAIP). She has over 13 years of consulting and counselling experience working with mostly Muslim clients on a wide range of issues and incorporates Ruqya-ash-Shariah and Sunnah based wellness interventions into therapeutic practice as and when required following a Quraan and Sunnah based approach. She has co-developed manuals and co-presents pre and post marital workshops from an Islamic Psychology perspective. Juraida also has 9 years of experience as a pre and post graduate lecturer.'
  },
  { 
    name: 'Shaakirah Dockrat Boda', 
    role: 'Organisational Psychologist and Islamic Psychology Practitioner', 
    initials: 'SB', 
    slug: 'shaakirah-dockrat-boda',
    bio: 'Holds a Masters Degree from the University of the Witwatersrand and is the Director of The South African Institute of Islamically Integrated Wellness, an organisation created to advance the adoption, education and practice of Islamic Psychology Counselling and Psychotherapy as well as overall wellness adopting Quranic and Sunnah/Prophetic based methods and applications such as tibb, hijama, ruqya and sunnah sports etc. and is the founder of Nahwa Consulting and Counselling. She is a qualified and registered Industrial Psychologist with the (HPCSA) and a practicing Islamic Psychology Practitioner having completed courses in Istanbul (Turkey) and Cambridge (UK). She is registered as an Associate Fellow with the International Association of Islamic Psychology (IAIP). She has organisational development experience having worked in the pharmaceutical industry and has done consulting work and assessments for various organisations in the legal, mining and healthcare sectors in South Africa as well job readiness coaching and local and international recruitment. She has over 16 years’ experience working with mostly Muslim clients on a wide range of therapeutic issues and has co-developed manuals and co-presents pre and post marital workshops from an Islamic Psychology perspective.'
  },
  { 
    name: 'Umme Muhammed', 
    role: 'Counsellor', 
    initials: 'UM', 
    slug: 'umme-muhammed',
    bio: 'Umme Muhammed is the founder of The Millennial Muslimah, an educational platform for women. She is a life coach with over a decade of experience who has also trained in traditional Islamic Psychology and counseling. She believes that education is the best way for women to be empowered and runs support groups for women with depression and anxiety.\n\nAs foreign and toxic ideologies continue to infiltrate Islamic coaching and counseling, she is passionate about promoting ethical coaching practices and providing support for those keen on practicing the discipline in alignment with correct Islamic Aqeedah.'
  },
  { 
    name: 'Saeed Nasser', 
    role: 'Integrated Consultant', 
    initials: 'SN', 
    slug: 'saeed-nasser',
    bio: 'Is a qualified integrative counsellor and a clinical supervisor based in the United Kingdom with proven experience supporting clients and supervisees in a variety of settings. He is committed to delivering client-centered counselling and supervision that supports the empowerment of individuals, couples and families to enable them to grow, make informed choices and fulfill their potential. His areas of expertise are person centered therapy, couple counselling, bereavement counselling and promoting a faith based and culturally sensitive approach to counselling and supervision. He is a registered member of the British Association for Counselling and Psychotherapy (BACP) and a fellow member of the International Association for Islamic Psychology (IAIP). He also delivers lectures on IAIP courses on Islamic ethics. Saeed has also trained with IAIP in Islamic counselling and psychotherapy, he is also an Arabic interpreter and translator. He has studied Arabic and Islamic studies and works as a volunteer imam in his local masjid leading prayers and delivering Friday Khutbah’s as well as lectures and parenting classes.'
  },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {TEAM.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
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
