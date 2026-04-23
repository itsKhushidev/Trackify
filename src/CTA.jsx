import React from 'react';
import "./App.css";

function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">

        <h2>Start building better habits today</h2>
        <p>
          No complicated systems. Just simple tools to help you stay consistent.
        </p>

        <div className="cta-buttons">
          <button className="cta-btn primary">Get Started Free</button>
          <button className="cta-btn secondary">Explore Features</button>
        </div>

      </div>
    </section>
  );
}

export default CTA;