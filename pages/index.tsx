import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Layout 
      title="Blinkoffice - Premier Commercial Real Estate in Gurgaon"
      description="Leading commercial real estate agency in Gurgaon offering office spaces, retail properties, and warehouses with expert consultation and prime locations."
      keywords="commercial real estate Gurgaon, office space, retail property, warehouse, real estate consultant"
    >
      {/* Hero Slider Section */}
      <section className="hero-slider">
        <div className="slider-container">
          <div className={`slide ${currentSlide === 0 ? 'active' : ''}`} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'}}>
            <div className="slide-overlay"></div>
            <div className="container">
              <div className="row align-items-center min-vh-100">
                <div className="col-lg-8">
                  <div className="hero-content">
                    <h1 className="hero-title">
                      Work Smarter. <span className="text-accent">Work Faster.</span>
                    </h1>
                    <p className="hero-subtitle">
                      Discover commercial spaces that boost productivity and drive business success in Gurgaon&apos;s dynamic landscape. From modern office towers to strategic retail locations, find your perfect workspace today.
                    </p>
                    <div className="hero-buttons">
                      <Link href="/properties" className="btn btn-primary btn-lg me-3">
                        <i className="fas fa-building me-2"></i>Browse Properties
                      </Link>
                      <Link href="/contact" className="btn btn-outline-light btn-lg">
                        <i className="fas fa-phone me-2"></i>Call Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`slide ${currentSlide === 1 ? 'active' : ''}`} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'}}>
            <div className="slide-overlay"></div>
            <div className="container">
              <div className="row align-items-center min-vh-100">
                <div className="col-lg-8">
                  <div className="hero-content">
                    <h1 className="hero-title">
                      Your Office, <span className="text-accent">Reimagined.</span>
                    </h1>
                    <p className="hero-subtitle">
                      Transform your business with innovative commercial spaces designed for modern teams. From collaborative workspaces to executive suites, we help you find environments that inspire success.
                    </p>
                    <div className="hero-buttons">
                      <Link href="/services" className="btn btn-primary btn-lg me-3">
                        <i className="fas fa-handshake me-2"></i>Our Services
                      </Link>
                      <Link href="/contact" className="btn btn-outline-light btn-lg">
                        <i className="fab fa-whatsapp me-2"></i>WhatsApp
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`slide ${currentSlide === 2 ? 'active' : ''}`} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'}}>
            <div className="slide-overlay"></div>
            <div className="container">
              <div className="row align-items-center min-vh-100">
                <div className="col-lg-8">
                  <div className="hero-content">
                    <h1 className="hero-title">
                      Where Productivity <span className="text-accent">Meets Possibility.</span>
                    </h1>
                    <p className="hero-subtitle">
                      Unlock your business potential with next-generation commercial spaces. From innovative retail locations to cutting-edge logistics hubs, discover environments designed for modern success.
                    </p>
                    <div className="hero-buttons">
                      <Link href="/properties" className="btn btn-primary btn-lg me-3">
                        <i className="fas fa-store me-2"></i>View Retail Spaces
                      </Link>
                      <Link href="/team" className="btn btn-outline-light btn-lg">
                        <i className="fas fa-users me-2"></i>Meet Our Team
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Navigation - Hidden */}
          <div className="slider-nav" style={{display: 'none'}}>
            <button className="nav-btn prev-btn" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="nav-btn next-btn" onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Slider Indicators */}
          <div className="slider-indicators">
            <button className={`indicator ${currentSlide === 0 ? 'active' : ''}`} onClick={() => goToSlide(0)}></button>
            <button className={`indicator ${currentSlide === 1 ? 'active' : ''}`} onClick={() => goToSlide(1)}></button>
            <button className={`indicator ${currentSlide === 2 ? 'active' : ''}`} onClick={() => goToSlide(2)}></button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5" style={{backgroundColor: 'var(--blink-section-bg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Next-Gen Workspaces for Modern Teams</h2>
              <p className="section-subtitle">We understand how businesses evolve and thrive. Every space we recommend is designed around modern work patterns, collaboration needs, and productivity optimization.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-building"></i>
                </div>
                <h4>Customer-Centric Design</h4>
                <p>Every space recommendation is based on detailed research of your business behavior, operational needs, and growth projections.</p>
                <ul>
                  <li>Deep industry analysis</li>
                  <li>Behavioral research insights</li>
                  <li>Future-ready planning</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-store"></i>
                </div>
                <h4>Intuitive Functionality</h4>
                <p>Our spaces subconsciously guide seamless interactions. We consider everything from natural light to ambient temperature, yielding exceptional results.</p>
                <ul>
                  <li>Smart building integration</li>
                  <li>Optimal lighting design</li>
                  <li>Climate-controlled environments</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-warehouse"></i>
                </div>
                <h4>Holistic Understanding</h4>
                <p>We create more than just spaces. We craft environments that foster well-being, productivity and connection for lasting business success.</p>
                <ul>
                  <li>Wellness-focused design</li>
                  <li>Productivity optimization</li>
                  <li>Community building spaces</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="featured-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Featured Properties</h2>
              <p className="section-subtitle">Handpicked premium commercial spaces</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="property-card">
                <div className="property-image">
                  <div className="property-badge">For Lease</div>
                </div>
                <div className="property-content">
                  <h5>Premium Office Space - Cyber City</h5>
                  <p className="property-location">
                    <i className="fas fa-map-marker-alt"></i>
                    DLF Cyber City, Gurgaon
                  </p>
                  <div className="property-details">
                    <span>5000 sq ft</span>
                    <span>Furnished</span>
                    <span>Parking Available</span>
                  </div>
                  <div className="property-price">₹2,50,000/month</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-card">
                <div className="property-image">
                  <div className="property-badge">For Sale</div>
                </div>
                <div className="property-content">
                  <h5>Retail Showroom - Golf Course Road</h5>
                  <p className="property-location">
                    <i className="fas fa-map-marker-alt"></i>
                    Golf Course Road, Gurgaon
                  </p>
                  <div className="property-details">
                    <span>2000 sq ft</span>
                    <span>Ground Floor</span>
                    <span>High Visibility</span>
                  </div>
                  <div className="property-price">₹3.5 Crores</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-card">
                <div className="property-image">
                  <div className="property-badge">For Lease</div>
                </div>
                <div className="property-content">
                  <h5>Warehouse - Manesar</h5>
                  <p className="property-location">
                    <i className="fas fa-map-marker-alt"></i>
                    Manesar Industrial Area
                  </p>
                  <div className="property-details">
                    <span>15000 sq ft</span>
                    <span>Highway Access</span>
                    <span>Loading Docks</span>
                  </div>
                  <div className="property-price">₹1,80,000/month</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link href="/properties" className="btn btn-primary">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Blinkoffice?</h2>
              <p className="section-subtitle">Your trusted partner in commercial real estate</p>
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h5>5+ Years Experience</h5>
                    <p>Deep expertise in Gurgaon&apos;s commercial real estate market</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h5>Prime Locations</h5>
                    <p>Exclusive access to properties in top business districts</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <div>
                    <h5>Trusted Service</h5>
                    <p>Over 1000 successful transactions and satisfied clients</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h5>Quick Turnaround</h5>
                    <p>Fast property matching and documentation process</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-choose-image">
                <div className="image-card">
                  <h4>Professional Team</h4>
                  <p>Dedicated experts for your success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary text-white">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="cta-title">Ready to Find Your Perfect Commercial Space?</h2>
              <p className="cta-subtitle">
                Let our experts help you discover the ideal property for your business needs in Gurgaon.
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-light btn-lg me-3">
                  Get Started Today
                </Link>
                <Link href="/properties" className="btn btn-outline-light btn-lg">
                  Browse Properties
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        :root {
          --blink-blue: #3A86FF;
          --soft-slate-gray: #6C757D;
          --cloud-white: #F8F9FA;
          --lime-signal: #A3FFAE;
          --coral-flash: #FF6B6B;
        }

        .hero-slider {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }

        .slider-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .slide.active {
          opacity: 1;
        }

        .slide-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(58, 134, 255, 0.8) 0%, rgba(58, 134, 255, 0.6) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .text-accent {
          color: var(--lime-signal);
        }

        .hero-subtitle {
          font-size: 1.3rem;
          margin-bottom: 2rem;
          opacity: 0.95;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }

        .hero-buttons {
          margin-bottom: 3rem;
        }

        .btn-primary {
          background: var(--blink-blue);
          border: 2px solid var(--blink-blue);
          padding: 12px 30px;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: transparent;
          border-color: var(--blink-blue);
          color: var(--blink-blue);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(58, 134, 255, 0.3);
        }

        .btn-outline-light {
          border: 2px solid white;
          color: white;
          padding: 12px 30px;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .btn-outline-light:hover {
          background: white;
          color: var(--blink-blue);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
        }

        .hero-stats {
          background: rgba(248, 249, 250, 0.95);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }

        .stat-item {
          text-align: center;
        }

        .stat-item h3 {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--blink-blue);
          margin-bottom: 0.5rem;
        }

        .stat-item p {
          color: var(--soft-slate-gray);
          margin: 0;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .slider-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 30px;
        }

        .nav-btn {
          background: rgba(58, 134, 255, 0.8);
          border: none;
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .nav-btn:hover {
          background: var(--blink-blue);
          transform: scale(1.1);
          box-shadow: 0 5px 15px rgba(58, 134, 255, 0.4);
        }

        .slider-indicators {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 3;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid white;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: var(--lime-signal);
          border-color: var(--lime-signal);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--blink-blue);
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--soft-slate-gray);
          margin-bottom: 0;
        }

        .service-card {
          background: var(--cloud-white);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(58, 134, 255, 0.1);
          height: 100%;
          transition: all 0.3s ease;
          border: 1px solid rgba(58, 134, 255, 0.1);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(58, 134, 255, 0.2);
          border-color: var(--blink-blue);
        }

        .service-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--blink-blue), #2563eb);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: white;
          font-size: 1.5rem;
        }

        .service-card h4 {
          color: var(--blink-blue);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .service-card p {
          color: var(--soft-slate-gray);
          margin-bottom: 1rem;
        }

        .service-card ul {
          list-style: none;
          padding: 0;
        }

        .service-card li {
          color: var(--soft-slate-gray);
          padding: 0.25rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .service-card li:before {
          content: "✓";
          color: var(--lime-signal);
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .property-card {
          background: var(--cloud-white);
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .property-card:hover {
          transform: translateY(-5px);
        }

        .property-image {
          height: 200px;
          background: linear-gradient(135deg, hsl(359.1deg 83.26% 53.14%), hsl(359.1deg 83.26% 53.14%));
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 3rem;
        }

        .property-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #28a745;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .property-content {
          padding: 1.5rem;
        }

        .property-content h5 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .property-location {
          color: #6c757d;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .property-location i {
          margin-right: 0.5rem;
        }

        .property-details {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .property-details span {
          background: #f8f9fa;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          color: #495057;
        }

        .property-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: hsl(359.1deg 83.26% 53.14%);
        }

        .feature-list {
          margin-top: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: hsl(359.1deg 83.26% 53.14%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          color: white;
          flex-shrink: 0;
        }

        .feature-item h5 {
          color: #000000;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .feature-item p {
          color: #6c757d;
          margin: 0;
        }

        .cta-section {
          background: linear-gradient(135deg, rgb(255, 107, 53) 0%, rgb(230, 96, 48) 100%) !important;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: white;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-subtitle {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .cta-title {
            font-size: 2rem;
          }
          
          .property-details {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </Layout>
  );
};

export default HomePage;
