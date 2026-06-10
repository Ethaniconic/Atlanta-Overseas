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
  title: "Atlanta Overseas Education | Nagpur's Leading Global Education Consultant",
  description: "Expert guidance for MBBS abroad, IELTS coaching, and foreign language classes in Nagpur. 15+ years of legacy in Dharampeth & Medical Square.",
  keywords: ["MBBS abroad Nagpur", "IELTS coaching Nagpur", "German language classes Nagpur", "Foreign education consultant Nagpur"],
  icons: {
    icon: "/atlanta-overseas-cropped.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={plusJakartaSans.variable}>
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
