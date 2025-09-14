import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const CareersPage: React.FC = () => {
  return (
    <Layout 
      title="Careers at Blinkoffice - Join Our Commercial Real Estate Team"
      description="Join Blinkoffice's dynamic team of commercial real estate professionals. Explore career opportunities in sales, leasing, operations, and more in Gurgaon."
      keywords="careers blinkoffice, real estate jobs Gurgaon, commercial property jobs, sales careers, property consultant jobs"
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="hero-title">Build Your Career With Us</h1>
              <p className="hero-subtitle">
                Join Blinkoffice and be part of Gurgaon&apos;s leading commercial real estate team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="why-join-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Why Choose Blinkoffice?</h2>
              <p className="section-subtitle">Discover what makes us a great place to work</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>Career Growth</h4>
                <p>Clear career progression paths with opportunities for advancement and skill development in commercial real estate.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-rupee-sign"></i>
                </div>
                <h4>Competitive Compensation</h4>
                <p>Attractive salary packages with performance-based incentives and commission structures that reward excellence.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h4>Learning & Development</h4>
                <p>Continuous training programs, industry certifications, and mentorship from experienced professionals.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Team Culture</h4>
                <p>Collaborative work environment with supportive colleagues and strong team spirit across all departments.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <h4>Work-Life Balance</h4>
                <p>Flexible working arrangements and policies that support your personal and professional well-being.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <h4>Recognition & Rewards</h4>
                <p>Regular recognition programs, performance bonuses, and awards for outstanding achievements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="jobs-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Current Openings</h2>
              <p className="section-subtitle">Join our team in these exciting positions</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="job-card">
                <div className="job-header">
                  <h4>Senior Sales Manager</h4>
                  <span className="job-type">Full-time</span>
                </div>
                <div className="job-details">
                  <div className="job-meta">
                    <span><i className="fas fa-map-marker-alt"></i> Gurgaon</span>
                    <span><i className="fas fa-briefcase"></i> 5-8 years</span>
                    <span><i className="fas fa-rupee-sign"></i> ₹8-15 LPA</span>
                  </div>
                  <p>Lead our sales team in commercial property transactions. Manage client relationships and drive revenue growth.</p>
                  <div className="job-skills">
                    <span>Commercial Real Estate</span>
                    <span>Team Leadership</span>
                    <span>Client Management</span>
                  </div>
                </div>
                <div className="job-actions">
                  <button className="btn btn-primary">Apply Now</button>
                  <button className="btn btn-outline-primary">View Details</button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="job-card">
                <div className="job-header">
                  <h4>Property Consultant</h4>
                  <span className="job-type">Full-time</span>
                </div>
                <div className="job-details">
                  <div className="job-meta">
                    <span><i className="fas fa-map-marker-alt"></i> Gurgaon</span>
                    <span><i className="fas fa-briefcase"></i> 2-4 years</span>
                    <span><i className="fas fa-rupee-sign"></i> ₹4-8 LPA</span>
                  </div>
                  <p>Assist clients in finding suitable commercial properties. Handle property viewings and documentation.</p>
                  <div className="job-skills">
                    <span>Property Sales</span>
                    <span>Client Relations</span>
                    <span>Market Knowledge</span>
                  </div>
                </div>
                <div className="job-actions">
                  <button className="btn btn-primary">Apply Now</button>
                  <button className="btn btn-outline-primary">View Details</button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="job-card">
                <div className="job-header">
                  <h4>Business Development Executive</h4>
                  <span className="job-type">Full-time</span>
                </div>
                <div className="job-details">
                  <div className="job-meta">
                    <span><i className="fas fa-map-marker-alt"></i> Gurgaon</span>
                    <span><i className="fas fa-briefcase"></i> 1-3 years</span>
                    <span><i className="fas fa-rupee-sign"></i> ₹3-6 LPA</span>
                  </div>
                  <p>Generate new business opportunities and build relationships with property owners and investors.</p>
                  <div className="job-skills">
                    <span>Business Development</span>
                    <span>Lead Generation</span>
                    <span>Communication</span>
                  </div>
                </div>
                <div className="job-actions">
                  <button className="btn btn-primary">Apply Now</button>
                  <button className="btn btn-outline-primary">View Details</button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="job-card">
                <div className="job-header">
                  <h4>Marketing Manager</h4>
                  <span className="job-type">Full-time</span>
                </div>
                <div className="job-details">
                  <div className="job-meta">
                    <span><i className="fas fa-map-marker-alt"></i> Gurgaon</span>
                    <span><i className="fas fa-briefcase"></i> 3-5 years</span>
                    <span><i className="fas fa-rupee-sign"></i> ₹6-10 LPA</span>
                  </div>
                  <p>Develop and execute marketing strategies for property listings and brand promotion.</p>
                  <div className="job-skills">
                    <span>Digital Marketing</span>
                    <span>Content Strategy</span>
                    <span>Brand Management</span>
                  </div>
                </div>
                <div className="job-actions">
                  <button className="btn btn-primary">Apply Now</button>
                  <button className="btn btn-outline-primary">View Details</button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="job-card">
                <div className="job-header">
                  <h4>Operations Executive</h4>
                  <span className="job-type">Full-time</span>
                </div>
                <div className="job-details">
                  <div className="job-meta">
                    <span><i className="fas fa-map-marker-alt"></i> Gurgaon</span>
                    <span><i className="fas fa-briefcase"></i> 2-4 years</span>
                    <span><i className="fas fa-rupee-sign"></i> ₹4-7 LPA</span>
                  </div>
                  <p>Manage day-to-day operations, coordinate with teams, and ensure smooth business processes.</p>
                  <div className="job-skills">
                    <span>Operations Management</span>
                    <span>Process Improvement</span>
                    <span>Team Coordination</span>
                  </div>
                </div>
                <div className="job-actions">
                  <button className="btn btn-primary">Apply Now</button>
                  <button className="btn btn-outline-primary">View Details</button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="job-card">
                <div className="job-header">
                  <h4>Legal Advisor</h4>
                  <span className="job-type">Full-time</span>
                </div>
                <div className="job-details">
                  <div className="job-meta">
                    <span><i className="fas fa-map-marker-alt"></i> Gurgaon</span>
                    <span><i className="fas fa-briefcase"></i> 4-7 years</span>
                    <span><i className="fas fa-rupee-sign"></i> ₹7-12 LPA</span>
                  </div>
                  <p>Handle legal documentation, compliance, and provide legal guidance for property transactions.</p>
                  <div className="job-skills">
                    <span>Real Estate Law</span>
                    <span>Documentation</span>
                    <span>Compliance</span>
                  </div>
                </div>
                <div className="job-actions">
                  <button className="btn btn-primary">Apply Now</button>
                  <button className="btn btn-outline-primary">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="process-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Application Process</h2>
              <p className="section-subtitle">Simple steps to join our team</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="process-step">
                <div className="step-number">1</div>
                <h5>Apply Online</h5>
                <p>Submit your application and resume through our online portal or email.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="process-step">
                <div className="step-number">2</div>
                <h5>Initial Screening</h5>
                <p>Our HR team will review your application and contact you within 48 hours.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="process-step">
                <div className="step-number">3</div>
                <h5>Interview Process</h5>
                <p>Participate in telephonic and face-to-face interviews with our team.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="process-step">
                <div className="step-number">4</div>
                <h5>Welcome Aboard</h5>
                <p>Complete documentation and join our comprehensive onboarding program.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="benefits-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Employee Benefits</h2>
              <p className="section-subtitle">Comprehensive benefits package for our team</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="benefit-item">
                <i className="fas fa-heartbeat"></i>
                <h5>Health Insurance</h5>
                <p>Comprehensive medical coverage for you and your family</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="benefit-item">
                <i className="fas fa-calendar-alt"></i>
                <h5>Paid Time Off</h5>
                <p>Generous vacation days and sick leave policy</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="benefit-item">
                <i className="fas fa-car"></i>
                <h5>Transport Allowance</h5>
                <p>Monthly transport reimbursement or company vehicle</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="benefit-item">
                <i className="fas fa-mobile-alt"></i>
                <h5>Mobile & Internet</h5>
                <p>Company mobile phone and internet allowance</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="benefit-item">
                <i className="fas fa-gift"></i>
                <h5>Performance Bonus</h5>
                <p>Quarterly and annual performance-based bonuses</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="benefit-item">
                <i className="fas fa-coffee"></i>
                <h5>Office Perks</h5>
                <p>Free meals, snacks, and recreational facilities</p>
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
              <h2 className="cta-title">Ready to Start Your Career Journey?</h2>
              <p className="cta-subtitle">
                Don&apos;t see a position that matches your skills? Send us your resume and we&apos;ll consider you for future opportunities.
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-light btn-lg me-3">
                  Send Your Resume
                </Link>
                <a href="mailto:careers@blinkoffice.com" className="btn btn-outline-light btn-lg">
                  careers@blinkoffice.com
                </a>
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

        .benefit-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
          height: 100%;
          transition: transform 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-10px);
        }

        .benefit-icon {
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

        .benefit-card h4 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .benefit-card p {
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
        }

        .job-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          padding: 2rem;
          height: 100%;
          transition: transform 0.3s ease;
        }

        .job-card:hover {
          transform: translateY(-5px);
        }

        .job-header {
          display: flex;
          justify-content: between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .job-header h4 {
          color: #102e50;
          font-weight: 600;
          margin: 0;
          flex: 1;
        }

        .job-type {
          background: #e3f2fd;
          color: #1976d2;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .job-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .job-meta span {
          color: #6c757d;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .job-meta i {
          color: #007bff;
        }

        .job-details p {
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .job-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .job-skills span {
          background: #f8f9fa;
          color: #495057;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
        }

        .job-actions {
          display: flex;
          gap: 1rem;
        }

        .job-actions .btn {
          flex: 1;
        }

        .process-step {
          text-align: center;
          padding: 2rem;
        }

        .step-number {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #28a745, #20c997);
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

        .benefit-item {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          text-align: center;
          height: 100%;
        }

        .benefit-item i {
          font-size: 3rem;
          color: #007bff;
          margin-bottom: 1rem;
        }

        .benefit-item h5 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .benefit-item p {
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
          
          .job-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .job-actions {
            flex-direction: column;
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

export default CareersPage;
