'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ServicePillars from '@/components/ServicePillars';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AccessibilityWidget from '@/components/AccessibilityWidget';

/* ============================================================
   S NEW ROOF INC. — MAIN PAGE
   Assembles all sections into a single cohesive landing page
   ============================================================ */

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'var(--snr-canvas)',
      }}
    >
      <Header />
      <Hero />
      <Stats />
      <ServicePillars />
      <CTA />
      <div style={{ marginTop: 'auto' }}>
        <Footer />
      </div>
      <AccessibilityWidget />
    </div>
  );
}
