import React from 'react'
import { Link } from 'react-router-dom'
import { Truck, Phone, MapPin, Mail, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-brand-darker border-t border-brand-blue/20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center border border-brand-blue/50"
                style={{
                  clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                  background: 'linear-gradient(135deg, rgba(26,107,204,0.3) 0%, rgba(26,107,204,0.1) 100%)'
                }}
              >
                <Truck size={18} className="text-brand-lightblue" />
              </div>
              <div>
                <div className="font-heading font-black text-xl tracking-wider text-white">IJARA</div>
                <div className="font-mono text-brand-blue text-xs tracking-widest">TRANSPORTATION LLC</div>
              </div>
            </div>
            <p className="text-brand-steel text-sm leading-relaxed mb-6">
              America's trusted freight dispatch partner. Moving cargo across all 48 continental states with precision, reliability, and round-the-clock operational support.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <button key={i}
                  className="w-9 h-9 flex items-center justify-center border border-brand-blue/30 text-brand-steel hover:text-brand-lightblue hover:border-brand-blue transition-all duration-300"
                  style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)' }}
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-black text-white text-xl tracking-wider mb-6 uppercase">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Our Services', path: '/services' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <Link key={item.path} to={item.path}
                  className="flex items-center gap-2 text-brand-steel hover:text-brand-lightblue transition-all duration-300 group py-1"
                >
                  <ChevronRight size={14} className="text-brand-blue/40 group-hover:text-brand-blue transition-colors" />
                  <span className="font-body text-sm tracking-wide">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-black text-white text-xl tracking-wider mb-6 uppercase">Services</h4>
            <div className="space-y-2">
              {[
                'Full Truckload (FTL)',
                'Less Than Truckload (LTL)',
                'Dry Van Dispatch',
                'Flatbed Dispatch',
                'Reefer Dispatch',
                'Hot Shot Loads',
                'Hazmat Transport',
                'Owner Operator Support',
              ].map((service) => (
                <div key={service} className="flex items-center gap-2 text-brand-steel group py-1">
                  <ChevronRight size={14} className="text-brand-blue/40" />
                  <span className="font-body text-sm tracking-wide">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-black text-white text-xl tracking-wider mb-6 uppercase">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin size={16} className="text-brand-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-brand-silver text-sm font-semibold">Headquarters</p>
                  <p className="text-brand-steel text-sm leading-relaxed">
                    218 W Division Ave Apt #9<br />
                    Barron, WI 54812<br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-brand-blue flex-shrink-0" />
                <div>
                  <p className="text-brand-silver text-sm font-semibold">Owner</p>
                  <a href="tel:6052902115" className="text-brand-steel hover:text-brand-lightblue text-sm transition-colors">605-290-2115</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-brand-blue flex-shrink-0" />
                <div>
                  <p className="text-brand-silver text-sm font-semibold">Operations</p>
                  <a href="tel:6517807965" className="text-brand-steel hover:text-brand-lightblue text-sm transition-colors">651-780-7965</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-brand-blue flex-shrink-0" />
                <a href="mailto:dispatch@ijaratransport.com" className="text-brand-steel hover:text-brand-lightblue text-sm transition-colors">dispatch@ijaratransport.com</a>
              </div>
            </div>

            {/* Emergency dispatch badge */}
            <div className="mt-6 p-3 border border-green-500/30 bg-green-500/5 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0"></span>
              <div>
                <p className="font-heading font-bold text-green-400 text-sm tracking-wider">24/7 DISPATCH ACTIVE</p>
                <p className="text-brand-steel text-xs">Emergency loads available now</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-brand-blue/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-brand-steel/50 text-xs text-center">
              © {new Date().getFullYear()} IJARA Transportation LLC. All rights reserved. | DOT Compliant | FMCSA Registered
            </p>
            <div className="flex items-center gap-1">
              <span className="font-mono text-brand-steel/30 text-xs">Proudly serving the</span>
              <span className="font-heading font-bold text-brand-blue text-sm tracking-widest">USA</span>
              <span className="font-mono text-brand-steel/30 text-xs">🇺🇸</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
