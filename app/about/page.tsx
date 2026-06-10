'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, MapPin, CheckCircle2, History, Target, TrendingUp } from 'lucide-react';
import { Section } from '@/components/UIAtoms';

export default function AboutPage() {
  const stats = [
    { label: "Years of Legacy", value: "15+", icon: Award },
    { label: "Successful Placements", value: "4000+", icon: Users },
    { label: "Expert Consultants", value: "20+", icon: History },
    { label: "Nagpur Locations", value: "2", icon: MapPin },
  ];

  return (
    <main>
      <Section className="bg-slate-950 text-white pt-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Nagpur&apos;s Most Trusted Gateway to the World.</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Atlanta Overseas Education is a premium division of the Atlanta Computer Institute, established in 2011. For over a decade, we have been the first choice for students in Central India seeking global careers.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <stat.icon className="text-brand-accent mb-4" size={32} />
              <div className="text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden border-[10px] border-white dark:border-slate-800 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" alt="Our Team" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 p-8 bg-brand-accent rounded-3xl text-brand-navy font-black text-2xl shadow-xl">
              Est. 2011
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-black mb-10 tracking-tight">Our Mission & Values</h2>
            <div className="space-y-8">
              {[
                { title: "Transparency First", desc: "No hidden fees, no false promises. We provide honest feedback on your profile and potential.", icon: Target },
                { title: "Personalized Care", desc: "We treat every student like family, ensuring you have support from the first mock test to your first day abroad.", icon: Users },
                { title: "Unmatched Expertise", desc: "Our team stays updated with the latest visa rules and admission criteria globally.", icon: TrendingUp }
              ].map((val, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center flex-shrink-0">
                    <val.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">{val.title}</h4>
                    <p className="text-[var(--muted)] leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
