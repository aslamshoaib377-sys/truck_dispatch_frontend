import React from 'react'
import { Link } from 'react-router-dom'
import {
  Truck, Shield, Zap, Globe, Clock, Package,
  AlertTriangle, TrendingUp, FileText, Headphones,
  DollarSign, MapPin, CheckCircle, ArrowRight
} from 'lucide-react'
import VideoBackground from '../components/VideoBackground'
import { AnimatedSection } from '../components/AnimatedSection'

const mainServices = [
  {
    icon: Truck,
    title: 'Full Truckload (FTL)',
    desc: 'Dedicated trailer dispatching for maximum payload efficiency. We source the highest-paying FTL loads across all 48 states, negotiate rates, and handle all paperwork so you can focus on driving.',
    features: ['Dedicated trailer assignment', 'Top-rate negotiation', 'Load-to-load continuity', 'BOL and rate confirmation'],
    color: '#1A6BCC',
  },
  {
    icon: Package,
    title: 'Less Than Truckload (LTL)',
    desc: 'Cost-effective LTL dispatch solutions with our nationwide carrier network. Perfect for smaller shipments requiring professional coordination and competitive pricing.',
    features: ['Nationwide LTL network', 'Freight consolidation', 'Real-time tracking', 'Flexible scheduling'],
    color: '#4DA3FF',
  },
  {
    icon: Shield,
    title: 'Reefer / Temperature Control',
    desc: 'Specialized dispatching for refrigerated freight including food products, pharmaceuticals, and other temperature-sensitive goods. We ensure compliance with all cold-chain requirements.',
    features: ['Temperature compliance', 'Pharma & food certified', 'Continuous monitoring', 'FSMA compliant'],
    color: '#1A6BCC',
  },
  {
    icon: Globe,
    title: 'Flatbed Dispatch',
    desc: 'Expert flatbed load sourcing for oversized cargo, construction materials, heavy machinery, steel, and lumber. We handle permits, route planning, and specialized load requirements.',
    features: ['Oversized permits', 'Route planning', 'Tarping & securement guidance', 'Heavy haul loads'],
    color: '#4DA3FF',
  },
  {
    icon: Zap,
    title: 'Hot Shot Loads',
    desc: 'Expedited freight dispatch for time-critical shipments. Our hot shot network ensures your cargo reaches its destination fast with premium pay rates to match.',
    features: ['Expedited delivery', 'Premium pay rates', 'Same-day dispatch', 'Urgent freight specialists'],
    color: '#1A6BCC',
  },
  {
    icon: AlertTriangle,
    title: 'Hazmat Transport',
    desc: 'Fully DOT-compliant hazardous materials dispatch with certified carriers. We ensure all placarding, documentation, and routing meets federal and state requirements.',
    features: ['DOT hazmat compliance', 'Certified carrier network', 'Emergency response plans', 'Proper documentation'],
    color: '#4DA3FF',
  },
  {
    icon: TrendingUp,
    title: 'Dry Van Dispatch',
    desc: 'High-volume dry van load dispatching with consistent lane access. We specialize in securing reliable, well-paying loads with reputable shippers for steady income.',
    features: ['Consistent lane access', 'High-volume loads', 'Top-tier shippers', 'Weekly settlements'],
    color: '#1A6BCC',
  },
  {
    icon: Headphones,
    title: '24/7 Dispatch Support',
    desc: 'Our dispatchers are on call around the clock. Whether you face a breakdown, load issue, or need emergency rerouting, we are there at any hour to keep your operation running.',
    features: ['24-hour availability', 'Emergency response', 'Real-time communication', 'Issue resolution'],
    color: '#4DA3FF',
  },
]

const additionalServices = [
  { icon: FileText, title: 'Freight Factoring Assistance', desc: 'We connect you with reliable factoring companies for faster cash flow and invoice management.' },
  { icon: DollarSign, title: 'Rate Negotiation', desc: 'Expert freight rate negotiation to maximize your per-mile earnings on every load.' },
  { icon: MapPin, title: 'Load Planning', desc: 'Strategic load sequencing to minimize deadhead miles and maximize revenue per week.' },
  { icon: Shield, title: 'Insurance Coordination', desc: 'Assistance with cargo and liability insurance requirements for every dispatched load.' },
]

