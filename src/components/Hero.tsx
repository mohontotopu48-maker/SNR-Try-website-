'use client';

import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

/* ============================================================
   S NEW ROOF INC. — HERO SECTION (APPLE-STYLE LIGHT THEME)
   Background: Aerial drone roof shot with light gradient overlay
   Right Side: Premium white form card with proper accessibility
   ============================================================ */

export default function Hero() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    service: '',
  });
  const [consentChecked, setConsentChecked] = useState(false);
  const { toast } = useToast();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!consentChecked) {
      toast({ title: 'Consent Required', description: 'Please check the consent box to proceed.', variant: 'destructive' });
      return;
    }
    toast({ title: 'Request Submitted!', description: 'Your free roof inspection has been scheduled. We will contact you shortly.' });
  }, [consentChecked, toast]);

  return (
    <section className="snr-hero-v2" aria-labelledby="hero-heading">
      {/* Background Image + Gradient Overlay */}
      <div className="snr-hero-v2-bg" aria-hidden="true">
        <img
          src="/images/hero-aerial-roof.jpg"
          alt=""
          className="snr-hero-v2-bg-img"
          loading="eager"
        />
        <div className="snr-hero-v2-overlay" />
      </div>

      {/* Content Container */}
      <div className="snr-container snr-hero-v2-container">
        {/* ── LEFT: Hero Copy ── */}
        <div className="snr-hero-v2-copy">
          <span className="snr-hero-v2-kicker">Welcome</span>
          <h1 id="hero-heading" className="snr-hero-v2-title">
            Quality and Trusted<br />Roofing Experts
          </h1>
          <p className="snr-hero-v2-subtitle">
            We are the go-to provider for roof repair, inspection, and new roof
            installation in California. Licensed, bonded, and insured since 2003.
          </p>
          <div className="snr-hero-v2-proof">
            <div className="snr-hero-v2-proof-item">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1L10.5 5.5L15.5 6.3L11.75 9.8L12.6 14.8L8 12.3L3.4 14.8L4.25 9.8L0.5 6.3L5.5 5.5L8 1Z" fill="currentColor" />
              </svg>
              20+ Years of Experience
            </div>
            <div className="snr-hero-v2-proof-divider" aria-hidden="true" />
            <div className="snr-hero-v2-proof-item">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1L10.5 5.5L15.5 6.3L11.75 9.8L12.6 14.8L8 12.3L3.4 14.8L4.25 9.8L0.5 6.3L5.5 5.5L8 1Z" fill="currentColor" />
              </svg>
              2,400+ Projects Completed
            </div>
          </div>
        </div>

        {/* ── RIGHT: Form Card ── */}
        <div className="snr-hero-v2-form-card">
          <h2 className="snr-hero-v2-form-title">
            Schedule your FREE Roof Inspection/Estimate Today!
          </h2>

          <form className="snr-hero-v2-form" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="snr-hero-v2-field">
              <label htmlFor="hero-fullName" className="snr-hero-v2-label">Full Name</label>
              <input
                id="hero-fullName"
                name="fullName"
                type="text"
                className="snr-hero-v2-input"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            {/* Phone Number */}
            <div className="snr-hero-v2-field">
              <label htmlFor="hero-phone" className="snr-hero-v2-label">Phone Number</label>
              <input
                id="hero-phone"
                name="phone"
                type="tel"
                className="snr-hero-v2-input"
                placeholder="(714) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="tel"
              />
            </div>

            {/* Email Address */}
            <div className="snr-hero-v2-field">
              <label htmlFor="hero-email" className="snr-hero-v2-label">Email Address</label>
              <input
                id="hero-email"
                name="email"
                type="email"
                className="snr-hero-v2-input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            {/* Property Address */}
            <div className="snr-hero-v2-field">
              <label htmlFor="hero-address" className="snr-hero-v2-label">Property Address</label>
              <input
                id="hero-address"
                name="address"
                type="text"
                className="snr-hero-v2-input"
                placeholder="123 Main St, Santa Ana, CA"
                value={formData.address}
                onChange={handleChange}
                autoComplete="street-address"
              />
            </div>

            {/* Service Needed */}
            <div className="snr-hero-v2-field">
              <label htmlFor="hero-service" className="snr-hero-v2-label">Service Needed</label>
              <select
                id="hero-service"
                name="service"
                className="snr-hero-v2-input snr-hero-v2-select"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a Service</option>
                <option value="Roof Inspection">Roof Inspection</option>
                <option value="Roof Repair">Roof Repair</option>
                <option value="Complete Roof Replacement">Complete Roof Replacement</option>
                <option value="Commercial Services">Commercial Services</option>
                <option value="Emergency Tarping">Emergency Tarping</option>
                <option value="Solar Integration">Solar Integration</option>
              </select>
            </div>

            {/* Consent Checkbox */}
            <div className="snr-hero-v2-consent">
              <label className="snr-hero-v2-consent-label">
                <input
                  type="checkbox"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  className="snr-hero-v2-consent-checkbox"
                  required
                />
                <span className="snr-hero-v2-consent-text">
                  By checking, you authorize S New Roof Inc. to reach out to you via text for information about appointment setting and any other project needs. We will never share your personal information with third parties for marketing purposes. Messaging rates vary based on your project needs. You can opt out at any time. Message/data rates apply. Consent is not a condition of purchase. All advertised offers are subject to financing approval.{' '}
                  <a href="#contact" className="snr-hero-v2-consent-link">Terms &amp; Conditions</a>{' | '}
                  <a href="#contact" className="snr-hero-v2-consent-link">Privacy Policy</a>.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="snr-hero-v2-submit">
              Schedule FREE Estimate &gt;
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
