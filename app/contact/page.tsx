'use client';

import React from 'react';
import { MapPin, Phone, Mail, Navigation, ExternalLink, MessageCircle } from 'lucide-react';
import { Section, MapEmbed, Button } from '@/components/UIAtoms';

export default function ContactPage() {
  const mapLinks = {
    dharampeth: "https://www.google.com/maps/search/?api=1&query=Atlanta+Computer+Institute+Dharampeth+Nagpur",
    medical: "https://www.google.com/maps/search/?api=1&query=Atlanta+Computer+Institute+Medical+Square+Nagpur"
  };

  return (
    <main>
      <Section className="bg-slate-50 dark:bg-slate-900/30 pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Visit Our Centers</h1>
          <p className="text-xl text-[var(--muted)]">Take the first step towards your global career with a free face-to-face counseling session.</p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Dharampeth Center */}
          <div className="card-style group flex flex-col h-full p-10">
            <div className="flex items-start justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-brand-navy text-white flex items-center justify-center">
                <MapPin size={28} />
              </div>
              <a href={mapLinks.dharampeth} target="_blank" className="text-xs font-black uppercase tracking-widest text-brand-accent hover:underline flex items-center gap-2">
                Directions <Navigation size={14} />
              </a>
            </div>
            
            <h3 className="text-3xl font-black mb-2">Dharampeth Center</h3>
            <p className="text-sm font-bold text-red-600 mb-8 uppercase tracking-widest">Main Corporate Office</p>
            
            <MapEmbed query="Atlanta Computer Institute Dharampeth Nagpur" />

            <div className="my-8 space-y-6 flex-grow">
              <div className="flex gap-4">
                <MapPin className="text-brand-accent flex-shrink-0" size={24} />
                <p className="text-[var(--muted)] text-lg leading-relaxed">
                  Plot No. 12, West High Court Road, Dharampeth, Nagpur - 440010
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-brand-navy dark:text-slate-100">
                    <Phone size={18} />
                  </div>
                  <span className="font-bold">+91 9028157794</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-brand-navy dark:text-slate-100">
                    <Mail size={18} />
                  </div>
                  <span className="font-bold">atlantaworld@gmail.com</span>
                </div>
              </div>
            </div>
            
            <Button variant="primary" href={mapLinks.dharampeth} target="_blank" className="w-full">
              Open Full Map <ExternalLink size={18} />
            </Button>
          </div>

          {/* Medical Square Center */}
          <div className="card-style group flex flex-col h-full p-10">
            <div className="flex items-start justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-brand-navy text-white flex items-center justify-center">
                <MapPin size={28} />
              </div>
              <a href={mapLinks.medical} target="_blank" className="text-xs font-black uppercase tracking-widest text-brand-accent hover:underline flex items-center gap-2">
                Directions <Navigation size={14} />
              </a>
            </div>
            
            <h3 className="text-3xl font-black mb-2">Medical Square</h3>
            <p className="text-sm font-bold text-red-600 mb-8 uppercase tracking-widest">Regional Training Hub</p>

            <MapEmbed query="Atlanta Computer Institute Medical Square Nagpur" />

            <div className="my-8 space-y-6 flex-grow">
              <div className="flex gap-4">
                <MapPin className="text-brand-accent flex-shrink-0" size={24} />
                <p className="text-[var(--muted)] text-lg leading-relaxed">
                  Second Floor, Landmark Bldg, Medical Square, Nagpur - 440003
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-brand-navy dark:text-slate-100">
                    <Phone size={18} />
                  </div>
                  <span className="font-bold">+91 9970198839</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-brand-navy dark:text-slate-100">
                    <Mail size={18} />
                  </div>
                  <span className="font-bold">atlantaworld@gmail.com</span>
                </div>
              </div>
            </div>

            <Button variant="primary" href={mapLinks.medical} target="_blank" className="w-full">
              Open Full Map <ExternalLink size={18} />
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
