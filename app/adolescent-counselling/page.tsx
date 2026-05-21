import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Adolescent Counselling in South Africa | Islamic Psychology Therapy',
  description:
    'Confidential adolescent counselling using an Islamic integrated approach. Get support for identity, anxiety, peer pressure, and emotional growth. Book a session today.',
};

export default function AdolescentCounsellingPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative px-6 md:px-20 py-24 md:py-32 w-full mx-auto text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none -z-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-40"
        />
        <h1 className="font-serif text-5xl md:text-6xl mb-6 text-on-surface font-semibold tracking-tight">
          Adolescent Counselling in South Africa
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
          Support for teenagers navigating life's challenges through Islamically integrated therapy.
        </p>
        <Link href="/contact">
          <button className="bg-primary hover:bg-primary-container text-white px-8 py-3.5 rounded-sm font-semibold tracking-wider transition-all duration-300 shadow-md inline-flex items-center gap-2 group mb-6">
            Book an Appointment
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Link>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
      </section>

      {/* What is Adolescent Counselling */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h2 className="font-serif text-4xl mb-6 text-on-surface font-medium">
              What is Adolescent Counselling?
            </h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed text-lg">
              Adolescent counselling provides a safe, confidential space where teenagers can explore their emotions, identity, and challenges with a qualified therapist. Our approach combines evidence-based psychological therapy with Islamic spiritual wellness, offering a holistic path to healing and personal growth.
            </p>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              This service supports adolescents across South Africa seeking faith-aligned therapy. Whether dealing with anxiety, academic stress, peer pressure, or a desire for faith-based therapy framework, young people can find the supportive guidance they need.
            </p>
          </div>
          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-outline-variant/30 relative order-1 lg:order-2">
            <Image
              src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/saiiiw/services/Adolescent_Counsellings.jpeg"
              alt="Adolescent Islamic counselling and faith-based therapy session"
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
            Who Can Benefit From Adolescent Counselling
          </h2>
          <p className="text-on-surface-variant text-lg">
            Our adolescent therapy services in South Africa can provide relief and growth for a range of teenage struggles and developmental challenges.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {[
            'Anxiety and depression',
            'Academic stress and burnout',
            'Peer pressure and social issues',
            'Identity and self-esteem',
            'Family conflict and communication',
            'Behavioral concerns',
            'Trauma and difficult life transitions',
            'Spiritual and faith-related questions',
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
          We combine developmental psychology with Quran and Sunnah-guided wellness practices. As experts in Islamic psychology counselling, our therapists create a safe, non-judgmental space that honours youth experiences and values.
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
              <h3 className="font-semibold text-on-surface mb-2">Evidence-based therapeutic techniques</h3>
              <p className="text-on-surface-variant text-sm">Professional psychological methodologies tailored for adolescent development.</p>
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
              <h3 className="font-semibold text-on-surface mb-2">Faith-sensitive communication</h3>
              <p className="text-on-surface-variant text-sm">Integrating spiritual counselling insights in a relatable and supportive way.</p>
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
              <h3 className="font-semibold text-on-surface mb-2">Goal setting & emotional regulation</h3>
              <p className="text-on-surface-variant text-sm">Actionable steps toward resilience, self-understanding, and healthy coping mechanisms.</p>
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
              <h3 className="font-semibold text-on-surface mb-2">Quran & Sunnah based guidance</h3>
              <p className="text-on-surface-variant text-sm">When appropriate, guided by Islamic principles to anchor their spiritual and emotional growth.</p>
            </div>
          </div>
        </div>
        <p className="mt-12 text-sm text-on-surface-variant font-medium tracking-wide border-t border-outline-variant/20 pt-6 inline-block">
          All sessions are strictly confidential to ensure a safe space for youth.
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
              <h3 className="text-xl font-bold text-on-surface mb-4 relative z-10">Initial Intake</h3>
              <p className="text-on-surface-variant relative z-10">
                Understanding concerns in a welcoming environment, often involving both the adolescent and parents initially.
              </p>
            </div>
            <div className="bg-background rounded-3xl p-10 shadow-sm border border-outline-variant/20 relative overflow-hidden text-center">
              <div className="font-serif text-8xl absolute -top-4 -right-2 text-surface-variant/40 font-bold">2</div>
              <h3 className="text-xl font-bold text-on-surface mb-4 relative z-10">Personalized Plan</h3>
              <p className="text-on-surface-variant relative z-10">
                Collaboratively designing a therapy journey that is relatable and effective.
              </p>
            </div>
            <div className="bg-background rounded-3xl p-10 shadow-sm border border-outline-variant/20 relative overflow-hidden text-center">
              <div className="font-serif text-8xl absolute -top-4 -right-2 text-surface-variant/40 font-bold">3</div>
              <h3 className="text-xl font-bold text-on-surface mb-4 relative z-10">Ongoing Sessions</h3>
              <p className="text-on-surface-variant relative z-10">
                Regular direct sessions focused on emotional well-being, healing, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Paragraph */}
      <section className="py-24 px-6 md:px-20 max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-6 text-on-surface font-medium">
          Adolescent Counselling Services in South Africa
        </h2>
        <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
          We provide professional adolescent counselling services to youth across South Africa. Sessions are offered in a safe, confidential, and supportive environment designed to help teenagers navigate life's challenges with confidence and faith.
        </p>
        <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-24 md:py-32">
        <div className="px-6 md:px-20 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-white font-medium">
            Start the Healing Journey Today
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
