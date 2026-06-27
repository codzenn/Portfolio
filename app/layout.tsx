import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const defaultTitle = `${siteConfig.name} | ${siteConfig.role}`;
const portfolioKeywords = [
  "Full-Stack Developer",
  "Backend Engineer",
  "Next.js",
  "React.js",
  "TypeScript",
  "Node.js",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Developer Portfolio",
];

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  description: siteConfig.description,
  keywords: portfolioKeywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: defaultTitle,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
    url: siteUrl,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: siteConfig.description,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  email: siteConfig.email,
  url: siteUrl,
  addressCountry: siteConfig.location,
  sameAs: [siteConfig.githubProfile, siteConfig.linkedinProfile],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "REST APIs",
    "Cloud Infrastructure",
    "AI Product Workflows",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 antialiased`}>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-slate-950"
        >
          Skip to content
        </a>
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_35%),linear-gradient(180deg,#020617_0%,#020617_45%,#030712_100%)]" />
          <Navbar />
          <div id="content">{children}</div>
          <Footer />
        </div>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
