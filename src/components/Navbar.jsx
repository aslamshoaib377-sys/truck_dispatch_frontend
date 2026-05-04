import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Truck, Phone } from 'lucide-react'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 bg-brand-darker border-b border-brand-blue/10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-brand-steel text-xs font-mono tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            <span>DISPATCH OPERATIONS: 24/7 ACTIVE</span>
          </div>
          <div className="flex items-center gap-2 text-brand-steel text-xs font-mono">
            <Phone size={10} />
            <span>605-290-2115</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-brand-blue/60 text-xs font-mono tracking-widest">
          <span>DOT COMPLIANT</span>
          <span className="mx-2">|</span>
          <span>FMCSA REGISTERED</span>
          <span className="mx-2">|</span>
          <span>FULLY INSURED</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed top-0 md:relative z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'md:fixed md:top-0 bg-brand-darker/95 backdrop-blur-xl border-b border-brand-blue/30 shadow-2xl'
            : 'md:bg-brand-dark/80 md:backdrop-blur-md md:border-b md:border-brand-blue/10'
        }`}
        style={scrolled ? { boxShadow: '0 4px 40px rgba(26,107,204,0.15)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center border border-brand-blue/50 group-hover:border-brand-lightblue transition-all duration-300"
                  style={{
                    clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                    background: 'linear-gradient(135deg, rgba(26,107,204,0.3) 0%, rgba(26,107,204,0.1) 100%)'
                  }}
                >
                  <Truck size={22} className="text-brand-lightblue" />
                </div>
                <div className="absolute inset-0 border border-brand-blue/20 animate-ping"
                  style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)' }}
                ></div>
              </div>
              <div>
                <div className="font-heading font-black text-xl tracking-wider text-white group-hover:text-brand-lightblue transition-colors duration-300">
                  IJARA
                </div>
                <div className="font-mono text-brand-blue text-xs tracking-widest">TRANSPORTATION LLC</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative px-5 py-2 font-heading text-sm font-semibold tracking-widest uppercase transition-all duration-300
                    ${location.pathname === item.path
                      ? 'text-brand-lightblue'
                      : 'text-brand-steel hover:text-white'
                    }`}
                >
                  {/* Hover background */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(135deg, rgba(26,107,204,0.15) 0%, transparent 100%)' }}
                  ></span>
                  {/* Active/hover underline */}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-blue transition-all duration-300
                    ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  ></span>
                  {/* Active top line */}
                  {location.pathname === item.path && (
                    <span className="absolute top-0 left-0 h-0.5 w-full bg-brand-lightblue/50"></span>
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              ))}
              <Link to="/contact"
                className="ml-4 btn-primary group"
                style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
              >
                <span className="relative z-10 text-sm">Get Dispatched</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center border border-brand-blue/40 text-brand-lightblue hover:bg-brand-blue/20 transition-all duration-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          style={{ background: 'rgba(2,5,9,0.97)', borderTop: '1px solid rgba(26,107,204,0.3)' }}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`py-3 px-4 font-heading text-base font-semibold tracking-widest uppercase border-l-2 transition-all duration-300
                  ${location.pathname === item.path
                    ? 'border-brand-lightblue text-brand-lightblue bg-brand-blue/10'
                    : 'border-transparent text-brand-steel hover:border-brand-blue hover:text-white hover:bg-brand-blue/5'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-3 btn-primary text-center text-sm py-3">
              <span>Get Dispatched Now</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
