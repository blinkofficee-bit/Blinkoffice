import React, { useState } from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate newsletter subscription
    setTimeout(() => {
      setMessage('Thank you for subscribing to our newsletter!');
      setEmail('');
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 3000);
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Modern Footer */}
      <footer className="modern-footer">
        <div className="footer-main">
          <div className="container">
            <div className="row">
              {/* Company Info */}
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="footer-brand">
                  <div className="brand-container mb-4">
                    <span className="footer-brand-text">
                      <span style={{color: '#ff6b35', fontWeight: 'bold', fontSize: '32px'}}>Blink</span>
                      <span style={{
                        background: 'linear-gradient(45deg, #fff 0%, #f0f0f0 50%, #fff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold',
                        fontSize: '32px',
                        position: 'relative'
                      }}>
                        Office
                        <span style={{
                          position: 'absolute',
                          top: '-4px',
                          right: '-12px',
                          fontSize: '16px',
                          color: '#ff6b35'
                        }}>🏢</span>
                      </span>
                    </span>
                  </div>
                  <p className="footer-description">
                    Your premier partner in commercial real estate across Gurgaon and Delhi NCR. We specialize in delivering exceptional real estate solutions that drive business growth and success.
                  </p>
                  <div className="footer-stats">
                    <div className="stat-item">
                      <span className="stat-number">500+</span>
                      <span className="stat-label">Properties Sold</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">5+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-lg-2 col-md-6 mb-5">
                <h5 className="footer-title">Quick Links</h5>
                <ul className="footer-links">
                  <li><Link href="/about"><i className="fas fa-users"></i> About Us</Link></li>
                  <li><Link href="/services"><i className="fas fa-cogs"></i> Services</Link></li>
                  <li><Link href="/properties"><i className="fas fa-map-marked-alt"></i> Properties</Link></li>
                  <li><Link href="/team"><i className="fas fa-user-tie"></i> Our Team</Link></li>
                  <li><Link href="/careers"><i className="fas fa-briefcase"></i> Careers</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="footer-title">Our Services</h5>
                <ul className="footer-links">
                  <li><Link href="/services#retail"><i className="fas fa-store"></i> Retail Spaces</Link></li>
                  <li><Link href="/services#office"><i className="fas fa-building"></i> Office Spaces</Link></li>
                  <li><Link href="/services#food-court"><i className="fas fa-utensils"></i> Food Courts</Link></li>
                  <li><Link href="/services#showroom"><i className="fas fa-car"></i> Showrooms</Link></li>
                  <li><Link href="/services#warehouse"><i className="fas fa-warehouse"></i> Warehouses</Link></li>
                  <li><Link href="/services#consultation"><i className="fas fa-handshake"></i> Consultation</Link></li>
                </ul>
              </div>

              {/* Contact & Newsletter */}
              <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="footer-title">Get In Touch</h5>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <strong>Address</strong>
                      <p>Sector 44, Gurgaon<br />Haryana 122003, India</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <div>
                      <strong>Phone</strong>
                      <p><a href="tel:+919891100010">+91 98911 00010</a></p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <strong>Email</strong>
                      <p><a href="mailto:info@blinkoffice.com">info@blinkoffice.com</a></p>
                    </div>
                  </div>
                </div>
                
                {/* Newsletter */}
                <div className="newsletter-section">
                  <h6 className="newsletter-title">Stay Updated</h6>
                  <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                    <div className="input-group">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Your email address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                      />
                      <button className="btn btn-newsletter" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-paper-plane"></i>}
                      </button>
                    </div>
                    {message && <div className="newsletter-message">{message}</div>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="copyright">
                  &copy; 2024 <strong>Blinkoffice</strong>. All rights reserved.
                </p>
              </div>
              <div className="col-md-6">
                <div className="footer-bottom-right">
                  <div className="social-links">
                    <a href="#" className="social-link facebook" title="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-link twitter" title="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-link linkedin" title="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="social-link instagram" title="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-link youtube" title="YouTube">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                  <div className="footer-links-bottom">
                    <Link href="/privacy" className="footer-link">Privacy Policy</Link>
                    <Link href="/terms" className="footer-link">Terms of Service</Link>
                    <Link href="/sitemap" className="footer-link">Sitemap</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="back-to-top" onClick={scrollToTop}>
          <i className="fas fa-chevron-up"></i>
        </div>
      </footer>

      {/* Floating CTA Buttons */}
      <div className="floating-cta">
        <a href="https://wa.me/919891100010" className="floating-btn whatsapp" title="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="tel:+919891100010" className="floating-btn call" title="Call Now">
          <i className="fas fa-phone"></i>
        </a>
        <a href="mailto:info@blinkoffice.com" className="floating-btn mail" title="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>

      <style jsx>{`
        .modern-footer {
          background: linear-gradient(135deg, var(--blink-dark) 0%, var(--blink-primary) 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .footer-main {
          padding: 80px 0 40px;
          position: relative;
          z-index: 2;
        }

        .footer-brand .brand-container {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-icon {
          font-size: 2rem;
          color: var(--blink-secondary);
        }

        .brand-text {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
        }

        .brand-highlight {
          color: var(--blink-secondary);
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .footer-stats {
          display: flex;
          gap: 30px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--blink-secondary);
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .footer-title {
          color: var(--blink-secondary);
          font-weight: 600;
          margin-bottom: 25px;
          font-size: 1.2rem;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-links a:hover {
          color: var(--blink-secondary);
          transform: translateX(5px);
        }

        .contact-info {
          margin-bottom: 30px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 20px;
        }

        .contact-item i {
          font-size: 1.2rem;
          color: var(--blink-secondary);
          margin-top: 5px;
        }

        .contact-item strong {
          color: white;
          display: block;
          margin-bottom: 5px;
        }

        .contact-item p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .contact-item a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
        }

        .contact-item a:hover {
          color: var(--blink-secondary);
        }

        .newsletter-section {
          margin-top: 30px;
        }

        .newsletter-title {
          color: var(--blink-secondary);
          margin-bottom: 15px;
        }

        .newsletter-form .input-group {
          display: flex;
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .newsletter-form .form-control {
          border: none;
          padding: 12px 20px;
          background: white;
          color: var(--blink-dark);
          flex: 1;
        }

        .newsletter-form .form-control:focus {
          box-shadow: none;
          outline: none;
        }

        .btn-newsletter {
          background: var(--blink-secondary);
          border: none;
          padding: 12px 20px;
          color: var(--blink-dark);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-newsletter:hover {
          background: var(--blink-accent);
        }

        .newsletter-message {
          margin-top: 10px;
          color: var(--blink-secondary);
          font-size: 0.9rem;
        }

        .footer-bottom {
          background: rgba(0, 0, 0, 0.2);
          padding: 30px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .copyright {
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .footer-bottom-right {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 30px;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link.facebook { background: #3b5998; }
        .social-link.twitter { background: #1da1f2; }
        .social-link.linkedin { background: #0077b5; }
        .social-link.instagram { background: #e4405f; }
        .social-link.youtube { background: #ff0000; }

        .social-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .footer-links-bottom {
          display: flex;
          gap: 20px;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
        }

        .footer-link:hover {
          color: var(--blink-secondary);
        }

        .back-to-top {
          position: fixed;
          right: 30px;
          bottom: 30px;
          width: 50px;
          height: 50px;
          background: var(--blink-secondary);
          color: var(--blink-dark);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1000;
          box-shadow: 0 4px 15px rgba(245, 196, 94, 0.3);
        }

        .back-to-top:hover {
          background: var(--blink-accent);
          color: white;
          transform: translateY(-3px);
        }

        .floating-cta {
          position: fixed;
          right: 20px;
          bottom: 100px;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .floating-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .floating-btn:hover {
          transform: scale(1.1);
          color: white;
        }

        .floating-btn.whatsapp { background: #25D366; }
        .floating-btn.call { background: var(--blink-highlight); }
        .floating-btn.mail { background: var(--blink-accent); }

        @media (max-width: 768px) {
          .footer-stats {
            justify-content: center;
          }
          
          .footer-bottom-right {
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin-top: 20px;
          }
          
          .floating-cta {
            right: 15px;
            bottom: 80px;
          }
          
          .floating-btn {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }
          
          .back-to-top {
            right: 15px;
            bottom: 20px;
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
