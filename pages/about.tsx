import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  return (
    <Layout 
      title="About BlinkOffice - Premier Commercial Real Estate Consultant in Gurgaon"
      description="Excellence within reach. We craft environments that drive business success through customer-centric design and holistic understanding of Gurgaon's commercial landscape."
      keywords="about blinkoffice, commercial real estate Gurgaon, real estate consultant, premium office spaces"
    >
      {/* Hero Section */}
      <section className="hero-section py-5" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white'
      }}>
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-3 mb-4 fw-bold">Your Office, Reimagined.</h1>
              <p className="lead mb-5 fs-4">
                We don't just understand real estate. We understand how businesses thrive in Gurgaon's dynamic commercial landscape.
              </p>
              <div className="row g-4 mt-5">
                <div className="col-md-4">
                  <div className="hero-stat">
                    <h3 className="display-6 fw-bold">5+</h3>
                    <p className="mb-0">Years Excellence</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hero-stat">
                    <h3 className="display-6 fw-bold">1000+</h3>
                    <p className="mb-0">Happy Clients</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hero-stat">
                    <h3 className="display-6 fw-bold">50+</h3>
                    <p className="mb-0">Prime Locations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About BlinkOffice */}
      <section className="philosophy-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">About BlinkOffice</h2>
              <p className="mb-4">
                BlinkOffice is Gurgaon's premier commercial real estate consultancy, specializing in transforming how businesses find and utilize workspace solutions. Founded with a vision to revolutionize the commercial property landscape, we bridge the gap between ambitious businesses and exceptional spaces.
              </p>
              <p className="mb-4">
                Our team of seasoned professionals brings deep market knowledge and innovative approaches to commercial real estate. We understand Gurgaon's dynamic business ecosystem and help companies of all sizes - from startups to multinational corporations - find spaces that drive growth and success.
              </p>
              <p>
                With a portfolio spanning premium office towers, strategic retail locations, and modern co-working spaces, BlinkOffice has become the trusted partner for businesses seeking more than just square footage - we deliver environments that inspire productivity and foster innovation.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="philosophy-image">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="About BlinkOffice" className="img-fluid rounded shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle">The principles that guide every recommendation we make</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="value-card text-center">
                <div className="value-icon mb-4">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4>Intuitive Functionality</h4>
                <p>Our spaces subconsciously guide seamless business interactions. We consider everything from natural light to ambient temperature, yielding exceptional results for our clients.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="value-card text-center">
                <div className="value-icon mb-4">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Holistic Understanding</h4>
                <p>We create more than just spaces. We craft environments that foster well-being, productivity and connection. By understanding how businesses interact with their surroundings, we recommend spaces that inspire and delight.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="value-card text-center">
                <div className="value-icon mb-4">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>Data-Driven Insights</h4>
                <p>Every recommendation is backed by comprehensive market research, demographic analysis, and growth projections to ensure your business thrives in its new environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="expertise-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Our Expertise</h2>
              <p className="section-subtitle">Specialized knowledge across diverse commercial real estate sectors</p>
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
      <section className="locations-section py-5 bg-light">
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
      <section className="cta-section py-5" style={{background: 'linear-gradient(135deg, hsl(359.1deg 83.26% 53.14%) 0%, hsl(359.1deg 83.26% 48%) 100%)', color: 'white'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 mb-4">Ready to Find Your Perfect Space?</h2>
              <p className="lead mb-5">Let's craft an environment that drives your business success</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link href="/contact" className="btn btn-light btn-lg">
                  <i className="fas fa-phone me-2"></i>Get Started Today
                </Link>
                <Link href="/properties" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-building me-2"></i>View Properties
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
