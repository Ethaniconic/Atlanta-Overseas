import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Our Services & Programs',
  description: 'Explore our services: MBBS Abroad, IELTS Coaching, Foreign Language Classes (German, French), and complete Visa Processing Assistance in Nagpur.',
  alternates: {
    canonical: 'https://atlanta-overseas.vercel.app/services',
  },
};

export default function Page() {
  return <ServicesClient />;
}
