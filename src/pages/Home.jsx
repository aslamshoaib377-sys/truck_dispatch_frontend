import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Truck, Shield, Clock, MapPin, Phone, ChevronRight, Star,
  CheckCircle, Globe, TrendingUp, Zap, Award, Users, ArrowRight
} from 'lucide-react'
import VideoBackground from '../components/VideoBackground'
import { AnimatedSection, CounterNumber } from '../components/AnimatedSection'

const services = [
  { icon: Truck, title: 'Full Truckload (FTL)', desc: 'Dedicated trailers for maximum payload efficiency across all 48 states.' },
  { icon: Shield, title: 'Reefer / Temperature Control', desc: 'Climate-controlled freight for perishables, pharma, and temperature-sensitive goods.' },
  { icon: Zap, title: 'Flatbed Dispatch', desc: 'Specialized flatbed loads including oversized, machinery, and construction materials.' },
  { icon: Globe, title: 'LTL Consolidation', desc: 'Cost-effective less-than-truckload solutions with nationwide carrier network.' },
  { icon: TrendingUp, title: 'Hot Shot Loads', desc: 'Expedited delivery for urgent, time-critical freight with fastest available carriers.' },
  { icon: Clock, title: '24/7 Dispatch Support', desc: 'Round-the-clock dispatching with real-time load tracking and communication.' },
]

const states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

