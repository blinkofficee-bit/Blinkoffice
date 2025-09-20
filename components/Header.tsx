import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => router.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm navbar-blink ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <span className="brand-text">
              <span style={{color: 'var(--blink-primary)', fontWeight: 'bold', fontSize: '24px'}}>Blink</span>
              <span style={{
                background: 'linear-gradient(45deg, #333 0%, #555 50%, #333 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                fontSize: '24px',
                position: 'relative'
              }}>
                Office
                <span style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-8px',
                  fontSize: '12px',
                  color: 'var(--blink-primary)'
                }}>🏢</span>
              </span>
            </span>
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleMobileMenu}
            aria-controls="navbarNav" 
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/properties" className={`nav-link ${isActive('/properties') ? 'active' : ''}`}>
                  Properties
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/team" className={`nav-link ${isActive('/team') ? 'active' : ''}`}>
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/careers" className={`nav-link ${isActive('/careers') ? 'active' : ''}`}>
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <style jsx>{`
        .brand-logo {
          height: 40px;
          width: auto;
          max-width: 200px;
        }
        
        @media (max-width: 768px) {
          .brand-logo {
            height: 35px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
