import React from "react";
import "./App.css";


const featuresData = [
  {
    icon: "📊",
    title: "Smart Tracking",
    desc: "Log habits effortlessly and visualize your daily progress in a clean dashboard."
  },
  {
    icon: "🧠",
    title: "AI Insights",
    desc: "Understand patterns and get suggestions to improve consistency over time."
  },
  {
    icon: "🔥",
    title: "Streak System",
    desc: "Build momentum with streaks that keep you motivated every single day."
  },
  {
    icon: "⏱️",
    title: "Flexible Routines",
    desc: "Customize habits based on your schedule — daily, weekly, or custom."
  },
  {
    icon: "📈",
    title: "Progress Analytics",
    desc: "Track growth with detailed charts and performance summaries."
  },
  {
    icon: "🔔",
    title: "Smart Reminders",
    desc: "Never miss a habit with intelligent and timely notifications."
  }
];

function Feature() {
  return (
    <section className="features">
      <div className="features-container">

        <div className="features-header">
          <h2>Everything you need to stay consistent</h2>
          <p>
            Simple tools, powerful results — designed to help you build habits that last.
          </p>
        </div>

        <div className="features-grid">
          {featuresData.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


export default Feature;