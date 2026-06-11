import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Atlanta Overseas Education, our 15+ years of legacy, and how we help students in Nagpur achieve their global education dreams.',
  alternates: {
    canonical: 'https://atlanta-overseas.vercel.app/about',
  },
};

export default function Page() {
  return <AboutClient />;
}
