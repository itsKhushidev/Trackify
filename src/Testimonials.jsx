import React from 'react';
import "./App.css";

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Student",
    text: "I’ve tried habit apps before, but this one actually stuck. The streak system keeps me going.",
    avatar: "https://i.pravatar.cc/100?img=5"
  },
  {
    name: "Aman Verma",
    role: "Developer",
    text: "The UI is simple, but the insights are powerful. I finally built a consistent coding routine.",
    avatar: "https://i.pravatar.cc/100?img=12"
  },
  {
    name: "Neha Kapoor",
    role: "Fitness Enthusiast",
    text: "Tracking workouts daily felt boring before. Now it feels like a game I don’t want to lose.",
    avatar: "https://i.pravatar.cc/100?img=20"
  }
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">

        {/* Header */}
        <div className="testimonials-header">
          <h2>People are already seeing results</h2>
          <p>Real users. Real consistency. Real progress.</p>
        </div>

        {/* Cards */}
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              
              <p className="testimonial-text">“{item.text}”</p>

              <div className="testimonial-user">
                <img src={item.avatar} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;