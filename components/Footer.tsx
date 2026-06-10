'use client';

import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { MessageCircle, Globe, MapPin } from 'lucide-react';

const FooterLogo = () => (
  <div className="flex flex-col items-center md:items-start gap-4">
    <div className="bg-white p-2 rounded-lg shadow-sm inline-block">
      <Image 
        src="/atlanta-overseas.png" 
        alt="Atlanta Overseas Education" 
        width={200} 
        height={50} 
        className="object-contain"
      />
    </div>
    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">Nagpur&apos;s Premium Education Hub</p>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[var(--card)] py-20 border-t border-[var(--card-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <FooterLogo />
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
            <NextLink href="/services" className="hover:text-brand-accent transition-colors">Services</NextLink>
            <NextLink href="/about" className="hover:text-brand-accent transition-colors">About Us</NextLink>
            <NextLink href="/contact" className="hover:text-brand-accent transition-colors">Contact</NextLink>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-brand-navy dark:text-white hover:bg-brand-accent transition-all cursor-pointer">
              <MessageCircle size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-brand-navy dark:text-white hover:bg-brand-accent transition-all cursor-pointer">
              <Globe size={18} />
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[var(--card-border)] text-center">
          <p className="text-[var(--muted)] text-sm font-medium">
            © {new Date().getFullYear()} Atlanta Overseas Education. All rights reserved. 
            <br className="md:hidden" /> 
            <span className="hidden md:inline mx-2">|</span> 
            A division of Atlanta Computer Institute, Nagpur (Since 2011).
          </p>
        </div>
      </div>
    </footer>
  );
}
