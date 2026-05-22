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
  title: "S New Roof Inc. — Commercial & Residential Roofing",
  description:
    "Full-spectrum commercial and residential roofing asset management. Maintenance, logistics, construction, and compliance — end-to-end.",
  keywords: [
    "commercial roofing",
    "residential roofing",
    "roof inspection",
    "Title 24",
    "emergency tarping",
    "solar integration",
    "S New Roof",
  ],
  authors: [{ name: "S New Roof Inc." }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "S New Roof Inc. — Precision Roofing for the Built Environment",
    description:
      "From emergency tarping to Title 24 compliance — end-to-end roofing asset management with zero compromise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
