import React from 'react';
import "./App.css";


const benefits = [
  "Stay consistent without overthinking your routine",
  "Build discipline with small daily wins",
  "Reduce procrastination and mental clutter",
  "Turn goals into automatic habits",
  "Feel progress, not just track it"
];

function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits-container">

        {/* LEFT SIDE (IMAGE / VISUAL) */}
        <div className="benefits-visual">
          <div className="visual-card">
            <h4>Today's Progress</h4>
            <div className="progress">
              <div className="progress-bar"></div>
            </div>
            <p>4/5 habits completed</p>
          </div>

          <div className="visual-floating">
            🔥 12 day streak
          </div>
        </div>

        {/* RIGHT SIDE (TEXT) */}
        <div className="benefits-content">
          <h2>Why people stick with it</h2>

          <p className="subtitle">
            It’s not just about tracking habits — it’s about finally staying consistent.
          </p>

          <ul className="benefits-list">
            {benefits.map((item, index) => (
              <li key={index}>
                <span className="check">✔</span>
                {item}
              </li>
            ))}
          </ul>

          <button className="benefits-btn">
            Start your journey
          </button>
        </div>

      </div>
    </section>
  );
}

export default Benefits;