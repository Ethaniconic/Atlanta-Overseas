import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Home',
  description: "Expert guidance for MBBS abroad, IELTS coaching, and foreign language classes in Nagpur. 15+ years of legacy in Dharampeth & Medical Square.",
  alternates: {
    canonical: 'https://atlanta-overseas.vercel.app',
  },
};

export default function Page() {
  return <HomeClient />;
}