const testimonials = [
  { name: 'Mike Harrison', role: 'Owner Operator — Texas', text: 'IJARA kept my truck loaded 5 days a week. Best dispatch team Ive worked with in 15 years of trucking.', rating: 5 },
  { name: 'James Kowalski', role: 'Fleet Manager — Illinois', text: 'Rates are top-notch and they always find quality loads. Their negotiation skills save us thousands per month.', rating: 5 },
  { name: 'David Chen', role: 'Independent Carrier — California', text: 'Professional, responsive, and they actually care about drivers. IJARA is everything a dispatch company should be.', rating: 5 },
]

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false)
  const [tickerText] = useState('FTL DISPATCH • LTL LOADS • FLATBED • REEFER • HOTSHOT • DRY VAN • HAZMAT • OVERSIZED • EXPEDITED • 48 STATES • 24/7 OPS •')

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative">

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-0">
        <VideoBackground overlayIntensity={0.55} />

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>

        {/* Scan line */}
        <div className="scanline"></div>

        {/* Particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.6 + 0.2,
            }} />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">

          {/* Badge */}
          <div className={`inline-flex items-center gap-3 mb-8 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-2 px-4 py-2 border border-brand-blue/40 bg-brand-blue/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="font-mono text-brand-blue text-xs tracking-widest uppercase">USA Based • Barron, WI</span>
              <span className="text-brand-steel text-xs">🇺🇸</span>
            </div>
          </div>

          {/* Company Name with video effect behind text */}
          <div className={`relative mb-4 transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Glow blob behind text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-3/4 h-32 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(ellipse, rgba(26,107,204,0.4) 0%, transparent 70%)' }}
              ></div>
            </div>
            <h1 className="font-heading font-black uppercase leading-none relative"
              style={{ fontSize: 'clamp(3rem, 10vw, 9rem)', letterSpacing: '0.05em' }}>
              <span className="shimmer-text">IJARA</span>
            </h1>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="font-heading font-black text-white tracking-widest uppercase"
              style={{ fontSize: 'clamp(1.2rem, 4vw, 3rem)', letterSpacing: '0.2em' }}>
              TRANSPORTATION LLC
            </div>
            <div className="mt-3 font-mono text-brand-blue/80 text-sm md:text-base tracking-widest">
              ━━ PROFESSIONAL TRUCK DISPATCHING ACROSS AMERICA ━━
            </div>
          </div>

          <p className={`mt-8 max-w-2xl mx-auto font-body text-brand-silver text-lg md:text-xl leading-relaxed transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Connecting owner-operators and fleet companies with premium loads nationwide.
            Maximum rates, minimum deadhead, <span className="text-brand-lightblue font-semibold">24/7 dispatch support</span> — we keep your wheels turning.
          </p>

          {/* Address */}
          <div className={`mt-6 flex items-center justify-center gap-2 transition-all duration-1000 delay-600 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
            <MapPin size={14} className="text-brand-blue" />
            <span className="font-mono text-brand-steel/70 text-xs tracking-widest">218 W DIVISION AVE APT #9, BARRON, WI 54812</span>
          </div>

          {/* CTA Buttons */}
          <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link to="/contact" className="btn-primary group">
              <span className="relative z-10 flex items-center gap-2">
                <Truck size={18} />
                Start Dispatching Today
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link to="/services" className="btn-outline group">
              <span className="flex items-center gap-2">
                <Globe size={16} />
                View Our Services
              </span>
            </Link>
          </div>

          {/* Quick stats */}
          <div className={`mt-14 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto transition-all duration-1000 delay-700 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
            {[
              { label: 'States Covered', value: '48' },
              { label: 'Loads Dispatched', value: '10K+' },
              { label: 'Uptime Support', value: '24/7' },
            ].map((stat) => (
              <div key={stat.label} className="text-center border-t border-brand-blue/30 pt-4">
                <div className="font-heading font-black text-brand-lightblue glow-text" style={{ fontSize: '2rem' }}>{stat.value}</div>
                <div className="font-mono text-brand-steel/60 text-xs tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="font-mono text-brand-steel/40 text-xs tracking-widest">SCROLL</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-brand-blue to-transparent"></div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #050A14)' }}
        ></div>
      </section>

      {/* ===== TICKER BAR ===== */}
      <div className="relative z-10 bg-brand-blue py-3 overflow-hidden border-y border-brand-lightblue/30">
        <div className="ticker-track">
          {[tickerText, tickerText].map((text, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {text.split('•').filter(Boolean).map((item, j) => (
                <span key={j} className="font-heading font-bold text-white text-sm tracking-widest whitespace-nowrap flex items-center gap-4">
                  {item.trim()}
                  <span className="text-brand-lightblue/60">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===== STATS SECTION ===== */}
      <section className="relative py-20 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { target: 48, suffix: '', label: 'States Covered', prefix: '' },
              { target: 10000, suffix: '+', label: 'Loads Dispatched', prefix: '' },
              { target: 98, suffix: '%', label: 'On-Time Rate', prefix: '' },
              { target: 5, suffix: '+', label: 'Years Experience', prefix: '' },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 150} className="text-center relative corner-tl corner-br p-6">
                <div className="absolute inset-0 border border-brand-blue/10"></div>
                <CounterNumber target={stat.target} suffix={stat.suffix} prefix={stat.prefix} />
                <div className="mt-2 font-mono text-brand-steel/60 text-xs tracking-widest uppercase">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="relative py-24 overflow-hidden">
        <VideoBackground overlayIntensity={0.85} />
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="section-subtitle mb-3">— What We Do —</p>
            <h2 className="section-title">
              <span className="text-white">Our </span>
              <span className="shimmer-text">Dispatch</span>
              <span className="text-white"> Services</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-brand-steel text-lg">
              End-to-end freight dispatch solutions tailored for owner-operators, small fleets, and large carriers operating across the United States.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="card-glow p-8 h-full group cursor-pointer">
                  <div className="service-icon mb-6">
                    <service.icon size={28} />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-3 group-hover:text-brand-lightblue transition-colors">{service.title}</h3>
                  <p className="text-brand-steel leading-relaxed">{service.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-brand-blue group-hover:text-brand-lightblue transition-colors">
                    <span className="font-mono text-xs tracking-widest uppercase">Learn More</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              <span>View All Services</span>
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5">
          <div className="w-full h-full" style={{ background: 'radial-gradient(ellipse at right, #1A6BCC 0%, transparent 70%)' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="section-subtitle mb-4">— Why IJARA —</p>
              <h2 className="section-title text-white mb-8">
                America's Most Trusted<br />
                <span className="shimmer-text">Dispatch Partner</span>
              </h2>
              <p className="text-brand-steel text-lg leading-relaxed mb-8">
                At IJARA Transportation LLC, we understand the American trucking industry from the inside. Our team of experienced dispatchers work tirelessly to maximize your earnings while minimizing empty miles.
              </p>
              <div className="space-y-4">
                {[
                  'Top-rated freight negotiations — highest rates guaranteed',
                  'Dedicated dispatcher assigned to your truck',
                  'Load planning that minimizes deadhead miles',
                  'BOL, rate confirmation & paperwork handled for you',
                  'Direct communication — no call centers, no delays',
                  'Access to premium load boards and direct shippers',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <CheckCircle size={18} className="text-brand-blue mt-0.5 flex-shrink-0 group-hover:text-brand-lightblue transition-colors" />
                    <span className="text-brand-silver">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex gap-4">
                <Link to="/contact" className="btn-primary">
                  <span>Get Started</span>
                </Link>
                <Link to="/about" className="btn-outline">
                  <span>Our Story</span>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, title: 'DOT Compliant', desc: 'Fully registered and compliant with FMCSA regulations' },
                { icon: Shield, title: 'Fully Insured', desc: 'Cargo and liability coverage on every dispatched load' },
                { icon: Clock, title: '24/7 Active', desc: 'Round-the-clock support for drivers on the road' },
                { icon: Users, title: 'Driver-First', desc: 'We prioritize driver satisfaction and fair pay' },
              ].map((item, i) => (
                <div key={i} className="card-glow p-6 group">
                  <div className="w-12 h-12 flex items-center justify-center border border-brand-blue/30 text-brand-lightblue mb-4 transition-all duration-300 group-hover:border-brand-blue group-hover:bg-brand-blue/20"
                    style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)' }}
                  >
                    <item.icon size={20} />
                  </div>
                  <h4 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h4>
                  <p className="text-brand-steel text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== STATES MAP / COVERAGE ===== */}
      <section className="relative py-24 overflow-hidden">
        <VideoBackground overlayIntensity={0.88} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="section-subtitle mb-3">— Nationwide Coverage —</p>
            <h2 className="section-title text-white mb-4">
              All <span className="shimmer-text">48 Continental</span> States
            </h2>
            <p className="text-brand-steel text-lg max-w-2xl mx-auto mb-12">
              From coast to coast, IJARA Transportation LLC has the carrier network to move freight anywhere in the continental United States.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {states.map((state, i) => (
                <div key={state}
                  className="px-3 py-1.5 border border-brand-blue/20 font-mono text-xs text-brand-steel/70 hover:border-brand-blue hover:text-brand-lightblue transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${i * 30}ms` }}
                >
                  {state}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="section-subtitle mb-3">— Driver Reviews —</p>
            <h2 className="section-title text-white">What Drivers <span className="shimmer-text">Say About Us</span></h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="card-glow p-8 h-full relative">
                  <div className="absolute top-4 right-4 text-brand-blue/10 font-heading font-black text-6xl leading-none">"</div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-brand-silver leading-relaxed mb-6 relative z-10">"{t.text}"</p>
                  <div className="flex items-center gap-3 border-t border-brand-blue/10 pt-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-brand-blue/20 border border-brand-blue/30 font-heading font-bold text-brand-lightblue">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-white">{t.name}</p>
                      <p className="font-mono text-brand-steel/60 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-24 overflow-hidden">
        <VideoBackground overlayIntensity={0.7} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(26,107,204,0.2) 0%, transparent 50%, rgba(26,107,204,0.1) 100%)' }}></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="border border-brand-blue/30 p-12 backdrop-blur-sm" style={{ background: 'rgba(5,10,20,0.7)' }}>
              <p className="section-subtitle mb-4">— Ready to Roll? —</p>
              <h2 className="section-title text-white mb-6">Let's Keep Your<br /><span className="shimmer-text">Wheels Moving</span></h2>
              <p className="text-brand-steel text-lg mb-8 max-w-2xl mx-auto">
                Contact IJARA Transportation LLC today and let our expert dispatchers find you the best loads at the highest rates. We work for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary group">
                  <span className="flex items-center gap-2">
                    <Phone size={18} />
                    Call Us Now: 605-290-2115
                  </span>
                </Link>
                <Link to="/services" className="btn-outline">
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}
