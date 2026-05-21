"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, ChevronDown, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { 
      href: '/services', 
      label: 'Services',
      dropdown: [
        { href: '/individual-counselling', label: 'Individual Counselling' },
        { href: '/couples-counselling', label: 'Couples Counselling' },
        { href: '/adolescent-counselling', label: 'Adolescent Counselling' },
        { href: '/family-counselling', label: 'Family Counselling' },
        { href: '/career-counselling', label: 'Career Counselling' },
        { href: '/pre-post-marital-counselling', label: 'Pre & Post Marital Counselling' }
      ]
    },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 text-on-surface">
      <nav className="flex justify-between items-center w-full px-6 md:px-20 py-5 max-w-7xl mx-auto relative">
        <Link href="/" className="flex items-center">
          <Image 
            src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/saiiiw/images/saiiiw_logo_5.png"
            alt="SAIIIW Logo"
            width={240}
            height={80}
            className="object-contain w-auto h-12 md:h-16 transform scale-[2] md:scale-[2.15] translate-y-1 origin-left"
            priority
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <div key={link.href} className="relative group">
              {link.dropdown ? (
                <div className="flex items-center gap-1 cursor-pointer py-2">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-semibold tracking-wide uppercase transition-colors duration-300",
                      pathname === link.href || (['/individual', '/couples', '/adolescent', '/family', '/career', '/pre-post-marital'].some(p => pathname.startsWith(p)) && link.href === '/services')
                        ? "text-primary border-b-2 border-primary-container pb-1"
                        : "text-on-surface-variant hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                  <ChevronDown className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-transform duration-300 group-hover:rotate-180" />
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-64 bg-surface rounded-xl shadow-xl border border-outline-variant/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0 overflow-hidden">
                    <div className="py-2">
                      {link.dropdown.map((dropLink) => (
                        <Link
                          key={dropLink.href}
                          href={dropLink.href}
                          className="block px-4 py-2.5 text-sm text-on-surface-variant hover:bg-primary/5 hover:text-primary transition-colors"
                        >
                          {dropLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold tracking-wide uppercase transition-colors duration-300 py-2",
                    pathname === link.href 
                      ? "text-primary border-b-2 border-primary-container pb-1"
                      : "text-on-surface-variant hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/contact">
            <button className="hidden md:block bg-primary-container text-white px-6 py-2.5 rounded hover:bg-primary transition-all duration-300 text-sm font-semibold active:scale-95 shadow-sm">
              Book a Session
            </button>
          </Link>
          <button 
            className="md:hidden text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant/30 shadow-lg py-4 px-6 flex flex-col gap-4">
          {links.map((link) => (
            <div key={link.href} className="flex flex-col">
              {link.dropdown ? (
                <>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-semibold tracking-wide uppercase transition-colors duration-300 py-2",
                      pathname === link.href || (['/individual', '/couples', '/adolescent', '/family', '/career', '/pre-post-marital'].some(p => pathname.startsWith(p)) && link.href === '/services')
                        ? "text-primary"
                        : "text-on-surface"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  <div className="pl-4 mt-2 flex flex-col gap-3 border-l-2 border-outline-variant/30 ml-2">
                    {link.dropdown.map((dropLink) => (
                      <Link
                        key={dropLink.href}
                        href={dropLink.href}
                        className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {dropLink.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold tracking-wide uppercase transition-colors duration-300 py-2",
                    pathname === link.href 
                      ? "text-primary"
                      : "text-on-surface"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-4">
            <button className="w-full bg-primary-container text-white px-6 py-3 rounded hover:bg-primary transition-colors text-sm font-semibold">
              Book a Session
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
