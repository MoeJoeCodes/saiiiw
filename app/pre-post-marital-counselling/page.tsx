import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pre & Post Marital Counselling in South Africa | Islamic Psychology Therapy',
  description:
    'Confidential pre and post marital counselling using an Islamic integrated approach. Get support for marriage preparation, managing expectations, and strengthening your partnership. Book a session today.',
};

export default function PrePostMaritalCounsellingPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative px-6 md:px-20 py-24 md:py-32 w-full mx-auto text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none -z-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-40"
        />
        <h1 className="font-serif text-5xl md:text-6xl mb-6 text-on-surface font-semibold tracking-tight">
          Pre & Post Marital Counselling in South Africa
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
          Support your relationship foundation before and after marriage through Islamically integrated therapy.
        </p>
        <Link href="/contact">
          <button className="bg-primary hover:bg-primary-container text-white px-8 py-3.5 rounded-sm font-semibold tracking-wider transition-all duration-300 shadow-md inline-flex items-center gap-2 group mb-6">
            Book an Appointment
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Link>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
      </section>

      {/* What is Pre & Post Marital Counselling */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h2 className="font-serif text-4xl mb-6 text-on-surface font-medium">
              What is Pre & Post Marital Counselling?
            </h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed text-lg">
              Pre and post marital counselling provides a supportive, confidential space where couples can explore their relationship dynamic, prepare for marriage, align expectations, and overcome early marital challenges with a qualified therapist. Our approach combines evidence-based psychological tools with Islamic spiritual wellness.
            </p>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              This service supports couples across South Africa seeking faith-aligned therapy and marital growth. Whether you are planning to get married or navigating the early years of your marriage, you can find the supportive path you are looking for together.
            </p>
          </div>
          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-outline-variant/30 relative order-1 lg:order-2">
            <Image
              src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/saiiiw/services/Pre_&_Post%20Marital_Counsellings.jpeg"
              alt="Pre and Post Marital Islamic counselling and faith-based therapy session"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 bg-surface px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl mb-6 text-on-surface font-medium">
            Who Can Benefit From Marital Counselling
          </h2>
          <p className="text-on-surface-variant text-lg">
            Our marital therapy services in South Africa can provide relief and growth for a range of relational struggles and couple transitions.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {[
            'Marriage preparation and alignment',
            'Managing expectations and roles',
            'Communication and conflict resolution tools',
            'Strengthening long-term partnership',
            'Navigating family integration',
            'Financial planning and shared goals',
            'Intimacy and emotional connection',
            'Aligning relationship with faith and values',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-background p-5 rounded-2xl border border-outline-variant/20 shadow-sm">
              <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
              <span className="text-on-surface font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 px-6 md:px-20 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl mb-6 text-on-surface font-medium">
          Our Islamically Integrated Approach
        </h2>
        <p className="text-on-surface-variant mb-12 leading-relaxed text-lg">
          We combine relationship psychology with Quran and Sunnah-guided wellness practices. As experts in Islamic psychology counselling, our therapists create a supportive space that honours your relationship goals and spiritual values.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-surface p-8 rounded-3xl border border-outline-variant/30 flex items-start gap-4 shadow-sm relative overflow-hidden group z-0">
            <div className="absolute top-0 bottom-0 left-0 w-32 -z-10 bg-surface transition-colors duration-500">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-30 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-surface/50 to-surface" />
            </div>
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary font-bold">01</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-semibold text-on-surface mb-2">Evidence-based relational techniques</h3>
              <p className="text-on-surface-variant text-sm">Professional psychological methodologies tailored for couple development and harmony.</p>
            </div>
          </div>
          
          <div className="bg-surface p-8 rounded-3xl border border-outline-variant/30 flex items-start gap-4 shadow-sm relative overflow-hidden group z-0">
            <div className="absolute top-0 bottom-0 left-0 w-32 -z-10 bg-surface transition-colors duration-500">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-30 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-surface/50 to-surface" />
            </div>
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary font-bold">02</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-semibold text-on-surface mb-2">Faith-sensitive communication tools</h3>
              <p className="text-on-surface-variant text-sm">Integrating spiritual counselling insights to foster deep understanding and respect.</p>
            </div>
          </div>
          
          <div className="bg-surface p-8 rounded-3xl border border-outline-variant/30 flex items-start gap-4 shadow-sm relative overflow-hidden group z-0">
            <div className="absolute top-0 bottom-0 left-0 w-32 -z-10 bg-surface transition-colors duration-500">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-30 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-surface/50 to-surface" />
            </div>
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary font-bold">03</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-semibold text-on-surface mb-2">Actionable marriage planning</h3>
              <p className="text-on-surface-variant text-sm">Structured steps toward marital resilience, clarity in roles, and reaching your potential together.</p>
            </div>
          </div>
          
          <div className="bg-surface p-8 rounded-3xl border border-outline-variant/30 flex items-start gap-4 shadow-sm relative overflow-hidden group z-0">
            <div className="absolute top-0 bottom-0 left-0 w-32 -z-10 bg-surface transition-colors duration-500">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-30 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-surface/50 to-surface" />
            </div>
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary font-bold">04</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-semibold text-on-surface mb-2">Values-aligned relationship growth</h3>
              <p className="text-on-surface-variant text-sm">Ensuring your relationship dynamics and decisions harmonise with core religious values.</p>
            </div>
          </div>
        </div>
        <p className="mt-12 text-sm text-on-surface-variant font-medium tracking-wide border-t border-outline-variant/20 pt-6 inline-block">
          All sessions are strictly confidential to ensure a safe space for couples.
        </p>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-surface px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4 text-on-surface font-medium">What Happens When You Book</h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-3xl p-10 shadow-sm border border-outline-variant/20 relative overflow-hidden text-center">
              <div className="font-serif text-8xl absolute -top-4 -right-2 text-surface-variant/40 font-bold">1</div>
              <h3 className="text-xl font-bold text-on-surface mb-4 relative z-10">Initial Consultation</h3>
              <p className="text-on-surface-variant relative z-10">
                Understanding your relationship history, current challenges, and marital aspirations.
              </p>
            </div>
            <div className="bg-background rounded-3xl p-10 shadow-sm border border-outline-variant/20 relative overflow-hidden text-center">
              <div className="font-serif text-8xl absolute -top-4 -right-2 text-surface-variant/40 font-bold">2</div>
              <h3 className="text-xl font-bold text-on-surface mb-4 relative z-10">Relationship Strategy</h3>
              <p className="text-on-surface-variant relative z-10">
                Collaboratively designing a personalized approach for your preparation or post-marital care.
              </p>
            </div>
            <div className="bg-background rounded-3xl p-10 shadow-sm border border-outline-variant/20 relative overflow-hidden text-center">
              <div className="font-serif text-8xl absolute -top-4 -right-2 text-surface-variant/40 font-bold">3</div>
              <h3 className="text-xl font-bold text-on-surface mb-4 relative z-10">Action & Review</h3>
              <p className="text-on-surface-variant relative z-10">
                Structured sessions to build communication, assess progress, and strengthen the bond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Paragraph */}
      <section className="py-24 px-6 md:px-20 max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-6 text-on-surface font-medium">
          Pre & Post Marital Counselling Services in South Africa
        </h2>
        <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
          We provide professional pre and post marital counselling services to clients across South Africa. Sessions are offered in a safe, confidential and supportive environment designed to help you build a strong foundation for your future together.
        </p>
        <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-24 md:py-32">
        <div className="px-6 md:px-20 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-white font-medium">
            Start Your Journey Together Today
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contact">
              <button className="bg-white text-primary px-10 py-4 rounded font-semibold text-sm hover:bg-surface transition-all duration-300 shadow-md active:scale-95 inline-flex items-center gap-2 group w-full sm:w-auto justify-center">
                Book Appointment
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-transparent border border-white/50 text-white px-10 py-4 rounded font-semibold text-sm hover:bg-white/10 transition-all duration-300 active:scale-95 w-full sm:w-auto justify-center">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
