import type { Metadata } from "next";
import "./globals.css";
import DisclaimerGate from "@/components/DisclaimerGate";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SCL",
  description: "Expert legal services in Litigation, Fintech, Real Estate and M&A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body
        className="min-h-screen flex flex-col font-sans bg-white "
      >
        <DisclaimerGate>      
        <Header />
        <main>{children}</main>
        <Footer/>
        </DisclaimerGate>
      </body>
    </html>
  );
}
