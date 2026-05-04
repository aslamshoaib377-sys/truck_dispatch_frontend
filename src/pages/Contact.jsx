import React, { useState } from 'react'
import { Phone, MapPin, Mail, Clock, Send, CheckCircle, User, MessageSquare, Truck, AlertCircle } from 'lucide-react'
import VideoBackground from '../components/VideoBackground'
import { AnimatedSection } from '../components/AnimatedSection'

const OWNER = {
  name: 'Abdullahi Abdi Omar',
  role: 'Owner & Chief Dispatcher',
  phone: '605-290-2115',
  initials: 'AA',
}

const OPS = {
  name: 'Zain Haider',
  role: 'Operational Manager',
  phone: '651-780-7965',
  initials: 'ZH',
}

const ADDRESS = {
  street: '218 W Division Ave Apt #9',
  city: 'Barron, WI 54812',
  country: 'United States 🇺🇸',
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', loadType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!formData.name.trim()) e.name = 'Name is required'
    if (!formData.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Please enter a valid email'
    if (!formData.message.trim()) e.message = 'Please tell us about your needs'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div>
      {/* Header */}
      <section className="relative py-32 overflow-hidden">
        <VideoBackground overlayIntensity={0.75} />
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="scanline"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="section-subtitle mb-4">— Get In Touch —</p>
            <h1 className="section-title">
              <span className="text-white">Contact </span>
              <span className="shimmer-text">IJARA</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-brand-steel text-xl leading-relaxed">
              Ready to maximize your freight revenue? Reach out to our dispatch team and let's get your truck loaded today.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #050A14)' }}></div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-16 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">

            {/* Address */}
            <AnimatedSection delay={0}>
              <div className="card-glow p-8 h-full group">
                <div className="service-icon mb-5">
                  <MapPin size={24} />
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-3">Headquarters</h3>
                <address className="not-italic text-brand-steel leading-relaxed">
                  <p className="text-brand-silver font-semibold">{ADDRESS.street}</p>
                  <p>{ADDRESS.city}</p>
                  <p>{ADDRESS.country}</p>
                </address>
                <a
                  href={`https://maps.google.com/?q=218+W+Division+Ave+Barron+WI+54812`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-brand-blue hover:text-brand-lightblue transition-colors font-mono text-xs tracking-widest uppercase"
                >
                  Get Directions →
                </a>
              </div>
            </AnimatedSection>

            {/* Hours */}
            <AnimatedSection delay={100}>
              <div className="card-glow p-8 h-full group">
                <div className="service-icon mb-5">
                  <Clock size={24} />
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-3">Dispatch Hours</h3>
                <div className="space-y-2">
                  {[
                    { day: 'Monday – Friday', hours: '24 Hours' },
                    { day: 'Saturday', hours: '24 Hours' },
                    { day: 'Sunday', hours: '24 Hours' },
                    { day: 'Emergency Line', hours: 'Always Open' },
                  ].map((h, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-brand-blue/10 pb-2">
                      <span className="text-brand-steel text-sm">{h.day}</span>
                      <span className={`font-mono text-xs font-bold ${i === 3 ? 'text-green-400' : 'text-brand-lightblue'}`}>{h.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="font-mono text-green-400 text-xs tracking-widest">CURRENTLY ACTIVE</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Email / General */}
            <AnimatedSection delay={200}>
              <div className="card-glow p-8 h-full group">
                <div className="service-icon mb-5">
                  <Mail size={24} />
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-3">Email & Online</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-brand-steel/60 text-xs tracking-widest mb-1">DISPATCH</p>
                    <a href="mailto:dispatch@ijaratransport.com" className="text-brand-silver hover:text-brand-lightblue transition-colors text-sm">
                      dispatch@ijaratransport.com
                    </a>
                  </div>
                  <div>
                    <p className="font-mono text-brand-steel/60 text-xs tracking-widest mb-1">GENERAL INQUIRIES</p>
                    <a href="mailto:info@ijaratransport.com" className="text-brand-silver hover:text-brand-lightblue transition-colors text-sm">
                      info@ijaratransport.com
                    </a>
                  </div>
                </div>
                <div className="mt-6 p-3 border border-brand-blue/20 bg-brand-blue/5">
                  <p className="text-brand-steel text-xs leading-relaxed">We respond to all inquiries within 1 hour during business hours.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Team Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[OWNER, OPS].map((person, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="card-glow p-8 group">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 flex items-center justify-center flex-shrink-0 font-heading font-black text-2xl text-white border border-brand-blue/40 group-hover:border-brand-lightblue transition-all"
                      style={{
                        background: 'linear-gradient(135deg, rgba(26,107,204,0.4) 0%, rgba(26,107,204,0.1) 100%)',
                        clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)'
                      }}
                    >
                      {person.initials}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-black text-white text-2xl group-hover:text-brand-lightblue transition-colors">{person.name}</h3>
                      <p className="font-mono text-brand-blue text-xs tracking-widest">{person.role}</p>
                    </div>
                    <a href={`tel:${person.phone.replace(/-/g, '')}`}
                      className="flex items-center gap-2 px-5 py-3 border border-brand-blue/40 hover:border-brand-blue hover:bg-brand-blue/20 text-brand-lightblue transition-all group/phone"
                      style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
                    >
                      <Phone size={16} />
                      <span className="font-heading font-bold tracking-wider">{person.phone}</span>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-24 overflow-hidden">
        <VideoBackground overlayIntensity={0.85} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="section-subtitle mb-3">— Send Us a Message —</p>
            <h2 className="section-title text-white">Submit Your <span className="shimmer-text">Inquiry</span></h2>
            <p className="mt-4 text-brand-steel">Fill out the form below and our dispatch team will contact you within the hour.</p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            {submitted ? (
              <div className="card-glow p-16 text-center">
                <div className="w-20 h-20 mx-auto flex items-center justify-center border border-green-500/40 bg-green-500/10 mb-6"
                  style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)' }}
                >
                  <CheckCircle size={36} className="text-green-400" />
                </div>
                <h3 className="font-heading font-black text-white text-3xl mb-4">Message Received!</h3>
                <p className="text-brand-steel text-lg mb-2">Thank you for contacting IJARA Transportation LLC.</p>
                <p className="text-brand-steel">Our dispatch team will reach out to you within <span className="text-brand-lightblue font-semibold">1 hour</span> during business hours.</p>
                <p className="mt-6 font-mono text-brand-blue/60 text-xs tracking-widest">For urgent dispatching needs, call us directly at 605-290-2115</p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', loadType: '', message: '' }) }}
                  className="mt-8 btn-outline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-glow p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                  {/* Name */}
                  <div className="relative">
                    <label className="block font-mono text-brand-steel/70 text-xs tracking-widest uppercase mb-2">
                      Full Name <span className="text-brand-blue">*</span>
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-steel/40" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`contact-input pl-12 ${errors.name ? 'border-red-500/60' : ''}`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 flex items-center gap-1 text-red-400 text-xs"><AlertCircle size={12} />{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-mono text-brand-steel/70 text-xs tracking-widest uppercase mb-2">
                      Email Address <span className="text-brand-blue">*</span>
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-steel/40" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`contact-input pl-12 ${errors.email ? 'border-red-500/60' : ''}`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 flex items-center gap-1 text-red-400 text-xs"><AlertCircle size={12} />{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-mono text-brand-steel/70 text-xs tracking-widest uppercase mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-steel/40" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(XXX) XXX-XXXX"
                        className="contact-input pl-12"
                      />
                    </div>
                  </div>

                  {/* Load Type */}
                  <div>
                    <label className="block font-mono text-brand-steel/70 text-xs tracking-widest uppercase mb-2">
                      Service Needed
                    </label>
                    <div className="relative">
                      <Truck size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-steel/40 z-10" />
                      <select
                        name="loadType"
                        value={formData.loadType}
                        onChange={handleChange}
                        className="contact-input pl-12 cursor-pointer"
                        style={{ background: '#020509' }}
                      >
                        <option value="">Select service type</option>
                        <option value="ftl">Full Truckload (FTL)</option>
                        <option value="ltl">Less Than Truckload (LTL)</option>
                        <option value="flatbed">Flatbed Dispatch</option>
                        <option value="reefer">Reefer / Temperature Control</option>
                        <option value="hotshot">Hot Shot Loads</option>
                        <option value="dryvan">Dry Van</option>
                        <option value="hazmat">Hazmat Transport</option>
                        <option value="other">Other / General Inquiry</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block font-mono text-brand-steel/70 text-xs tracking-widest uppercase mb-2">
                    Your Message <span className="text-brand-blue">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-4 top-4 text-brand-steel/40" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us about your trucking operation, the type of loads you run, your lanes, and how we can help maximize your earnings..."
                      className={`contact-input pl-12 resize-none ${errors.message ? 'border-red-500/60' : ''}`}
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-1 flex items-center gap-1 text-red-400 text-xs"><AlertCircle size={12} />{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full sm:w-auto group relative"
                    style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                  <p className="text-brand-steel/50 text-xs font-mono text-center">
                    We respond within 1 hour · No spam, ever
                  </p>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #050A14)' }}></div>
      </section>

      {/* Map placeholder / Location section */}
      <section className="relative py-16 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <AnimatedSection direction="left">
              <h2 className="section-title text-white mb-6">Find Us On<br /><span className="shimmer-text">The Map</span></h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-heading font-bold text-white text-xl">IJARA Transportation LLC</p>
                    <p className="text-brand-steel">218 W Division Ave Apt #9</p>
                    <p className="text-brand-steel">Barron, WI 54812</p>
                    <p className="text-brand-steel">United States 🇺🇸</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-brand-blue flex-shrink-0" />
                  <div>
                    <p className="text-slate-500 font-semibold text-[10px] uppercase tracking-[0.25em] mb-2 antialiased">Owner: Abdullahi Abdi Omar</p>
                    <a href="tel:6052902115" className="text-brand-lightblue font-heading font-bold text-xl tracking-wider hover:glow-text transition-all">
                      605-290-2115
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-brand-blue flex-shrink-0" />
                 <div>
  {/* Professional Update: Medium weight, refined tracking, and muted slate-500 */}
                   <div>
                    <p className="text-slate-500 font-semibold text-[10px] uppercase tracking-[0.25em] mb-2 antialiased">Operations Manager: Zain Haider</p>
                    <a href="tel:6052902115" className="text-brand-lightblue font-heading font-bold text-xl tracking-wider hover:glow-text transition-all">
                      605-290-2115
                    </a>
                  </div>
  
  {/* The Phone Number: Using a slightly cleaner blue and refined shadow */}
  <a 
    href="tel:6517807965" 
    className="text-blue-500 font-black text-2xl tracking-tighter hover:text-blue-400 transition-all duration-300 block"
  >
    651-780-7965
  </a>
</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              {/* Stylized map placeholder */}
              <div className="relative border border-brand-blue/30 overflow-hidden" style={{ height: '350px', background: 'rgba(5,10,20,0.9)' }}>
                <div className="absolute inset-0 grid-bg opacity-40"></div>

                {/* Decorative map elements */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 350">
                  {/* Road lines */}
                  <line x1="0" y1="175" x2="600" y2="175" stroke="rgba(26,107,204,0.2)" strokeWidth="2" />
                  <line x1="300" y1="0" x2="300" y2="350" stroke="rgba(26,107,204,0.2)" strokeWidth="2" />
                  <line x1="0" y1="100" x2="600" y2="100" stroke="rgba(26,107,204,0.08)" strokeWidth="1" />
                  <line x1="0" y1="250" x2="600" y2="250" stroke="rgba(26,107,204,0.08)" strokeWidth="1" />
                  <line x1="150" y1="0" x2="150" y2="350" stroke="rgba(26,107,204,0.08)" strokeWidth="1" />
                  <line x1="450" y1="0" x2="450" y2="350" stroke="rgba(26,107,204,0.08)" strokeWidth="1" />

                  {/* Location pin */}
                  <circle cx="300" cy="175" r="40" fill="rgba(26,107,204,0.1)" stroke="rgba(26,107,204,0.4)" strokeWidth="1" />
                  <circle cx="300" cy="175" r="25" fill="rgba(26,107,204,0.2)" stroke="rgba(77,163,255,0.6)" strokeWidth="2" />
                  <circle cx="300" cy="175" r="8" fill="#1A6BCC" />
                  <circle cx="300" cy="175" r="40" fill="none" stroke="rgba(26,107,204,0.2)" strokeWidth="1">
                    <animate attributeName="r" values="40;70;40" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
                  </circle>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center" style={{ marginTop: '-40px' }}>
                    <div className="font-heading font-black text-white text-2xl">Barron, WI</div>
                    <div className="font-mono text-brand-blue text-xs tracking-widest">54812 • UNITED STATES</div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=218+W+Division+Ave+Barron+WI+54812"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 btn-primary text-sm py-2 px-6"
                  style={{ clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)' }}
                >
                  <span className="flex items-center gap-2">
                    <MapPin size={14} />
                    Open in Google Maps
                  </span>
                </a>

                {/* Corner decorations */}
                <div className="corner-tl absolute top-0 left-0"></div>
                <div className="corner-br absolute bottom-0 right-0"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
