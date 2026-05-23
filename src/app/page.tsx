'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ServiceGrid from '@/components/ServiceGrid';
import ProcessPipeline from '@/components/ProcessPipeline';
import Differentiators from '@/components/Differentiators';
import Footer from '@/components/Footer';
import AccessibilityWidget from '@/components/AccessibilityWidget';
import FloatingAIChatTab from '@/components/FloatingAIChatTab';

/* ============================================================
   S NEW ROOF INC. — MAIN PAGE
   Single-page layout assembling all sections
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
      <About />
      <ServiceGrid />
      <ProcessPipeline />
      <Differentiators />
      <div style={{ marginTop: 'auto' }}>
        <Footer />
      </div>
      <AccessibilityWidget />
      <FloatingAIChatTab />
    </div>
  );
}
