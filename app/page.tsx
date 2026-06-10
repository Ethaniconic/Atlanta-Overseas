'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Stethoscope, 
  GraduationCap, 
  Languages, 
  Star,
  Users,
  Award,
  ArrowRight,
  Compass,
  MapPin
} from 'lucide-react';
import NextLink from 'next/link';
import { Section, Button } from '@/components/UIAtoms';

export default function HomePage() {
  const whatsappUrl = "https://wa.me/15556769761?text=Hi,%20I%20am%20interested%20in%20Overseas%20Education%20counseling%20at%20Atlanta.";

  return (
    <main>
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-12 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-brand-navy dark:text-slate-200 text-xs font-bold uppercase tracking-wider mb-8">
              <Compass className="text-brand-accent animate-spin-slow" size={14} />
              Nagpur&apos;s #1 Overseas Consultant
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
              Your Gateway to <span className="text-brand-accent">Global Success.</span>
            </h1>
            <p className="text-xl text-[var(--muted)] mb-10 max-w-xl leading-relaxed">
              Unlock world-class opportunities with 15+ years of legacy. Expert guidance for MBBS Abroad, IELTS, and Foreign Languages. 
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button variant="whatsapp" href={whatsappUrl} className="px-8 py-4 text-lg shadow-xl shadow-emerald-500/20">
                <MessageCircle size={24} />
                Chat on WhatsApp
              </Button>
              <Button variant="secondary" href="/services" className="px-8 py-4 text-lg">
                Explore Programs
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-[var(--card)] rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" 
                alt="Students Graduation" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Star fill="#f59e0b" stroke="none" size={16} /><Star fill="#f59e0b" stroke="none" size={16} /><Star fill="#f59e0b" stroke="none" size={16} /><Star fill="#f59e0b" stroke="none" size={16} /><Star fill="#f59e0b" stroke="none" size={16} />
                </div>
                <p className="font-bold text-lg">&quot;The best decision for my career!&quot;</p>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-accent/20 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-navy/20 rounded-full blur-[100px] -z-10"></div>
          </motion.div>
        </div>
      </Section>

      {/* Trust Bar */}
      <div className="bg-[var(--card)] border-y border-[var(--card-border)] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Years of Legacy", value: "15+", icon: Award },
              { label: "Google Rating", value: "4.9★", icon: Star },
              { label: "Alumni Network", value: "4000+", icon: Users },
              { label: "Nagpur Centers", value: "2", icon: MapPin },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 text-brand-accent">
                  <stat.icon size={24} />
                </div>
                <span className="text-3xl font-black block tracking-tight">{stat.value}</span>
                <span className="text-xs text-[var(--muted)] font-bold uppercase tracking-widest mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">How we help you lead.</h2>
            <p className="text-[var(--muted)] text-lg">We provide expert guidance at every step of your international journey.</p>
          </div>
          <Button variant="secondary" href="/services">
            View All Services <ArrowRight size={18} />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "MBBS Abroad", icon: Stethoscope, color: "text-blue-500", bg: "bg-blue-500/10" },
            { title: "IELTS / PTE", icon: GraduationCap, color: "text-emerald-500", bg: "bg-emerald-500/10" },
            { title: "Foreign Languages", icon: Languages, color: "text-amber-500", bg: "bg-amber-500/10" }
          ].map((item, idx) => (
            <div key={idx} className="card-style group">
              <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <NextLink href="/services" className="text-brand-accent font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </NextLink>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
