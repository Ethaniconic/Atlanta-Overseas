import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atlanta-overseas.vercel.app"),
  title: {
    default: "Atlanta Overseas Education | Nagpur's Leading Global Education Consultant",
    template: "%s | Atlanta Overseas Education",
  },
  description: "Expert guidance for MBBS abroad, IELTS coaching, and foreign language classes in Nagpur. 15+ years of legacy in Dharampeth & Medical Square.",
  keywords: ["MBBS abroad Nagpur", "IELTS coaching Nagpur", "German language classes Nagpur", "Foreign education consultant Nagpur", "Atlanta Overseas Education"],
  openGraph: {
    title: "Atlanta Overseas Education | Nagpur's Leading Global Education Consultant",
    description: "Expert guidance for MBBS abroad, IELTS coaching, and foreign language classes in Nagpur.",
    url: "https://atlanta-overseas.vercel.app",
    siteName: "Atlanta Overseas Education",
    images: [
      {
        url: "/atlanta-overseas.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlanta Overseas Education",
    description: "Expert guidance for MBBS abroad, IELTS coaching, and foreign language classes in Nagpur.",
    images: ["/atlanta-overseas.png"],
  },
  icons: {
    icon: "/atlanta-overseas-cropped.png",
  },
  verification: {
    google: "SuAq-euq3XYrZi5neitcYt391ELoJ8LGjjpjhJpXd80",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Atlanta Overseas Education",
    "url": "https://atlanta-overseas.vercel.app",
    "logo": "https://atlanta-overseas.vercel.app/atlanta-overseas-cropped.png",
    "description": "Expert guidance for MBBS abroad, IELTS coaching, and foreign language classes in Nagpur.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+15556769761",
      "contactType": "Customer Service"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
