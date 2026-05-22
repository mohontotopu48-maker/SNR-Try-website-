'use client';

import { useState, useRef, useCallback } from 'react';

/* ============================================================
   S NEW ROOF INC. — HERO SECTION (CONVERSION-OPTIMIZED)
   Left: Hero copy + Service Request Card with image upload
   Right: Testimonial Video Card
   ============================================================ */

const serviceOptions = [
  'Select a Service',
  'Roof Inspection',
  'Roof Repair',
  'Complete Roof Replacement',
  'Commercial Services',
];

export default function Hero() {
  const [selectedService, setSelectedService] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = useCallback(() => {
    setDropdownOpen((prev) => !prev);
  }, []);

  const handleServiceSelect = useCallback((service: string) => {
    setSelectedService(service);
    setDropdownOpen(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    const names = files.map((f) => f.name);
    setUploadedFiles((prev) => [...prev, ...names]);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const names = Array.from(e.target.files).map((f) => f.name);
      setUploadedFiles((prev) => [...prev, ...names]);
    }
  }, []);

  const handleFormSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your service request has been submitted. We will contact you shortly.');
  }, []);

  return (
    <section className="snr-hero" aria-labelledby="hero-heading">
      <div className="snr-container">
        <div className="snr-hero-inner">
          {/* ── LEFT: Hero Copy + Service Request Card ── */}
          <div className="snr-hero-left">
            {/* Hero Text Block */}
            <div className="snr-hero-content">
              <span className="snr-hero-overline snr-animate-in snr-animate-delay-1">
                Welcome
              </span>

              <h1 id="hero-heading" className="snr-hero-title snr-animate-in snr-animate-delay-2">
                Quality and Trusted Roofing Experts
              </h1>

              <p className="snr-hero-subtitle snr-animate-in snr-animate-delay-3">
                We are the go-to provider for roof repair, inspection, and new roof
                installation in California.
              </p>

              <div className="snr-hero-proof snr-animate-in snr-animate-delay-4">
                <div className="snr-hero-proof-item">
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 1L10.5 5.5L15.5 6.3L11.75 9.8L12.6 14.8L8 12.3L3.4 14.8L4.25 9.8L0.5 6.3L5.5 5.5L8 1Z" fill="currentColor" />
                  </svg>
                  20+ Years of Experience
                </div>
              </div>
            </div>

            {/* ── Service Request Card ── */}
            <div className="snr-request-card snr-animate-in snr-animate-delay-4">
              <div className="snr-request-card-header">
                <span className="snr-request-card-title">Request Service</span>
                <span className="snr-request-card-badge">Free Estimate</span>
              </div>

              <form className="snr-request-form" onSubmit={handleFormSubmit}>
                {/* Name */}
                <div className="snr-request-field">
                  <label htmlFor="req-name" className="snr-request-label">Full Name</label>
                  <input
                    id="req-name"
                    type="text"
                    className="snr-request-input"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="snr-request-field">
                  <label htmlFor="req-phone" className="snr-request-label">Phone Number</label>
                  <input
                    id="req-phone"
                    type="tel"
                    className="snr-request-input"
                    placeholder="(714) 000-0000"
                    required
                  />
                </div>

                {/* Email */}
                <div className="snr-request-field">
                  <label htmlFor="req-email" className="snr-request-label">Email Address</label>
                  <input
                    id="req-email"
                    type="email"
                    className="snr-request-input"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {/* Service Dropdown */}
                <div className="snr-request-field">
                  <label htmlFor="req-service" className="snr-request-label">Service Needed</label>
                  <div className="snr-request-dropdown" ref={dropdownRef}>
                    <button
                      type="button"
                      className={`snr-request-dropdown-trigger ${selectedService && selectedService !== 'Select a Service' ? 'snr-request-dropdown-trigger--selected' : ''}`}
                      onClick={handleDropdownToggle}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="listbox"
                    >
                      <span>{selectedService || 'Select a Service'}</span>
                      <svg
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                        aria-hidden="true"
                        style={{
                          transition: 'transform 0.2s ease',
                          transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                          flexShrink: 0,
                        }}
                      >
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {dropdownOpen && (
                      <div className="snr-request-dropdown-list" role="listbox">
                        {serviceOptions.filter((o) => o !== 'Select a Service').map((option) => (
                          <button
                            key={option}
                            type="button"
                            className={`snr-request-dropdown-option ${selectedService === option ? 'snr-request-dropdown-option--active' : ''}`}
                            role="option"
                            aria-selected={selectedService === option}
                            onClick={() => handleServiceSelect(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Image Upload Dropzone */}
                <div className="snr-request-field">
                  <label className="snr-request-label">Roof Area Images</label>
                  <div
                    className={`snr-dropzone ${isDragOver ? 'snr-dropzone--active' : ''} ${uploadedFiles.length > 0 ? 'snr-dropzone--has-files' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    role="button"
                    tabIndex={0}
                    aria-label="Upload roof area images"
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click(); }}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      capture="environment"
                      onChange={handleFileSelect}
                      style={{ display: 'none' }}
                      aria-hidden="true"
                    />

                    <div className="snr-dropzone-content">
                      <div className="snr-dropzone-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                          <circle cx="12" cy="13" r="4" />
                        </svg>
                      </div>
                      <div className="snr-dropzone-text">
                        <span className="snr-dropzone-primary">Drag & Drop or Tap Camera</span>
                        <span className="snr-dropzone-secondary">to attach roof area images for an instant AI estimate</span>
                      </div>
                    </div>

                    {uploadedFiles.length > 0 && (
                      <div className="snr-dropzone-files">
                        {uploadedFiles.map((name, i) => (
                          <span key={i} className="snr-dropzone-file-tag">
                            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                              <path d="M4 8.5L7 11.5L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {name.length > 20 ? name.substring(0, 17) + '...' : name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="snr-request-submit">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Get Your Free Estimate
                </button>
              </form>
            </div>
          </div>

          {/* ── RIGHT: Testimonial Video Card ── */}
          <div className="snr-hero-right snr-animate-in snr-animate-delay-3">
            <div className="snr-video-card">
              <div className="snr-video-wrapper">
                <img
                  src="/images/image_343083.jpg"
                  alt="S New Roof project showcase — professional roofing installation"
                  className="snr-video-poster"
                  loading="eager"
                />
                {/* Gradient overlay */}
                <div className="snr-video-gradient" />

                {/* Play button overlay */}
                <button
                  type="button"
                  className="snr-video-play-btn"
                  aria-label="Play testimonial video"
                  onClick={() => alert('Video player would open here.')}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>

                {/* Video info overlay */}
                <div className="snr-video-info">
                  <span className="snr-video-badge">Client Testimonial</span>
                  <p className="snr-video-caption">Hear from homeowners who trust S New Roof</p>
                </div>
              </div>

              {/* Trust stats below video */}
              <div className="snr-video-stats">
                <div className="snr-video-stat">
                  <span className="snr-video-stat-value">2,400+</span>
                  <span className="snr-video-stat-label">Projects</span>
                </div>
                <div className="snr-video-stat-divider" />
                <div className="snr-video-stat">
                  <span className="snr-video-stat-value">4.9</span>
                  <span className="snr-video-stat-label">Rating</span>
                </div>
                <div className="snr-video-stat-divider" />
                <div className="snr-video-stat">
                  <span className="snr-video-stat-value">100%</span>
                  <span className="snr-video-stat-label">Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
