import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  return (
    <Layout 
      title="About Blinkoffice - Leading Commercial Real Estate Agency in Gurgaon"
      description="Learn about Blinkoffice's 15+ years of experience in commercial real estate. We specialize in office spaces, retail properties, and warehouses in Gurgaon and Delhi NCR."
      keywords="about blinkoffice, commercial real estate Gurgaon, real estate agency, office space consultant"
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">About Blinkoffice</h1>
              <p className="hero-subtitle">
                Your trusted partner in commercial real estate across Gurgaon and Delhi NCR for over 15 years.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <div className="hero-card">
                  <h4>Established 2009</h4>
                  <p>15+ Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Our Story</h2>
              <p className="lead">
                Founded in 2009, Blinkoffice began as a vision to transform the commercial real estate landscape in Gurgaon and Delhi NCR.
              </p>
              <p>
                What started as a small team of passionate real estate professionals has grown into one of the most trusted names in commercial property consulting. We've successfully facilitated over 500 commercial property transactions, helping businesses of all sizes find their perfect space.
              </p>
              <p>
                Our deep understanding of the local market dynamics, combined with our commitment to client success, has established us as the preferred choice for commercial real estate solutions in the region.
              </p>
              <div className="story-highlights">
                <div className="highlight-item">
                  <h4>500+</h4>
                  <p>Properties Sold</p>
                </div>
                <div className="highlight-item">
                  <h4>1000+</h4>
                  <p>Happy Clients</p>
                </div>
                <div className="highlight-item">
                  <h4>50+</h4>
                  <p>Prime Locations</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="story-image">
                <div className="story-card">
                  <h4>Growing Success</h4>
                  <p>Building relationships since 2009</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="mission-card">
                <div className="mission-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To provide exceptional commercial real estate solutions that drive business growth and success in the NCR region. We strive to understand each client's unique requirements and match them with properties that support their current needs and future growth ambitions.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="mission-card">
                <div className="mission-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be the leading commercial real estate consultancy in North India, known for our integrity, expertise, and commitment to client success. We envision a future where every business finds its perfect commercial space through our guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle">The principles that guide everything we do</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4>Trust & Integrity</h4>
                <p>We build lasting relationships through honest communication and transparent dealings with all our clients.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h4>Excellence</h4>
                <p>We strive for excellence in every aspect of our service, from property selection to client support.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Client Focus</h4>
                <p>Our clients' success is our success. We prioritize their needs and work tirelessly to exceed expectations.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4>Innovation</h4>
                <p>We embrace new technologies and innovative approaches to deliver better results for our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="expertise-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Our Expertise</h2>
              <p className="section-subtitle">Specialized knowledge in key commercial sectors</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="expertise-card">
                <h5>Office Spaces</h5>
                <ul>
                  <li>Corporate headquarters</li>
                  <li>Co-working spaces</li>
                  <li>IT parks and tech hubs</li>
                  <li>Business centers</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="expertise-card">
                <h5>Retail Properties</h5>
                <ul>
                  <li>Shopping mall spaces</li>
                  <li>Street-facing retail</li>
                  <li>Food courts</li>
                  <li>Anchor stores</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="expertise-card">
                <h5>Industrial & Warehouse</h5>
                <ul>
                  <li>Logistics hubs</li>
                  <li>Manufacturing facilities</li>
                  <li>Distribution centers</li>
                  <li>Cold storage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Locations */}
      <section className="locations-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Key Locations We Serve</h2>
              <p className="section-subtitle">Prime commercial areas across Gurgaon and Delhi NCR</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="location-card">
                <h5>Cyber City</h5>
                <p>Premium IT and corporate hub with modern infrastructure and excellent connectivity.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-card">
                <h5>Golf Course Road</h5>
                <p>Upscale commercial corridor with high-end retail and office spaces.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-card">
                <h5>Sohna Road</h5>
                <p>Rapidly developing area with new commercial projects and excellent growth potential.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-card">
                <h5>MG Road</h5>
                <p>Established business district with mature commercial infrastructure.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-card">
                <h5>Udyog Vihar</h5>
                <p>Industrial and corporate zone with diverse business opportunities.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-card">
                <h5>Manesar</h5>
                <p>Industrial hub with excellent logistics connectivity and warehouse facilities.</p>
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
              <h2 className="cta-title">Ready to Work With Us?</h2>
              <p className="cta-subtitle">
                Let's discuss how we can help you find the perfect commercial space for your business needs.
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-light btn-lg me-3">
                  Contact Us Today
                </Link>
                <Link href="/properties" className="btn btn-outline-light btn-lg">
                  View Properties
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
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          margin-bottom: 0;
        }

        .hero-image, .story-image {
          height: 300px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-card, .story-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 2rem;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .hero-card h4, .story-card h4 {
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

        .story-highlights {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }

        .highlight-item {
          text-align: center;
        }

        .highlight-item h4 {
          font-size: 2rem;
          font-weight: 700;
          color: #007bff;
          margin-bottom: 0.5rem;
        }

        .highlight-item p {
          color: #6c757d;
          margin: 0;
          font-size: 0.9rem;
        }

        .mission-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          height: 100%;
          text-align: center;
        }

        .mission-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
          font-size: 2rem;
        }

        .mission-card h3 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .mission-card p {
          color: #6c757d;
          line-height: 1.6;
        }

        .value-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          text-align: center;
          height: 100%;
          transition: transform 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
        }

        .value-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #28a745, #20c997);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
          font-size: 1.5rem;
        }

        .value-card h4 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .value-card p {
          color: #6c757d;
          line-height: 1.6;
        }

        .expertise-card, .location-card {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 3px 15px rgba(0,0,0,0.1);
          height: 100%;
        }

        .expertise-card h5, .location-card h5 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .expertise-card ul {
          list-style: none;
          padding: 0;
        }

        .expertise-card li {
          color: #6c757d;
          padding: 0.25rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .expertise-card li:before {
          content: "•";
          color: #007bff;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .location-card p {
          color: #6c757d;
          line-height: 1.6;
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
          
          .story-highlights {
            flex-direction: column;
            gap: 1rem;
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

export default AboutPage;
