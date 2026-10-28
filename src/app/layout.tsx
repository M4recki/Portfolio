import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Inter_Tight, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { SITE, SITE_URL } from "@/lib/site";
import { businessSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const interTight = Inter_Tight({
  weight: ["500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter-tight",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.title,
    template: "%s | Marek Barański",
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Marek Barański — strony internetowe dla rzemieślników",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/og.jpg"],
  },
  icons: [
    {
      rel: "icon",
      url: "/icon.svg",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#0b1118",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${interTight.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={websiteSchema} />
        <JsonLd data={businessSchema} />
        <ScrollProgress />
        <Link href="#main" className="skip-link">
          Przejdź do treści
        </Link>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
