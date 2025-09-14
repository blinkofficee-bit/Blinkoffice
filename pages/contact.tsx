import React from 'react';
import Layout from '../components/Layout';

const ContactPage: React.FC = () => {
  return (
    <Layout 
      title="Contact Blinkoffice - Commercial Real Estate Experts in Gurgaon"
      description="Get in touch with Blinkoffice for all your commercial real estate needs in Gurgaon. Call us, email us, or visit our office for expert consultation."
      keywords="contact blinkoffice, commercial real estate Gurgaon, property consultant contact, real estate office"
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="hero-title">Next-Gen Workspaces for Modern Teams</h1>
              <p className="hero-subtitle">
                Ready to transform your business with innovative commercial spaces? Connect with our experts to discover environments that inspire success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h4>Call Us</h4>
                <p>Speak directly with our property experts</p>
                <div className="contact-details">
                  <a href="tel:+919891100010">+91 98911 00010</a>
                  <a href="tel:+911244567890">+91 124 456 7890</a>
                </div>
                <small>Mon-Sat: 9:00 AM - 7:00 PM</small>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h4>Email Us</h4>
                <p>Send us your requirements and we&apos;ll respond quickly</p>
                <div className="contact-details">
                  <a href="mailto:info@blinkoffice.com">info@blinkoffice.com</a>
                  <a href="mailto:sales@blinkoffice.com">sales@blinkoffice.com</a>
                </div>
                <small>Response within 2 hours</small>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h4>Visit Our Office</h4>
                <p>Meet our team at our Gurgaon office</p>
                <div className="contact-details">
                  <address>
                    Office 301, Tower A<br/>
                    DLF Cyber City<br/>
                    Gurgaon - 122002<br/>
                    Haryana, India
                  </address>
                </div>
                <small>Free parking available</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="form-container">
                <div className="text-center mb-5">
                  <h2 className="section-title">Get Free Consultation</h2>
                  <p className="section-subtitle">Fill out the form below and our experts will contact you within 24 hours</p>
                </div>
                
                <form className="contact-form-inner">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input type="text" id="name" className="form-control" placeholder="Enter your full name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input type="tel" id="phone" className="form-control" placeholder="Enter your phone number" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input type="email" id="email" className="form-control" placeholder="Enter your email address" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="company">Company Name</label>
                        <input type="text" id="company" className="form-control" placeholder="Enter your company name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="property-type">Property Type *</label>
                        <select id="property-type" className="form-select" required>
                          <option value="">Select property type</option>
                          <option value="office">Office Space</option>
                          <option value="retail">Retail Space</option>
                          <option value="warehouse">Warehouse</option>
                          <option value="industrial">Industrial Space</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="budget">Budget Range</label>
                        <select id="budget" className="form-select">
                          <option value="">Select budget range</option>
                          <option value="under-1lakh">Under ₹1 Lakh/month</option>
                          <option value="1-5lakh">₹1-5 Lakhs/month</option>
                          <option value="5-10lakh">₹5-10 Lakhs/month</option>
                          <option value="above-10lakh">Above ₹10 Lakhs/month</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="location">Preferred Location</label>
                        <select id="location" className="form-select">
                          <option value="">Select preferred location</option>
                          <option value="cyber-city">Cyber City</option>
                          <option value="golf-course-road">Golf Course Road</option>
                          <option value="sohna-road">Sohna Road</option>
                          <option value="mg-road">MG Road</option>
                          <option value="udyog-vihar">Udyog Vihar</option>
                          <option value="manesar">Manesar</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="area">Required Area (sq ft)</label>
                        <input type="number" id="area" className="form-control" placeholder="Enter required area" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="message">Additional Requirements</label>
                        <textarea id="message" className="form-control" rows={5} placeholder="Tell us about your specific requirements, timeline, or any other details..."></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="agree" required />
                        <label className="form-check-label" htmlFor="agree">
                          I agree to receive communications from Blinkoffice regarding my inquiry *
                        </label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-primary btn-lg px-5">
                        Send Inquiry
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="quick-contact py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Need Immediate Assistance?</h2>
              <p className="section-subtitle">Our property experts are ready to help you right now</p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="quick-contact-item">
                <div className="quick-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h5>Call Now</h5>
                <a href="tel:+919891100010" className="btn btn-outline-primary">+91 98911 00010</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="quick-contact-item">
                <div className="quick-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <h5>WhatsApp</h5>
                <a href="https://wa.me/919891100010" className="btn btn-outline-success">Chat on WhatsApp</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="quick-contact-item">
                <div className="quick-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h5>Schedule Visit</h5>
                <button className="btn btn-outline-info">Book Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-3 mb-4 fw-bold">Let&apos;s Craft Your Perfect Space</h1>
              <p className="lead mb-5 fs-4">Ready to discover exceptional commercial opportunities? Our team of experts is here to understand your unique business needs and recommend spaces that drive success.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="map-container">
                <div className="map-placeholder">
                  <div className="map-content">
                    <i className="fas fa-map-marker-alt"></i>
                    <h4>Blinkoffice</h4>
                    <p>Office 301, Tower A, DLF Cyber City<br/>Gurgaon - 122002, Haryana</p>
                    <div className="map-directions">
                      <button className="btn btn-primary">Get Directions</button>
                    </div>
                  </div>
                </div>
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

        .contact-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
          height: 100%;
          transition: transform 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-10px);
        }

        .contact-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgb(255, 107, 53), rgb(230, 96, 48));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
          font-size: 2rem;
        }

        .contact-card h4 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .contact-card p {
          color: #6c757d;
          margin-bottom: 1.5rem;
        }

        .contact-details {
          margin-bottom: 1rem;
        }

        .contact-details a {
          display: block;
          color: rgb(255, 107, 53);
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .contact-details a:hover {
          text-decoration: underline;
        }

        .contact-details address {
          color: #495057;
          font-style: normal;
          line-height: 1.6;
        }

        .contact-card small {
          color: #6c757d;
          font-size: 0.9rem;
        }

        .form-container {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #102e50;
          font-weight: 500;
        }

        .form-control, .form-select {
          border: 2px solid #e9ecef;
          border-radius: 10px;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-control:focus, .form-select:focus {
          border-color: rgb(255, 107, 53);
          box-shadow: 0 0 0 0.2rem rgba(0,123,255,0.25);
        }

        .form-check-input:checked {
          background-color: rgb(255, 107, 53);
          border-color: rgb(255, 107, 53);
        }

        .quick-contact-item {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          text-align: center;
          height: 100%;
        }

        .quick-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #28a745, #20c997);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: white;
          font-size: 1.5rem;
        }

        .quick-contact-item h5 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .map-container {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .map-placeholder {
          height: 400px;
          background: linear-gradient(135deg, rgb(255, 107, 53), rgb(230, 96, 48));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .map-content i {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .map-content h4 {
          margin-bottom: 1rem;
        }

        .map-content p {
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .map-directions .btn {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid white;
          color: white;
        }

        .map-directions .btn:hover {
          background: white;
          color: rgb(255, 107, 53);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .form-container {
            padding: 2rem 1.5rem;
          }
          
          .contact-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default ContactPage;
