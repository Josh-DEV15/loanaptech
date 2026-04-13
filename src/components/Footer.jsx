import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <h2>LoanAptech</h2>
            <p>
Your trusted partner for fast, flexible, and transparent loan solutions.
            </p>
          </div>

          {/* Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Loan Products</a></li>
              <li><a href="#">Apply Now</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          {/* More Links */}
          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <p>Email: support@yourbrand.com</p>
            <p>Phone: +1 (555) 456-7890</p>
            <p>Hours: Mon-Fri, 9:00 AM - 6:00 PM EST</p>
            <p>Location: Houston, TX</p>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} LoanAptech. All rights reserved.</p>
          <p>Licensed by relevant financial authorities.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;