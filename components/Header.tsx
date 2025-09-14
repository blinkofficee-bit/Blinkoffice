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
    <nav className={`navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm navbar-blink ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="navbar-brand">
          <i className="fas fa-building me-2"></i>Blinkoffice
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
              <Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={`nav-link ${router.pathname === '/about' ? 'active' : ''}`}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className={`nav-link ${router.pathname === '/services' ? 'active' : ''}`}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/properties" className={`nav-link ${router.pathname === '/properties' ? 'active' : ''}`}>
                Properties
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/team" className={`nav-link ${router.pathname === '/team' ? 'active' : ''}`}>
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/careers" className={`nav-link ${router.pathname === '/careers' ? 'active' : ''}`}>
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className={`nav-link ${router.pathname === '/blog' ? 'active' : ''}`}>
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
  );
};

export default Header;
