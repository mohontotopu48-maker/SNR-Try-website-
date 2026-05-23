import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S New Roof Inc. — Quality and Trusted Roofing Experts",
  description:
    "We are the go-to provider for roof repair, inspection, and new roof installation in California. Over 20 years of experience. Licensed C-39 #1122623.",
  keywords: [
    "commercial roofing",
    "residential roofing",
    "roof repair",
    "roof installation",
    "Title 24",
    "emergency tarping",
    "solar integration",
    "S New Roof",
    "California roofing contractor",
  ],
  authors: [{ name: "S New Roof Inc." }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "S New Roof Inc. — Quality and Trusted Roofing Experts",
    description:
      "Roof repair, inspection, and new roof installation in California. Over 20 years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#3A3F44] focus:shadow-lg">
          Skip to main content
        </a>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
