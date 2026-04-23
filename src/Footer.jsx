import React from 'react';
import "./App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">
          <h3>HabitFlow</h3>
          <p>Helping you stay consistent, one day at a time.</p>
        </div>

        {/* LINKS */}
        <div className="footer-links">

          <div>
            <h4>Product</h4>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Updates</li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 HabitFlow. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;