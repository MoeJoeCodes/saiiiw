import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const SERVICES = [
  {
    category: "Therapy",
    title: "Individual Counselling",
    description: "A safe, confidential space to explore your thoughts, emotions and personal challenges with professional support.",
    bullets: ["Anxiety and stress management", "Emotional wellbeing", "Personal growth and self-awareness", "Coping with life transitions"],
    image: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/saiiiw/services/individual_counsellings.jpeg"
  },
  {
    category: "Relationships",
    title: "Couples Counselling",
    description: "Helping couples strengthen communication, rebuild trust and deepen emotional connection through specialized guidance.",
    bullets: ["Communication skills & conflict resolution", "Trust rebuilding & emotional intimacy", "Relationship growth & alignment"],
    image: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/saiiiw/services/Career_Counsellingsss.jpeg"
  },
  {
    category: "Youth Support",
    title: "Adolescent Counselling",
    description: "Providing young people with guidance, emotional support and tools to navigate life’s challenges in an ever-changing world.",
    bullets: ["School and social pressures", "Identity and self-confidence", "Emotional regulation & stress support"],
    image: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/saiiiw/services/Adolescent_Counsellings.jpeg"
  },
  {
    category: "Harmony",
    title: "Family Counselling",
    description: "Supporting families in improving communication, understanding and harmony at home through structured clinical intervention.",
    bullets: ["Family communication & dynamics", "Parenting challenges & support", "Strengthening bonds & resolution"],
    image: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/saiiiw/images/Family_Counsellingss.jpeg"
  },
  {
    category: "Professional Growth",
    title: "Career Counselling",
    description: "Helping you gain clarity, confidence and direction in your professional journey with actionable planning.",
    bullets: ["Decision making support", "Workplace stress & balance", "Goal setting & strengths discovery"],
    image: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/saiiiw/services/Career_Counsellingss.jpeg"
  },
  {
    category: "Foundations",
    title: "Pre & Post Marital Counselling",
    description: "Supporting couples before and after marriage to build a strong, lasting foundation rooted in mutual respect.",
    bullets: ["Marriage preparation & alignment", "Managing expectations & tools", "Strengthening long-term partnership"],
    image: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/saiiiw/services/Pre_&_Post%20Marital_Counsellings.jpeg"
  }
];

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative px-6 md:px-20 py-24 md:py-32 w-full mx-auto text-center overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none -z-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-40" 
        />
        <h1 className="font-serif text-5xl md:text-6xl mb-6 text-on-surface font-semibold tracking-tight">Services</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
          Supporting individuals, couples and families through life’s challenges with compassion, clarity and professional guidance.
        </p>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </section>

      {/* Service List */}
      <section className="space-y-32 pb-32">
        {SERVICES.map((srv, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={srv.title} className="px-6 md:px-20 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className={`flex flex-col justify-center ${isEven ? 'order-2 lg:order-1' : 'order-2'}`}>
                  <span className="text-xs text-primary uppercase tracking-[0.2em] font-semibold mb-4 block">{srv.category}</span>
                  <h2 className="font-serif text-4xl mb-6 text-on-surface font-medium">{srv.title}</h2>
                  <p className="text-on-surface-variant mb-8 leading-relaxed text-lg">
                    {srv.description}
                  </p>
                  <ul className="space-y-4">
                    {srv.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-4">
                        <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                        <span className="text-on-surface">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-outline-variant/30 relative ${isEven ? 'order-1 lg:order-2' : 'order-1'}`}>
                  <Image 
                    src={srv.image} 
                    alt={srv.title} 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 md:py-32">
        <div className="px-6 md:px-20 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white font-medium">Ready to begin your journey?</h2>
          <p className="text-lg text-white/90 mb-12 max-w-xl mx-auto leading-relaxed">
            Reach out today to book a confidential session with our qualified professionals.
          </p>
          <Link href="/contact">
            <button className="bg-white text-primary px-10 py-4 rounded font-semibold text-sm hover:bg-surface transition-all duration-300 shadow-md active:scale-95 inline-flex items-center gap-2 group">
              Book a Session
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
