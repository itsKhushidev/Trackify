import React from "react";
import "./App.css";


function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-text">
          <h1>
            Build Better Habits,<br />
            One Day at a Time
          </h1>

          <p>
            Track your habits, stay consistent, and achieve your goals
            with AI-powered insights.
          </p>

          <div className="hero-buttons">
            <button className="btn primary">Get Started</button>
            <button className="btn secondary">Watch Demo</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-image">
          <img
            src="https://picsum.photos/500/350"
            alt="Habit Tracker Dashboard"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;