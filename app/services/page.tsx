'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, GraduationCap, Languages, FileCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Section, Button } from '@/components/UIAtoms';

export default function ServicesPage() {
  const whatsappUrl = "https://wa.me/919028157794?text=Hi,%20I%20am%20interested%20in%20Overseas%20Education%20counseling%20at%20Atlanta.";

  const services = [
    {
      title: "MBBS Abroad",
      desc: "Get admission in top-ranked medical universities in Georgia, Russia, Kazakhstan, Uzbekistan, and Kyrgyzstan. We handle everything from university selection to visa processing.",
      icon: Stethoscope,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      features: ["MCI/NMC Approved Universities", "Low Tuition Fees", "English Medium Curriculum", "Direct Admission"]
    },
    {
      title: "IELTS / PTE / TOEFL",
      desc: "Score high with Nagpur's most experienced trainers. Our flexible batches and personalized feedback ensure you meet the requirements of your dream university.",
      icon: GraduationCap,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      features: ["Small Batch Sizes", "Mock Tests Every Week", "Certified Trainers", "Latest Study Material"]
    },
    {
      title: "Foreign Languages",
      desc: "Master a new language with our immersive training programs. We offer certified courses in German (A1 to C1), French, and Spanish.",
      icon: Languages,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      features: ["GOETHE Exam Prep", "Native Level Fluency", "Interactive Sessions", "Weekend Batches Available"]
    },
    {
      title: "Visa & Documentation",
      desc: "Our meticulous approach to documentation ensures a high visa success rate. We assist with SOPs, LORs, and financial proofing.",
      icon: FileCheck,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      features: ["100% Documentation Support", "Visa Interview Prep", "Post-Visa Guidance", "Flight & Forex Help"]
    }
  ];

  return (
    <main>
      <Section className="bg-slate-50 dark:bg-slate-900/30 pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Our Premium Services</h1>
          <p className="text-xl text-[var(--muted)]">Comprehensive support for your global education journey, tailored for Nagpur&apos;s ambitious students.</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-8`}>
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl font-black mb-6">{service.title}</h2>
                  <p className="text-[var(--muted)] text-lg leading-relaxed mb-8">{service.desc}</p>
                  <Button variant="primary" href={whatsappUrl}>
                    Get Free Details <ArrowRight size={18} />
                  </Button>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                      <CheckCircle2 size={18} className="text-brand-accent flex-shrink-0" />
                      <span className="font-bold text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
}
