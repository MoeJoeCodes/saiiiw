import { Mail, Phone, MapPin, Clock, ShieldCheck, Globe } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative px-6 md:px-20 py-24 md:py-32 w-full mx-auto text-center overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none -z-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-40" 
        />
        <h1 className="font-serif text-5xl md:text-6xl mb-6 text-on-surface font-semibold tracking-tight">Contact Us</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
          We are here to support your journey towards healing and wellbeing.
        </p>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5">
              <div className="bg-surface border border-outline-variant/50 p-8 md:p-12 rounded-2xl relative shadow-sm h-full group">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary-container transition-all duration-500 group-hover:h-1.5" />
                <h2 className="font-serif text-3xl text-on-surface mb-10 font-medium">Get in Touch</h2>
                
                <ul className="space-y-10">
                  <li className="flex items-start">
                    <Mail className="text-primary-container w-6 h-6 mr-5 mt-1 shrink-0" />
                    <div>
                      <span className="block text-xs font-semibold text-on-surface-variant mb-2 uppercase tracking-wide">Email</span>
                      <a href="mailto:info@saiiiw.co.za" className="text-on-surface hover:text-primary transition-colors text-lg">
                        info@saiiiw.co.za
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="text-primary-container w-6 h-6 mr-5 mt-1 shrink-0" />
                    <div>
                      <span className="block text-xs font-semibold text-on-surface-variant mb-2 uppercase tracking-wide">Phone / WhatsApp</span>
                      <div className="flex flex-col gap-1">
                        <a href="https://wa.me/+27829438460" target="_blank" rel="noopener noreferrer" className="text-on-surface hover:text-primary transition-colors text-lg">
                          +27 82 943 8460
                        </a>
                        <a href="https://wa.me/+27825898434" target="_blank" rel="noopener noreferrer" className="text-on-surface hover:text-primary transition-colors text-lg">
                          +27 82 589 8434
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="text-primary-container w-6 h-6 mr-5 mt-1 shrink-0" />
                    <div>
                      <span className="block text-xs font-semibold text-on-surface-variant mb-2 uppercase tracking-wide">Location</span>
                      <span className="text-on-surface text-lg block">South Africa</span>
                      <span className="text-on-surface-variant text-sm mt-1 block">(Online & Selected In-Person Sessions)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="text-primary-container w-6 h-6 mr-5 mt-1 shrink-0" />
                    <div>
                      <span className="block text-xs font-semibold text-on-surface-variant mb-2 uppercase tracking-wide">Consultation Hours</span>
                      <span className="text-on-surface text-lg block mb-1">Mon – Fri: 9:00 – 17:00</span>
                      <span className="text-on-surface text-lg block">Sat: By Appointment</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl border border-outline-variant/30 h-full shadow-sm">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-on-surface-variant mb-3 uppercase tracking-wide">Full Name</label>
                      <input 
                        type="text" 
                        id="fullName" 
                        placeholder="Jane Doe"
                        className="w-full bg-transparent border-b border-outline-variant pb-3 text-on-surface focus:outline-none focus:border-primary transition-colors px-0 placeholder:text-outline-variant/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-on-surface-variant mb-3 uppercase tracking-wide">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="jane@example.com"
                        className="w-full bg-transparent border-b border-outline-variant pb-3 text-on-surface focus:outline-none focus:border-primary transition-colors px-0 placeholder:text-outline-variant/50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-on-surface-variant mb-3 uppercase tracking-wide">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="+27 82 000 0000"
                      className="w-full bg-transparent border-b border-outline-variant pb-3 text-on-surface focus:outline-none focus:border-primary transition-colors px-0 placeholder:text-outline-variant/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-on-surface-variant mb-3 uppercase tracking-wide">Service Interested In</label>
                    <select 
                      id="service" 
                      className="w-full bg-transparent border-b border-outline-variant pb-3 text-on-surface focus:outline-none focus:border-primary transition-colors px-0 outline-none appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-outline-variant">Select a service</option>
                      <option value="individual">Individual Counselling</option>
                      <option value="couple">Couple Counselling</option>
                      <option value="adolescent">Adolescent Counselling</option>
                      <option value="family">Family Counselling</option>
                      <option value="career">Career Counselling</option>
                      <option value="pre-post-marital">Pre & Post Marital Counselling</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-on-surface-variant mb-3 uppercase tracking-wide">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      placeholder="How can we help you today?"
                      className="w-full bg-transparent border border-outline-variant p-4 rounded text-on-surface focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-outline-variant/50"
                    ></textarea>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pt-4">
                    <button type="button" className="bg-primary-container text-white px-8 py-3.5 rounded font-semibold text-sm hover:bg-primary transition-colors shadow-sm active:scale-95">
                      Send Message
                    </button>
                    <span className="text-sm font-medium text-on-surface-variant italic">
                      We aim to respond within 24–48 hours.
                    </span>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-surface-container-high px-6 md:px-20 border-t border-outline-variant/20">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <ShieldCheck className="text-primary-container w-12 h-12 mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-on-surface mb-6 font-medium">A Safe & Confidential Space</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            All communication is treated with the highest level of confidentiality and care. We understand that reaching out can be difficult, and we are here to support you every step of the way.
          </p>
        </div>
      </section>

      {/* Map/Global Section */}
      <section className="py-24 px-6 md:px-20 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="w-full h-[400px] bg-surface-container-lowest border border-outline-variant/30 rounded-3xl overflow-hidden relative shadow-sm flex items-center justify-center">
            <div className="absolute inset-0 bg-surface-container/30 flex items-center justify-center">
              <div className="text-center p-8 flex flex-col items-center">
                <Globe className="text-outline-variant w-16 h-16 mb-6 opacity-50" />
                <p className="text-xl text-on-surface-variant font-medium max-w-md mx-auto leading-relaxed">
                  Serving clients across South Africa & internationally<br/>
                  <span className="text-base font-normal mt-2 block">(online sessions available)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
