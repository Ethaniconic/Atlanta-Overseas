import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Visit Atlanta Overseas Education in Nagpur. We have centers in Dharampeth and Medical Square. Book your free counseling session today.',
  alternates: {
    canonical: 'https://atlanta-overseas.vercel.app/contact',
  },
};

export default function Page() {
  return <ContactClient />;
}
