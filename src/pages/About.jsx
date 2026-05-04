import React from 'react'
import { Link } from 'react-router-dom'
import { Award, Users, Globe, Heart, MapPin, Target, Eye, Zap, ArrowRight, CheckCircle } from 'lucide-react'
import VideoBackground from '../components/VideoBackground'
import { AnimatedSection, CounterNumber } from '../components/AnimatedSection'

const values = [
  { icon: Heart, title: 'Driver-First Culture', desc: 'We treat every driver as a partner, not a number. Your success is our success, and we fight every day to maximize your earnings.' },
  { icon: Award, title: 'Integrity & Transparency', desc: 'No hidden fees, no broken promises. We operate with complete transparency in every load, rate, and relationship.' },
  { icon: Zap, title: 'Relentless Efficiency', desc: 'We move fast because we know time is money in trucking. Quick dispatch, fast paperwork, zero delays.' },
  { icon: Globe, title: 'American Excellence', desc: 'Proudly based in Barron, WI — built to serve the American trucking industry with homegrown dedication.' },
]

const team = [
  {
    name: 'Abdullahi Abdi Omar',
    role: 'Owner & Chief Dispatcher',
    phone: '605-290-2115',
    bio: 'Founder of IJARA Transportation LLC with deep roots in the American freight industry. Abdullahi built IJARA with a vision to provide owner-operators with honest, profitable dispatch services that put drivers first.',
    initials: 'AA',
  },
  {
    name: 'Zain Haider',
    role: 'Operational Manager',
    phone: '651-780-7965',
    bio: 'Leading day-to-day operational excellence at IJARA, our Operations Manager ensures every load is dispatched with precision, every driver is supported, and every client receives the highest standard of service.',
    initials: 'ZH',
  },
]

