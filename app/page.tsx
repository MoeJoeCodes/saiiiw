import Link from 'next/link';
import Image from 'next/image';
import { 
  Check, 
  Lock, 
  Star, 
  MapPin, 
  Mail, 
  Phone, 
  Flower, 
  Leaf, 
  Sun,
  Shield,
  Award,
  BookOpen,
  Activity,
  Heart,
  User,
  Users,
  Briefcase,
  Droplet,
  CheckCircle2,
  Clock,
  UserPlus,
  MoonStar
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full bg-background font-sans text-on-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-[95vh] pt-28 pb-32 overflow-hidden flex items-center border-b border-outline-variant/30"
      >
        {/* Hero Background Image - Desktop */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-right lg:bg-center bg-no-repeat hidden md:block"
          style={{ backgroundImage: "url('https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/saiiiw/images/hero.png')" }}
        />
        
        {/* Hero Background Image - Mobile */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{ backgroundImage: "url('https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/saiiiw/images/hero%20mobile.png')" }}
        />
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-30 mix-blend-multiply pointer-events-none" />
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="flex flex-col text-left max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] text-on-surface font-medium leading-[1.1] mb-6">
              Islamically Integrated Psychology &amp; Counselling
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl font-light mb-10 max-w-xl leading-relaxed">
              Faith-centred therapy rooted in the Qur'an and Sunnah, combined with evidence-based psychological care in South Africa and internationally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="bg-primary hover:bg-primary-container hover:text-on-primary-container text-on-primary px-8 py-3.5 rounded-sm text-sm font-semibold tracking-wider transition-all duration-300 shadow-md">
                  Book a Session
                </button>
              </Link>
              <Link href="/about">
                <button className="bg-surface border border-primary text-primary hover:bg-primary hover:text-on-primary px-8 py-3.5 rounded-sm text-sm font-semibold tracking-wider transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards (Overlapping Hero) */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <MoonStar className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />,
            title: 'Islamically Integrated\nWellness',
            desc: 'Bridging spiritual wisdom with psychological practices for profound healing.'
          },
          {
            icon: <Heart className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />,
            title: 'Holistic Therapy\nApproach',
            desc: 'Addressing the mind, body, and soul as interconnected aspects of well-being.'
          },
          {
            icon: <Star className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />,
            title: 'Spiritual Healing\nPioneer',
            desc: 'Leading the integration of Islamic principles into mental health care in South Africa.'
          }
        ].map((feature, i) => (
          <div key={i} className="bg-surface rounded-lg shadow-xl p-8 flex flex-col items-center text-center border border-outline-variant/30">
            {feature.icon}
            <h3 className="font-serif text-xl font-semibold mb-3 text-on-surface whitespace-pre-line">{feature.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Mission & Legacy */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="w-full max-w-[484px] aspect-square mx-auto lg:ml-auto lg:mr-0 rounded-2xl overflow-hidden relative shadow-2xl">
          <Image 
            src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/saiiiw/images/our%20mission.png" 
            alt="Our Mission" 
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-on-surface mb-6">Our Mission &amp; Legacy</h2>
          <p className="text-on-surface-variant mb-10 leading-relaxed">
            SAIIIW is dedicated to bridging the timeless wisdom of Islamic traditions with evidence-based psychological care. We provide a sanctuary for healing that honors both the mind and the soul.
          </p>
          
          <div className="pt-8 border-t border-outline-variant/50">
            <div className="flex gap-8 md:gap-12 flex-wrap">
              <div>
                <div className="text-3xl font-serif text-primary font-medium mb-2">17 Years</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold whitespace-pre-line leading-tight">Experience</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-primary font-medium mb-2">17 Years</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold whitespace-pre-line leading-tight">Sessions</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-primary font-medium mb-2">17 Years</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold whitespace-pre-line leading-tight">Workshops</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counselling Services */}
      <section className="pt-24 pb-16 bg-surface border-t border-outline-variant/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-on-surface mb-4">Counselling Services</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <User className="w-4 h-4 text-primary" strokeWidth={1.5} />, title: 'Individual' },
              { icon: <Heart className="w-4 h-4 text-primary" strokeWidth={1.5} />, title: 'Couple' },
              { icon: <Users className="w-4 h-4 text-primary" strokeWidth={1.5} />, title: 'Family' },
              { icon: <Briefcase className="w-4 h-4 text-primary" strokeWidth={1.5} />, title: 'Career Counselling' },
              { icon: <Flower className="w-4 h-4 text-primary" strokeWidth={1.5} />, title: 'Pre & Post Marital' }
            ].map((service, i) => (
              <div key={i} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-surface rounded-lg p-5 border border-outline-variant/50 flex items-center space-x-4 justify-start">
                <div className="shrink-0">{service.icon}</div>
                <h3 className="font-serif text-[17px] text-on-surface">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="w-full bg-surface flex justify-center py-4">
        <div className="w-16 h-[1px] bg-primary/30"></div>
      </div>

      {/* Issues We Work With */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-on-surface mb-12">Issues We Work With</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Anxiety', 'Personality problems', 'Addiction', 'Adjustment problems', 'Marital conflict',
              'Family conflict', 'Social phobias', 'PTSD', 'Obsessive Compulsive Disorder', 'Depression',
              'Trauma', 'Loss & Grief', 'Anger', 'Personal/Spiritual Growth', 'Work/Life Balance'
            ].map((issue, i) => (
              <span key={i} className="px-5 py-2.5 rounded-full border border-primary/30 text-[16px] text-on-surface-variant bg-surface-container-low">
                {issue}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="w-full bg-surface flex justify-center py-4">
        <div className="w-16 h-[1px] bg-primary/30"></div>
      </div>

      {/* Organisational Development & Workplace Wellbeing */}
      <section className="pt-16 pb-24 bg-surface border-b border-outline-variant/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="mb-14 flex flex-col items-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-on-surface mb-5">Organisational Development &amp; Workplace Wellbeing</h2>
            <p className="text-on-surface-variant text-[15px] max-w-2xl leading-relaxed">
              We partner with organisations to support healthier workplaces, stronger teams and sustainable performance through evidence-based organisational development and wellbeing initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Briefcase className="w-6 h-6 text-primary" strokeWidth={1.5} />,
                title: 'OD Diagnosis',
                desc: 'Assess organisational culture, leadership dynamics and workplace wellbeing to identify growth opportunities.'
              },
              {
                icon: <Activity className="w-6 h-6 text-primary" strokeWidth={1.5} />,
                title: 'OD Initiatives',
                desc: 'Design and implement tailored programmes that strengthen teams, leadership and workplace resilience.'
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 text-primary" strokeWidth={1.5} />,
                title: 'Assessments',
                desc: 'Evidence-based tools to support hiring, leadership development and team effectiveness.'
              }
            ].map((card, i) => (
              <div key={i} className="bg-surface rounded-xl p-8 md:p-10 border border-outline-variant/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full group">
                <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="font-serif text-[18px] text-on-surface mb-3">{card.title}</h3>
                <p className="text-on-surface-variant text-[14px] leading-relaxed flex-grow">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Wellness Services */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-on-surface mb-4">Integrated Wellness Services</h2>
            <p className="text-on-surface-variant text-[15px] max-w-3xl leading-relaxed">
              At our Islamic psychology practice, we collaborate with practitioners in fields such as Tibb, cupping therapy, Sunnah sports, and other Islamic holistic wellness disciplines. Based on our assessments, we may refer clients to these trusted practitioners where appropriate and beneficial to their overall well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Droplet className="w-6 h-6 text-primary" strokeWidth={1.5} />, title: 'Cupping' },
              { icon: <Leaf className="w-6 h-6 text-primary" strokeWidth={1.5} />, title: 'Tibb' },
              { icon: <Activity className="w-6 h-6 text-primary" strokeWidth={1.5} />, title: 'Sunnah Sports' },
              { icon: <BookOpen className="w-6 h-6 text-primary" strokeWidth={1.5} />, title: 'Ruqyah as-shariah' }
            ].map((service, i) => (
              <div key={i} className="bg-surface rounded-xl p-10 border border-outline-variant/30 shadow-sm flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="font-serif text-[17px] text-on-surface">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-on-surface mb-4">How It Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { num: '1', title: 'Intake Session', desc: 'An initial assessment to understand your unique needs and spiritual context.' },
              { num: '2', title: 'Exploratory Session', desc: 'Deep diving into your history and outlining a personalized therapeutic path.' },
              { num: '3', title: 'Therapy Journey', desc: 'Consistent, supportive sessions combining psychology with Islamic principles.' }
            ].map((step, i) => (
              <div key={i} className="bg-surface rounded-xl p-10 text-center shadow-sm border border-outline-variant/30 flex flex-col items-center">
                <div className="w-12 h-12 bg-primary rounded-full text-on-primary flex items-center justify-center font-serif text-xl mb-6 shadow-md">
                  {step.num}
                </div>
                <h3 className="font-serif text-lg font-medium text-on-surface mb-4">{step.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Strict Confidentiality */}
          <div className="bg-surface-container rounded-sm py-6 px-6 text-center max-w-3xl mx-auto flex flex-col items-center">
            <div className="flex items-center justify-center text-on-surface font-bold text-xs uppercase tracking-widest mb-3">
              <Lock className="w-3.5 h-3.5 mr-2 text-primary" />
              Strict Confidentiality
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">
              Your privacy is our utmost priority. All consultations and records are maintained with the strictest confidentiality in accordance with professional psychological standards and Islamic ethics.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-16 bg-surface border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-10">Proudly Affiliated With</h4>
          <div className="flex justify-center flex-wrap gap-8 md:gap-16 items-center">
            {[
              { src: 'https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/saiiiw/images/HOA-WebLogo-opt.png.webp', alt: 'HOA Logo' },
              { src: 'https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/saiiiw/images/iafp.svg', alt: 'IAFP Logo' },
              { src: 'https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/saiiiw/images/ISIP-LOGO-Original.png', alt: 'ISIP Logo' },
              { src: 'https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/saiiiw/images/Tibb-Logo.png', alt: 'Tibb Logo' }
            ].map((img, i) => (
               <div key={i} className="relative w-32 h-16 md:w-40 md:h-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <Image 
                    src={img.src} 
                    alt={img.alt} 
                    fill 
                    className="object-contain" 
                    referrerPolicy="no-referrer"
                  />
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Experiences */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-on-surface mb-4">Client Experiences</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: '"The integration of my faith into therapy made all the difference. I felt truly understood without having to explain my spiritual worldview."', author: 'Anonymous Client' },
              { quote: '"A safe, welcoming space. The counselors are deeply knowledgeable in both psychology and Islamic principles. Highly recommended."', author: 'Community Member' },
              { quote: '"Their workshops transformed our organization\'s approach to mental health. The holistic perspective is unmatched."', author: 'Corporate Partner' }
            ].map((test, i) => (
              <div key={i} className="bg-surface rounded-xl p-8 border border-outline-variant/30 shadow-sm flex flex-col">
                <div className="flex text-primary mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current mr-1" />)}
                </div>
                <p className="text-on-surface-variant text-[15px] leading-relaxed italic mb-8 flex-grow">
                  {test.quote}
                </p>
                <div className="text-[13px] font-bold text-on-surface">— {test.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Published Authors */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-on-surface mb-4">Published Authors</h2>
            <div className="w-16 h-1 bg-primary rounded-full mt-2"></div>
          </div>
          
          <div className="bg-surface rounded-2xl overflow-hidden shadow-lg border border-outline-variant/30 flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 p-8 md:p-10 bg-surface-variant/30 flex items-center justify-center relative min-h-[350px]">
              <div className="relative w-[180px] h-[260px] md:w-[220px] md:h-[320px] shadow-2xl transition-transform duration-500 hover:scale-105">
                <Image 
                  src="https://images.routledge.com/common/jackets/crclarge/978103238/9781032383941.jpg" 
                  alt="Integrating Spiritual Interventions in Islamic Psychology: A Practical Guide" 
                  fill 
                  className="object-cover rounded-sm border border-outline-variant/50" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="p-10 md:p-12 md:w-3/5 flex flex-col justify-center">
              <h3 className="font-serif text-2xl md:text-3xl mb-4 text-on-surface font-medium leading-snug">Integrating Spiritual Interventions in Islamic Psychology:<br />A Practical Guide</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                This book provides Islāmic psychology practitioners a framework on integrating evidence-based approaches of spiritual interventions based on Islāmic jurisprudence (Shari'ah with therapy). Covering both the theoretical and theological underpinnings of religious coping from an Islāmic perspective while also serving as a practical guide, this text delivers an integrative approach which can be used in psychotherapy to ensure a more holistic process of healing and well-being.
              </p>
              <div>
                <Link href="https://www.routledge.com/Integrating-Spiritual-Interventions-in-Islamic-Psychology-A-Practical-Guide/Latif-Dockrat-Rassool/p/book/9781032383941" target="_blank" rel="noopener noreferrer">
                  <button className="bg-primary hover:bg-primary-container hover:text-on-primary-container text-on-primary px-8 py-3.5 rounded-sm text-sm font-semibold tracking-wider transition-all duration-300 shadow-md inline-flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-current" /> Buy on Routledge
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-surface pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#2b2a26] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            {/* Left side info */}
            <div className="p-10 md:p-12 md:w-5/12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-outline-variant/10">
              <h2 className="font-serif text-[28px] text-white font-medium mb-4 leading-[1.2]">Starting Your Healing Journey</h2>
              <p className="text-[#b7b7b7] text-[14px] leading-relaxed mb-10 font-light">
                Reach out to us to schedule your first session or inquire about our specialized services. Our team is ready to support you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-4 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-on-primary text-sm font-light">Johannesburg, South Africa</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-4 shrink-0" strokeWidth={1.5} />
                  <span className="text-on-primary text-sm font-light">info@saiiiw.co.za</span>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mr-4 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div className="flex flex-col gap-1">
                    <a href="https://wa.me/+27829438460" target="_blank" rel="noopener noreferrer" className="text-on-primary hover:text-primary-container transition-colors text-sm font-light">+27 82 943 8460</a>
                    <a href="https://wa.me/+27825898434" target="_blank" rel="noopener noreferrer" className="text-on-primary hover:text-primary-container transition-colors text-sm font-light">+27 82 589 8434</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side form */}
            <div className="bg-surface p-10 md:p-12 md:w-7/12">
              <form className="space-y-5">
                <div>
                  <label className="block text-[13px] text-on-surface-variant mb-2">Name</label>
                  <input type="text" placeholder="Your full name" className="w-full border border-outline-variant/50 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-[13px] text-on-surface-variant mb-2">Email</label>
                  <input type="email" placeholder="Your email address" className="w-full border border-outline-variant/50 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-[13px] text-on-surface-variant mb-2">Phone</label>
                  <input type="tel" placeholder="Your phone number" className="w-full border border-outline-variant/50 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-[13px] text-on-surface-variant mb-2">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full border border-outline-variant/50 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"></textarea>
                </div>
                <button type="button" className="w-full bg-primary hover:bg-primary-container text-on-primary py-3.5 rounded text-sm font-semibold tracking-wide transition-colors mt-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
