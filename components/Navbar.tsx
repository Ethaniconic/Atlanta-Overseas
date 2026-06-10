'use client';

import React from 'react';
import NextLink from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Logo, Button } from './UIAtoms';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;
    if (isMounted) setMounted(true);
    return () => { isMounted = false; };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="glass-nav border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <NextLink href="/">
          <Logo />
        </NextLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NextLink 
              key={link.href} 
              href={link.href} 
              className="text-sm font-semibold hover:text-brand-accent transition-colors"
            >
              {link.name}
            </NextLink>
          ))}
          
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-[var(--foreground)] border border-[var(--card-border)] shadow-sm"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                >
                  {theme === 'dark' ? <Sun size={18} className="text-brand-accent" /> : <Moon size={18} className="text-brand-accent" />}
                </motion.div>
              </AnimatePresence>
            </button>
          )}

          <Button variant="primary" href="/contact" className="text-sm">
            Book Free Counseling
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 w-full bg-[var(--background)] border-b border-[var(--card-border)] p-6 flex flex-col gap-4 md:hidden shadow-2xl z-40"
          >
            {navLinks.map((link) => (
              <NextLink 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="font-bold text-lg py-2 border-b border-slate-50 dark:border-slate-800"
              >
                {link.name}
              </NextLink>
            ))}
            <Button variant="primary" href="/contact" className="w-full py-4 mt-4">
              Book Free Counseling
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
