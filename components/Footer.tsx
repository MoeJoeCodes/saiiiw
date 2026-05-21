import Link from 'next/link';
import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30 text-on-surface">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <div className="font-serif text-2xl font-bold text-primary mb-4">SAIIIW</div>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
            South African Institute of Islamically Integrated Wellness. Cultivating tranquility through clinical excellence and spiritual wisdom.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://www.instagram.com/sa.iiiw/" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors p-2 -ml-2 rounded-full hover:bg-surface-variant/30" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
        
        <div className="md:col-span-3 flex flex-wrap gap-x-8 gap-y-4 justify-start md:justify-end items-end h-full">
          <Link href="/" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">About</Link>
          <Link href="/services" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Services</Link>
          <Link href="/contact" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Contact</Link>
          <Link href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
      <div className="border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-6">
            <p className="text-sm text-on-surface-variant text-center md:text-left opacity-80">
                © {new Date().getFullYear()} SAIIIW. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
