'use client';

/* ============================================================
   S NEW ROOF INC. — PROCESS PIPELINE
   "How It Works" — 3-step process section
   ============================================================ */

export default function ProcessPipeline() {
  return (
    <section className="snr-section-alt" id="process" aria-labelledby="process-heading">
      <div className="snr-container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', marginBottom: '56px' }}>
          <span className="snr-overline-orange">How It Works</span>
          <h2 id="process-heading" className="snr-heading-lg" style={{ marginTop: '12px' }}>
            Starting your project with S New Roof is very simple.
          </h2>
          <p className="snr-body-sm" style={{ marginTop: '12px', color: 'var(--snr-text-muted)' }}>
            Just follow these 3 easy steps, and an expert will contact you to schedule
            a free inspection of your property.
          </p>
        </div>

        <div className="snr-process-steps">
          {/* Step 1 */}
          <div className="snr-process-step">
            <div className="snr-process-number">01</div>
            <h3 className="snr-process-title">Schedule a Quote</h3>
            <p className="snr-process-desc">
              Get an accurate estimate with the best options that guarantee a permanent
              and quality solution for your home.
            </p>
          </div>

          {/* Step 2 */}
          <div className="snr-process-step">
            <div className="snr-process-number">02</div>
            <h3 className="snr-process-title">Receive Consultation</h3>
            <p className="snr-process-desc">
              Resolve any questions with an expert regarding the current state of your
              roof and necessary repairs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="snr-process-step">
            <div className="snr-process-number">03</div>
            <h3 className="snr-process-title">Start Your Project</h3>
            <p className="snr-process-desc">
              We&apos;ll set a date for your project to ensure impeccable and durable work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
