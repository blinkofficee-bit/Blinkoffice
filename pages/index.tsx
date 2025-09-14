import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <Layout 
      title="Blinkoffice - Premier Commercial Real Estate in Gurgaon"
      description="Leading commercial real estate agency in Gurgaon offering office spaces, retail properties, and warehouses with expert consultation and prime locations."
      keywords="commercial real estate Gurgaon, office space, retail property, warehouse, real estate consultant"
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">
                  Find Your Perfect <span className="text-primary">Commercial Space</span> in Gurgaon
                </h1>
                <p className="hero-subtitle">
                  Discover premium office spaces, retail locations, and warehouses in Gurgaon&apos;s most sought-after business districts with our expert guidance.
                </p>
                <div className="hero-buttons">
                  <Link href="/properties" className="btn btn-primary btn-lg me-3">
                    Browse Properties
                  </Link>
                  <Link href="/contact" className="btn btn-outline-primary btn-lg">
                    Contact Us
                  </Link>
                </div>
                <div className="hero-stats">
                  <div className="row">
                    <div className="col-4">
                      <div className="stat-item">
                        <h3>500+</h3>
                        <p>Properties Sold</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="stat-item">
                        <h3>15+</h3>
                        <p>Years Experience</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="stat-item">
                        <h3>1000+</h3>
                        <p>Happy Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <div className="building-card">
                  <h4>Premium Office Spaces</h4>
                  <p>Modern facilities in prime locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">Comprehensive commercial real estate solutions</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-building"></i>
                </div>
                <h4>Office Spaces</h4>
                <p>Premium office spaces in Gurgaon&apos;s business districts with modern amenities and flexible lease terms.</p>
                <ul>
                  <li>Cyber City locations</li>
                  <li>Golf Course Road properties</li>
                  <li>Sohna Road commercial hubs</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-store"></i>
                </div>
                <h4>Retail Spaces</h4>
                <p>High-footfall retail locations perfect for shops, showrooms, and commercial establishments.</p>
                <ul>
                  <li>Mall spaces</li>
                  <li>Street-facing shops</li>
                  <li>Food court locations</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-warehouse"></i>
                </div>
                <h4>Warehouses</h4>
                <p>Strategic warehouse locations with excellent connectivity for logistics and distribution.</p>
                <ul>
                  <li>Highway connectivity</li>
                  <li>Modern facilities</li>
                  <li>Flexible sizing options</li>
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
                    <h5>15+ Years Experience</h5>
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
        .hero-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 80px 0;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: #102e50;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .text-primary {
          color: #007bff !important;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-buttons {
          margin-bottom: 3rem;
        }

        .hero-stats {
          margin-top: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 1rem;
        }

        .stat-item h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #007bff;
          margin-bottom: 0.5rem;
        }

        .stat-item p {
          color: #6c757d;
          margin: 0;
          font-size: 0.9rem;
        }

        .hero-image, .why-choose-image {
          position: relative;
          height: 400px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .building-card, .image-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 2rem;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .building-card h4, .image-card h4 {
          color: #102e50;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #102e50;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #6c757d;
          margin-bottom: 0;
        }

        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          height: 100%;
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
        }

        .service-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: white;
          font-size: 1.5rem;
        }

        .service-card h4 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .service-card p {
          color: #6c757d;
          margin-bottom: 1rem;
        }

        .service-card ul {
          list-style: none;
          padding: 0;
        }

        .service-card li {
          color: #6c757d;
          padding: 0.25rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .service-card li:before {
          content: "✓";
          color: #28a745;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .property-card {
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
          background: linear-gradient(135deg, #007bff, #0056b3);
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
          color: #007bff;
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
          background: linear-gradient(135deg, #28a745, #20c997);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          color: white;
          flex-shrink: 0;
        }

        .feature-item h5 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .feature-item p {
          color: #6c757d;
          margin: 0;
        }

        .cta-section {
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%) !important;
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
