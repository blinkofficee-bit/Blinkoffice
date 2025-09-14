import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const TeamPage: React.FC = () => {
  return (
    <Layout 
      title="Our Team - Blinkoffice Commercial Real Estate Experts"
      description="Meet the experienced team of commercial real estate professionals at Blinkoffice. Our experts help you find the perfect commercial space in Gurgaon and Delhi NCR."
      keywords="blinkoffice team, commercial real estate experts, property consultants Gurgaon, real estate professionals"
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="hero-title">Meet Our Expert Team</h1>
              <p className="hero-subtitle">
                Dedicated professionals with deep expertise in commercial real estate across Gurgaon and Delhi NCR
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="leadership-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Leadership Team</h2>
              <p className="section-subtitle">Visionary leaders driving our success</p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="team-card leadership">
                <div className="team-image">
                  <div className="team-avatar">
                    <i className="fas fa-user-tie"></i>
                  </div>
                </div>
                <div className="team-content">
                  <h4>Rajesh Kumar</h4>
                  <p className="team-position">Founder & CEO</p>
                  <p className="team-bio">
                    With over 20 years in commercial real estate, Rajesh founded Blinkoffice with a vision to transform the property landscape in NCR. His strategic leadership has driven the company&apos;s growth.
                  </p>
                  <div className="team-stats">
                    <span>20+ Years Experience</span>
                    <span>500+ Deals Closed</span>
                  </div>
                  <div className="team-social">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fas fa-envelope"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-card leadership">
                <div className="team-image">
                  <div className="team-avatar">
                    <i className="fas fa-user-tie"></i>
                  </div>
                </div>
                <div className="team-content">
                  <h4>Priya Sharma</h4>
                  <p className="team-position">Managing Director</p>
                  <p className="team-bio">
                    Priya brings 15+ years of expertise in commercial leasing and investment advisory. She leads our strategic partnerships and client relationship management.
                  </p>
                  <div className="team-stats">
                    <span>15+ Years Experience</span>
                    <span>₹200Cr+ Deals</span>
                  </div>
                  <div className="team-social">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fas fa-envelope"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Teams */}
      <section className="departments-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Our Departments</h2>
              <p className="section-subtitle">Specialized teams for comprehensive service</p>
            </div>
          </div>

          {/* Sales Team */}
          <div className="department-block mb-5">
            <div className="row">
              <div className="col-12 mb-4">
                <h3 className="department-title">
                  <i className="fas fa-chart-line"></i>
                  Sales & Leasing Team
                </h3>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-3 col-md-6">
                <div className="team-card">
                  <div className="team-image">
                    <div className="team-avatar">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="team-content">
                    <h5>Amit Singh</h5>
                    <p className="team-position">Senior Sales Manager</p>
                    <p className="team-specialty">Office Spaces Specialist</p>
                    <div className="team-contact">
                      <a href="tel:+919876543211">+91 98765 43211</a>
                      <a href="mailto:amit@blinkoffice.com">amit@blinkoffice.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-card">
                  <div className="team-image">
                    <div className="team-avatar">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="team-content">
                    <h5>Neha Gupta</h5>
                    <p className="team-position">Sales Executive</p>
                    <p className="team-specialty">Retail Properties Expert</p>
                    <div className="team-contact">
                      <a href="tel:+919876543212">+91 98765 43212</a>
                      <a href="mailto:neha@blinkoffice.com">neha@blinkoffice.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-card">
                  <div className="team-image">
                    <div className="team-avatar">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="team-content">
                    <h5>Vikram Mehta</h5>
                    <p className="team-position">Leasing Manager</p>
                    <p className="team-specialty">Warehouse & Industrial</p>
                    <div className="team-contact">
                      <a href="tel:+919876543213">+91 98765 43213</a>
                      <a href="mailto:vikram@blinkoffice.com">vikram@blinkoffice.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-card">
                  <div className="team-image">
                    <div className="team-avatar">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="team-content">
                    <h5>Ritu Agarwal</h5>
                    <p className="team-position">Sales Associate</p>
                    <p className="team-specialty">Investment Advisory</p>
                    <div className="team-contact">
                      <a href="tel:+919876543214">+91 98765 43214</a>
                      <a href="mailto:ritu@blinkoffice.com">ritu@blinkoffice.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Support Team */}
          <div className="department-block">
            <div className="row">
              <div className="col-12 mb-4">
                <h3 className="department-title">
                  <i className="fas fa-headset"></i>
                  Support & Operations Team
                </h3>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-3 col-md-6">
                <div className="team-card">
                  <div className="team-image">
                    <div className="team-avatar">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="team-content">
                    <h5>Suresh Yadav</h5>
                    <p className="team-position">Operations Manager</p>
                    <p className="team-specialty">Property Management</p>
                    <div className="team-contact">
                      <a href="tel:+919876543215">+91 98765 43215</a>
                      <a href="mailto:suresh@blinkoffice.com">suresh@blinkoffice.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-card">
                  <div className="team-image">
                    <div className="team-avatar">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="team-content">
                    <h5>Kavita Jain</h5>
                    <p className="team-position">Legal Advisor</p>
                    <p className="team-specialty">Documentation & Compliance</p>
                    <div className="team-contact">
                      <a href="tel:+919876543216">+91 98765 43216</a>
                      <a href="mailto:kavita@blinkoffice.com">kavita@blinkoffice.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-card">
                  <div className="team-image">
                    <div className="team-avatar">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="team-content">
                    <h5>Rohit Verma</h5>
                    <p className="team-position">Marketing Manager</p>
                    <p className="team-specialty">Digital Marketing & Branding</p>
                    <div className="team-contact">
                      <a href="tel:+919876543217">+91 98765 43217</a>
                      <a href="mailto:rohit@blinkoffice.com">rohit@blinkoffice.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-card">
                  <div className="team-image">
                    <div className="team-avatar">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="team-content">
                    <h5>Anjali Kapoor</h5>
                    <p className="team-position">Customer Success</p>
                    <p className="team-specialty">Client Relations</p>
                    <div className="team-contact">
                      <a href="tel:+919876543218">+91 98765 43218</a>
                      <a href="mailto:anjali@blinkoffice.com">anjali@blinkoffice.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="team-values py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">What Makes Our Team Special</h2>
              <p className="section-subtitle">The values and qualities that drive our success</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h4>Expertise & Experience</h4>
                <p>Our team collectively brings over 100+ years of commercial real estate experience across various sectors and markets.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h4>Client-Centric Approach</h4>
                <p>Every team member is committed to understanding client needs and delivering personalized solutions that exceed expectations.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <h4>Local Market Knowledge</h4>
                <p>Deep understanding of Gurgaon and Delhi NCR markets, including micro-locations, pricing trends, and future developments.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4>Integrity & Trust</h4>
                <p>We build long-term relationships based on transparency, honesty, and ethical business practices in every transaction.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h4>Innovation & Technology</h4>
                <p>Leveraging latest technology and innovative approaches to streamline processes and enhance client experience.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h4>Quick Response</h4>
                <p>Committed to providing rapid responses and quick turnaround times for all client inquiries and requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="join-team-section py-5 bg-primary text-white">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="cta-title">Join Our Growing Team</h2>
              <p className="cta-subtitle">
                Are you passionate about commercial real estate? We&apos;re always looking for talented professionals to join our team.
              </p>
              <div className="cta-buttons">
                <Link href="/careers" className="btn btn-light btn-lg me-3">
                  View Open Positions
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg">
                  Send Your Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
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

        .team-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.3s ease;
          height: 100%;
        }

        .team-card:hover {
          transform: translateY(-10px);
        }

        .team-card.leadership {
          border-top: 4px solid #007bff;
        }

        .team-image {
          background: linear-gradient(135deg, #007bff, #0056b3);
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .team-avatar {
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
        }

        .team-content {
          padding: 2rem;
        }

        .team-content h4, .team-content h5 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .team-position {
          color: #007bff;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .team-specialty {
          color: #28a745;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .team-bio {
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .team-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .team-stats span {
          background: #e3f2fd;
          color: #1976d2;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .team-social {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .team-social a {
          width: 40px;
          height: 40px;
          background: #f8f9fa;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #007bff;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .team-social a:hover {
          background: #007bff;
          color: white;
        }

        .team-contact {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .team-contact a {
          color: #007bff;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .team-contact a:hover {
          text-decoration: underline;
        }

        .department-title {
          color: #102e50;
          font-weight: 600;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .department-title i {
          color: #007bff;
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
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #28a745, #20c997);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
          font-size: 2rem;
        }

        .value-card h4 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .value-card p {
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
        }

        .join-team-section {
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
          
          .team-content {
            padding: 1.5rem;
          }
          
          .team-stats {
            justify-content: center;
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

export default TeamPage;
