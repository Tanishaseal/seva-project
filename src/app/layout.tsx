import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seva-project.org"),
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "https://www.seva-project.org",
    siteName: siteConfig.orgFullName,
    images: [
      {
        url: "/logo.jpg",
        width: 449,
        height: 445,
        alt: `${siteConfig.name} Logo`,
        type: "image/jpeg",
      },
      {
        url: "/logo.png",
        width: 449,
        height: 445,
        alt: `${siteConfig.name} Logo`,
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
