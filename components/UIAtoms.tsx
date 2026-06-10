'use client';

import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';

export const Section = ({ children, id, className = "" }: { children: React.ReactNode, id?: string, className?: string }) => (
  <section id={id} className={`section-padding ${className}`}>
    {children}
  </section>
);

export const Button = ({ 
  children, 
  className = "", 
  variant = 'primary',
  href,
  target
}: { 
  children: React.ReactNode, 
  className?: string, 
  variant?: 'primary' | 'secondary' | 'whatsapp',
  href?: string,
  target?: string
}) => {
  const baseClasses = variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-whatsapp';
  
  if (href) {
    return (
      <NextLink href={href} target={target} className={`${baseClasses} ${className}`}>
        {children}
      </NextLink>
    );
  }
  
  return (
    <button className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

export const Logo = () => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-sm border border-slate-100">
      <Image 
        src="/atlanta-overseas-cropped.png" 
        alt="Atlanta Overseas" 
        width={40} 
        height={40} 
        className="object-contain group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <div className="flex flex-col">
      <span className="font-extrabold text-xl leading-none tracking-tight text-[var(--foreground)] transition-colors duration-300 uppercase">Atlanta</span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-red-600 font-bold">Overseas Education</span>
    </div>
  </div>
);

export const MapEmbed = ({ query }: { query: string }) => {
  const [loadMap, setLoadMap] = React.useState(false);
  const encodedQuery = encodeURIComponent(query);
  const iframeSrc = `https://maps.google.com/maps?q=${encodedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const [NavigationIcon, setNavigationIcon] = React.useState<any>(null);

  React.useEffect(() => {
    import('lucide-react').then(mod => setNavigationIcon(() => mod.Navigation));
  }, []);

  return (
    <div className="w-full h-[300px] bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden relative group">
      {!loadMap ? (
        <div 
          onClick={() => setLoadMap(true)}
          className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors z-10"
        >
          <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
            {NavigationIcon && <NavigationIcon size={32} />}
          </div>
          <p className="mt-4 font-bold text-sm text-[var(--muted)]">Click to Load Interactive Map</p>
        </div>
      ) : (
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src={iframeSrc}
          className="grayscale dark:invert-[0.9] dark:hue-rotate-180"
        ></iframe>
      )}
    </div>
  );
};