const process = [
  { step: '01', title: 'Sign Up', desc: 'Complete our simple carrier onboarding form with your truck details, MC/DOT number, and operating lanes.' },
  { step: '02', title: 'Get Matched', desc: 'Your dedicated dispatcher analyzes your preferences and begins sourcing high-paying loads immediately.' },
  { step: '03', title: 'Approve Loads', desc: 'Review and approve loads before we confirm. You always have final say on every dispatch.' },
  { step: '04', title: 'Roll & Earn', desc: 'Hit the road while we handle tracking, communication with brokers, and all documentation.' },
]

export default function Services() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-32 overflow-hidden">
        <VideoBackground overlayIntensity={0.75} />
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="scanline"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="section-subtitle mb-4">— Full Service Dispatching —</p>
            <h1 className="section-title">
              <span className="text-white">Our </span>
              <span className="shimmer-text">Dispatch</span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-brand-steel text-xl leading-relaxed">
              Comprehensive truck dispatching services built for American carriers. From FTL to hot shots, we have the expertise and network to keep your truck loaded and your revenue growing.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #050A14)' }}></div>
      </section>

      {/* Main Services Grid */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainServices.map((service, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="card-glow p-8 h-full group">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="service-icon flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <service.icon size={26} />
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-2xl text-white group-hover:text-brand-lightblue transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-brand-steel leading-relaxed mb-6">{service.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle size={13} className="text-brand-blue flex-shrink-0" />
                        <span className="text-brand-silver text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-brand-blue/10">
                    <Link to="/contact" className="flex items-center gap-2 text-brand-blue hover:text-brand-lightblue transition-colors group/link">
                      <span className="font-mono text-xs tracking-widest uppercase">Get This Service</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative py-24 overflow-hidden">
        <VideoBackground overlayIntensity={0.87} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="section-subtitle mb-3">— Beyond Dispatching —</p>
            <h2 className="section-title text-white">Added Value <span className="shimmer-text">Services</span></h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((s, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="card-glow p-6 text-center group h-full">
                  <div className="service-icon mx-auto mb-4">
                    <s.icon size={24} />
                  </div>
                  <h4 className="font-heading font-bold text-white text-xl mb-3 group-hover:text-brand-lightblue transition-colors">{s.title}</h4>
                  <p className="text-brand-steel text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #050A14)' }}></div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="section-subtitle mb-3">— Simple Process —</p>
            <h2 className="section-title text-white">How We <span className="shimmer-text">Work</span></h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-12 left-1/4 right-1/4 h-px bg-gradient-to-r from-brand-blue/20 via-brand-blue/60 to-brand-blue/20" style={{ left: '12.5%', right: '12.5%' }}></div>

            {process.map((step, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="card-glow p-8 text-center relative group">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-brand-dark border border-brand-blue text-brand-lightblue font-mono text-xs font-bold"
                    style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)' }}
                  >
                    {i + 1}
                  </div>
                  <div className="font-heading font-black text-5xl text-brand-blue/10 mb-2">{step.step}</div>
                  <h4 className="font-heading font-bold text-white text-xl mb-3 group-hover:text-brand-lightblue transition-colors">{step.title}</h4>
                  <p className="text-brand-steel text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="relative py-24 overflow-hidden">
        <VideoBackground overlayIntensity={0.75} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(26,107,204,0.15) 0%, transparent 100%)' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="border border-brand-blue/30 p-12" style={{ background: 'rgba(5,10,20,0.8)' }}>
              <p className="section-subtitle mb-4">— Transparent Pricing —</p>
              <h2 className="section-title text-white mb-6">Simple <span className="shimmer-text">Flat Rate</span> Model</h2>
              <p className="text-brand-steel text-xl mb-4">
                We charge a small percentage per dispatched load — <span className="text-brand-lightblue font-bold">no hidden fees, no monthly retainers.</span>
              </p>
              <p className="text-brand-steel mb-8">
                You only pay when we find you a load. Our success is directly tied to yours.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                <span>Get a Free Quote</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
