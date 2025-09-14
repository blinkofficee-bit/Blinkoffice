import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const ServicesPage: React.FC = () => {
  return (
    <Layout 
      title="Commercial Real Estate Services - Blinkoffice Gurgaon"
      description="Comprehensive commercial real estate services including office spaces, retail properties, warehouses, and investment consulting in Gurgaon and Delhi NCR."
      keywords="commercial real estate services, office space rental, retail property, warehouse leasing, property investment"
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-3 mb-4 fw-bold">Infinite Possibilities. Within Reach.</h1>
              <p className="lead mb-5 fs-4">Dive deeper and discover the exceptional spaces we&apos;ve meticulously curated. From cutting-edge workspaces to award-winning offices, each recommendation reflects our commitment to exceeding expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">
                    <i className="fas fa-building"></i>
                  </div>
                  <h3>Office Spaces</h3>
                </div>
                <div className="service-content">
                  <p>Premium office spaces in Gurgaon&apos;s top business districts with modern amenities and flexible terms.</p>
                  <ul className="service-features">
                    <li>Cyber City premium locations</li>
                    <li>Golf Course Road offices</li>
                    <li>Sohna Road commercial hubs</li>
                    <li>Udyog Vihar business centers</li>
                    <li>Furnished and unfurnished options</li>
                    <li>Flexible lease terms</li>
                  </ul>
                  <div className="service-pricing">
                    <span className="price-range">₹50-200/sq ft</span>
                    <span className="price-note">per month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">
                    <i className="fas fa-store"></i>
                  </div>
                  <h3>Retail Spaces</h3>
                </div>
                <div className="service-content">
                  <p>High-visibility retail locations perfect for shops, showrooms, and commercial establishments.</p>
                  <ul className="service-features">
                    <li>Shopping mall spaces</li>
                    <li>Street-facing retail outlets</li>
                    <li>Food court locations</li>
                    <li>Anchor store opportunities</li>
                    <li>High footfall areas</li>
                    <li>Parking facilities available</li>
                  </ul>
                  <div className="service-pricing">
                    <span className="price-range">₹80-300/sq ft</span>
                    <span className="price-note">per month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">
                    <i className="fas fa-warehouse"></i>
                  </div>
                  <h3>Warehouses</h3>
                </div>
                <div className="service-content">
                  <p>Strategic warehouse locations with excellent connectivity for logistics and distribution needs.</p>
                  <ul className="service-features">
                    <li>Highway connectivity</li>
                    <li>Modern loading facilities</li>
                    <li>Cold storage options</li>
                    <li>24/7 security</li>
                    <li>Flexible sizing (5K-50K sq ft)</li>
                    <li>Easy truck access</li>
                  </ul>
                  <div className="service-pricing">
                    <span className="price-range">₹15-40/sq ft</span>
                    <span className="price-note">per month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Additional Services</h2>
              <p className="section-subtitle">Complete support for all your commercial real estate needs</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="additional-service">
                <div className="service-icon-small">
                  <i className="fas fa-search"></i>
                </div>
                <h5>Property Search</h5>
                <p>Customized property search based on your specific requirements and budget.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="additional-service">
                <div className="service-icon-small">
                  <i className="fas fa-file-contract"></i>
                </div>
                <h5>Legal Documentation</h5>
                <p>Complete assistance with lease agreements, registrations, and legal formalities.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="additional-service">
                <div className="service-icon-small">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h5>Investment Advisory</h5>
                <p>Expert guidance on commercial property investments and market analysis.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="additional-service">
                <div className="service-icon-small">
                  <i className="fas fa-tools"></i>
                </div>
                <h5>Property Management</h5>
                <p>Comprehensive property management services for landlords and tenants.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Our Process</h2>
              <p className="section-subtitle">Simple steps to find your perfect commercial space</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="process-step">
                <div className="step-number">1</div>
                <h5>Consultation</h5>
                <p>We understand your business needs, budget, and location preferences.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="process-step">
                <div className="step-number">2</div>
                <h5>Property Search</h5>
                <p>Our team identifies suitable properties matching your criteria.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="process-step">
                <div className="step-number">3</div>
                <h5>Site Visits</h5>
                <p>We arrange property visits and provide detailed information about each option.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="process-step">
                <div className="step-number">4</div>
                <h5>Finalization</h5>
                <p>We handle negotiations, documentation, and ensure smooth transaction completion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="industry-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Industry Expertise</h2>
              <p className="section-subtitle">Specialized solutions for different business sectors</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="industry-card">
                <h5>IT & Technology</h5>
                <p>Modern office spaces with high-speed connectivity, server rooms, and tech-friendly infrastructure.</p>
                <div className="industry-features">
                  <span>High-speed internet</span>
                  <span>Server rooms</span>
                  <span>24/7 power backup</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="industry-card">
                <h5>Manufacturing</h5>
                <p>Industrial spaces with heavy machinery support, raw material storage, and logistics connectivity.</p>
                <div className="industry-features">
                  <span>Heavy load capacity</span>
                  <span>Industrial power</span>
                  <span>Transport access</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="industry-card">
                <h5>Retail & F&B</h5>
                <p>High-visibility locations with customer parking, foot traffic, and brand-appropriate spaces.</p>
                <div className="industry-features">
                  <span>High footfall</span>
                  <span>Customer parking</span>
                  <span>Display windows</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="industry-card">
                <h5>Healthcare</h5>
                <p>Medical-grade facilities with proper ventilation, accessibility, and patient-friendly environments.</p>
                <div className="industry-features">
                  <span>Medical compliance</span>
                  <span>Accessibility</span>
                  <span>Parking facilities</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="industry-card">
                <h5>Education</h5>
                <p>Educational spaces with proper lighting, ventilation, and safety features for learning environments.</p>
                <div className="industry-features">
                  <span>Safety compliant</span>
                  <span>Natural lighting</span>
                  <span>Playground space</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="industry-card">
                <h5>Logistics</h5>
                <p>Distribution centers with dock facilities, inventory management systems, and transportation access.</p>
                <div className="industry-features">
                  <span>Loading docks</span>
                  <span>Highway access</span>
                  <span>Security systems</span>
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
                Let our experts help you discover the ideal property for your business needs.
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-light btn-lg me-3">
                  Get Free Consultation
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
          background: linear-gradient(135deg, rgb(255, 107, 53) 0%, rgb(230, 96, 48) 100%);
          color: white;
          padding: 80px 0;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
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
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          padding: 0;
          height: 100%;
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
        }

        .service-header {
          background: linear-gradient(135deg, rgb(255, 107, 53), rgb(230, 96, 48));
          color: white;
          padding: 2rem;
          border-radius: 15px 15px 0 0;
          text-align: center;
        }

        .service-icon {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          font-size: 2rem;
        }

        .service-header h3 {
          margin: 0;
          font-weight: 600;
        }

        .service-content {
          padding: 2rem;
        }

        .service-content p {
          color: #6c757d;
          margin-bottom: 1.5rem;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
        }

        .service-features li {
          color: #495057;
          padding: 0.5rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .service-features li:before {
          content: "✓";
          color: #28a745;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .service-pricing {
          border-top: 1px solid #e9ecef;
          padding-top: 1rem;
          text-align: center;
        }

        .price-range {
          font-size: 1.5rem;
          font-weight: 700;
          color: rgb(255, 107, 53);
        }

        .price-note {
          display: block;
          color: #6c757d;
          font-size: 0.9rem;
        }

        .additional-service {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          text-align: center;
          height: 100%;
        }

        .service-icon-small {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #28a745, #20c997);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: white;
          font-size: 1.5rem;
        }

        .additional-service h5 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .additional-service p {
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
        }

        .process-step {
          text-align: center;
          padding: 2rem;
        }

        .step-number {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgb(255, 107, 53), rgb(230, 96, 48));
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 2rem;
          font-weight: 700;
        }

        .process-step h5 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .process-step p {
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
        }

        .industry-card {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          height: 100%;
        }

        .industry-card h5 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .industry-card p {
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .industry-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .industry-features span {
          background: #e3f2fd;
          color: #1976d2;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .cta-section {
          background: linear-gradient(135deg, rgb(255, 107, 53) 0%, rgb(230, 96, 48) 100%) !important;
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
          
          .service-content {
            padding: 1.5rem;
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

export default ServicesPage;