const milestones = [
  { year: '2019', title: 'IJARA Founded', desc: 'Established in Barron, WI with a mission to serve American truck drivers.' },
  { year: '2020', title: 'Expanded Network', desc: 'Grew our carrier network across 30+ states despite challenging market conditions.' },
  { year: '2021', title: 'All 48 States', desc: 'Achieved full continental US coverage with a robust carrier and broker network.' },
  { year: '2023', title: '10,000+ Loads', desc: 'Milestone achievement of 10,000+ successfully dispatched loads.' },
  { year: '2025', title: 'Industry Leader', desc: 'Recognized as a top independent dispatch agency in the Midwest.' },
]

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="relative py-32 overflow-hidden">
        <VideoBackground overlayIntensity={0.75} />
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="scanline"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="section-subtitle mb-4">— Our Story —</p>
            <h1 className="section-title">
              <span className="text-white">About </span>
              <span className="shimmer-text">IJARA</span>
              <br />
              <span className="text-white">Transportation</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-brand-steel text-xl leading-relaxed">
              Born on the roads of America, built by truckers for truckers. IJARA Transportation LLC is the dispatch partner that puts you first.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #050A14)' }}></div>
      </section>

      {/* Story Section */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15"></div>
        <div className="absolute left-0 top-0 w-1/2 h-full opacity-5">
          <div className="w-full h-full" style={{ background: 'radial-gradient(ellipse at left, #1A6BCC 0%, transparent 70%)' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="section-subtitle mb-4">— Who We Are —</p>
              <h2 className="section-title text-white mb-6">
                Driven By <span className="shimmer-text">Purpose</span>
              </h2>
              <div className="space-y-5 text-brand-steel leading-relaxed">
                <p>
                  IJARA Transportation LLC was founded with one clear goal: to give American truck drivers the professional dispatch partner they deserve. Based in <span className="text-brand-silver font-semibold">Barron, Wisconsin</span>, we understand the backbone of this nation runs on trucking.
                </p>
                <p>
                  Our team of experienced dispatchers works around the clock to source premium loads, negotiate competitive rates, and handle all the paperwork that slows you down — so you can focus on what you do best: driving.
                </p>
                <p>
                  We serve owner-operators, small fleets, and large carrier companies across all 48 continental states. Whether you run dry van, flatbed, reefer, or hot shot — we have the connections and expertise to keep your truck profitable.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3 p-4 border border-brand-blue/30 bg-brand-blue/5">
                <MapPin size={20} className="text-brand-blue flex-shrink-0" />
                <div>
                  <p className="font-heading font-bold text-white">Headquarters</p>
                  <p className="text-brand-steel text-sm">218 W Division Ave Apt #9, Barron, WI 54812 🇺🇸</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { target: 48, suffix: '', label: 'States Served' },
                  { target: 10000, suffix: '+', label: 'Loads Dispatched' },
                  { target: 98, suffix: '%', label: 'On-Time Rate' },
                  { target: 24, suffix: '/7', label: 'Hours Active' },
                ].map((s, i) => (
                  <div key={i} className="card-glow p-6 text-center">
                    <CounterNumber target={s.target} suffix={s.suffix} />
                    <p className="mt-2 font-mono text-brand-steel/60 text-xs tracking-widest uppercase">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 card-glow p-6">
                <h4 className="font-heading font-bold text-white text-xl mb-4 flex items-center gap-2">
                  <Target size={18} className="text-brand-blue" />
                  Our Mission
                </h4>
                <p className="text-brand-steel leading-relaxed">
                  To maximize the earnings and reduce the operational burden of every carrier we partner with, through honest dispatching, competitive load negotiation, and unwavering 24/7 support.
                </p>
              </div>

              <div className="mt-4 card-glow p-6">
                <h4 className="font-heading font-bold text-white text-xl mb-4 flex items-center gap-2">
                  <Eye size={18} className="text-brand-blue" />
                  Our Vision
                </h4>
                <p className="text-brand-steel leading-relaxed">
                  To be the most trusted and driver-preferred dispatch company in the United States — known for integrity, results, and putting people before profit.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 overflow-hidden">
        <VideoBackground overlayIntensity={0.87} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="section-subtitle mb-3">— What Drives Us —</p>
            <h2 className="section-title text-white">Our Core <span className="shimmer-text">Values</span></h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 120}>
                <div className="card-glow p-8 h-full group text-center">
                  <div className="service-icon mx-auto mb-6">
                    <v.icon size={26} />
                  </div>
                  <h3 className="font-heading font-bold text-white text-xl mb-3 group-hover:text-brand-lightblue transition-colors">{v.title}</h3>
                  <p className="text-brand-steel text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #050A14)' }}></div>
      </section>

      {/* Team */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="section-subtitle mb-3">— Leadership —</p>
            <h2 className="section-title text-white">Meet The <span className="shimmer-text">Team</span></h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <AnimatedSection key={i} delay={i * 200}>
                <div className="card-glow p-8 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5"
                    style={{ background: 'radial-gradient(circle, #1A6BCC 0%, transparent 70%)' }}
                  ></div>
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 flex items-center justify-center flex-shrink-0 font-heading font-black text-2xl text-white border border-brand-blue/40 group-hover:border-brand-lightblue transition-all"
                      style={{
                        background: 'linear-gradient(135deg, rgba(26,107,204,0.4) 0%, rgba(26,107,204,0.1) 100%)',
                        clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)'
                      }}
                    >
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-white text-2xl group-hover:text-brand-lightblue transition-colors">{member.name}</h3>
                      <p className="font-mono text-brand-blue text-xs tracking-widest mt-1">{member.role}</p>
                      <a href={`tel:${member.phone.replace(/-/g, '')}`}
                        className="flex items-center gap-2 mt-2 text-brand-steel hover:text-brand-lightblue transition-colors text-sm"
                      >
                        📞 {member.phone}
                      </a>
                    </div>
                  </div>
                  <p className="text-brand-steel leading-relaxed">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 overflow-hidden">
        <VideoBackground overlayIntensity={0.87} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="section-subtitle mb-3">— Our Journey —</p>
            <h2 className="section-title text-white">Company <span className="shimmer-text">Milestones</span></h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/60 via-brand-blue/30 to-transparent"></div>
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <AnimatedSection key={i} delay={i * 100} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="card-glow p-6 inline-block">
                        <div className="font-mono text-brand-blue text-xs tracking-widest mb-2">{m.year}</div>
                        <h4 className="font-heading font-bold text-white text-xl mb-2">{m.title}</h4>
                        <p className="text-brand-steel text-sm">{m.desc}</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center border border-brand-blue bg-brand-dark z-10 flex-shrink-0 font-heading font-bold text-brand-lightblue text-xs"
                      style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)' }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #050A14)' }}></div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="section-title text-white mb-6">Ready to Join Our <span className="shimmer-text">Family?</span></h2>
            <p className="text-brand-steel text-lg mb-8">Partner with IJARA Transportation LLC and experience the difference professional dispatch makes.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                <span>Contact Us Today</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-outline">
                <span>View Our Services</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
