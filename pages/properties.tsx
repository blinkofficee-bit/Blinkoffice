import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const PropertiesPage: React.FC = () => {
  return (
    <Layout 
      title="Commercial Properties for Sale & Lease in Gurgaon - Blinkoffice"
      description="Browse premium commercial properties including office spaces, retail outlets, and warehouses for sale and lease in Gurgaon's prime locations."
      keywords="commercial properties Gurgaon, office space for rent, retail property for sale, warehouse lease"
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="hero-title">Premium Commercial Properties</h1>
              <p className="hero-subtitle">
                Discover the best commercial real estate opportunities in Gurgaon&apos;s prime business locations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section py-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="filter-bar">
                <div className="row g-3 align-items-center">
                  <div className="col-lg-3 col-md-6">
                    <select className="form-select">
                      <option>Property Type</option>
                      <option>Office Space</option>
                      <option>Retail Space</option>
                      <option>Warehouse</option>
                      <option>Industrial</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <select className="form-select">
                      <option>Location</option>
                      <option>Cyber City</option>
                      <option>Golf Course Road</option>
                      <option>Sohna Road</option>
                      <option>MG Road</option>
                      <option>Udyog Vihar</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <select className="form-select">
                      <option>Budget Range</option>
                      <option>Under ₹1 Lakh</option>
                      <option>₹1-5 Lakhs</option>
                      <option>₹5-10 Lakhs</option>
                      <option>Above ₹10 Lakhs</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <button className="btn btn-primary w-100">Search Properties</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="properties-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="section-title">Featured Properties</h2>
                <div className="view-options">
                  <button className="btn btn-outline-secondary btn-sm me-2">Grid View</button>
                  <button className="btn btn-outline-secondary btn-sm">List View</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row g-4">
            {/* Property 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="property-card">
                <div className="property-image">
                  <div className="property-badge sale">For Sale</div>
                  <div className="property-type">Office Space</div>
                </div>
                <div className="property-content">
                  <h5>Premium Office Space - DLF Cyber City</h5>
                  <p className="property-location">
                    <i className="fas fa-map-marker-alt"></i>
                    DLF Cyber City, Phase 2, Gurgaon
                  </p>
                  <div className="property-details">
                    <div className="detail-item">
                      <i className="fas fa-expand-arrows-alt"></i>
                      <span>5,000 sq ft</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-couch"></i>
                      <span>Furnished</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-car"></i>
                      <span>50 Parking</span>
                    </div>
                  </div>
                  <div className="property-features">
                    <span>24/7 Security</span>
                    <span>Power Backup</span>
                    <span>High Speed Internet</span>
                  </div>
                  <div className="property-price">₹8.5 Crores</div>
                  <div className="property-actions">
                    <button className="btn btn-primary">View Details</button>
                    <button className="btn btn-outline-primary">Contact</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Property 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="property-card">
                <div className="property-image">
                  <div className="property-badge lease">For Lease</div>
                  <div className="property-type">Retail Space</div>
                </div>
                <div className="property-content">
                  <h5>High Street Retail Space - Golf Course Road</h5>
                  <p className="property-location">
                    <i className="fas fa-map-marker-alt"></i>
                    Golf Course Road, Sector 56, Gurgaon
                  </p>
                  <div className="property-details">
                    <div className="detail-item">
                      <i className="fas fa-expand-arrows-alt"></i>
                      <span>2,500 sq ft</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-store"></i>
                      <span>Ground Floor</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-eye"></i>
                      <span>High Visibility</span>
                    </div>
                  </div>
                  <div className="property-features">
                    <span>Mall Entrance</span>
                    <span>Food Court Access</span>
                    <span>Ample Parking</span>
                  </div>
                  <div className="property-price">₹3,75,000/month</div>
                  <div className="property-actions">
                    <button className="btn btn-primary">View Details</button>
                    <button className="btn btn-outline-primary">Contact</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Property 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="property-card">
                <div className="property-image">
                  <div className="property-badge lease">For Lease</div>
                  <div className="property-type">Warehouse</div>
                </div>
                <div className="property-content">
                  <h5>Modern Warehouse - Manesar Industrial Area</h5>
                  <p className="property-location">
                    <i className="fas fa-map-marker-alt"></i>
                    Manesar Industrial Area, Gurgaon
                  </p>
                  <div className="property-details">
                    <div className="detail-item">
                      <i className="fas fa-expand-arrows-alt"></i>
                      <span>25,000 sq ft</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-truck"></i>
                      <span>Loading Docks</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-road"></i>
                      <span>Highway Access</span>
                    </div>
                  </div>
                  <div className="property-features">
                    <span>24/7 Security</span>
                    <span>Fire Safety</span>
                    <span>Cold Storage Ready</span>
                  </div>
                  <div className="property-price">₹4,50,000/month</div>
                  <div className="property-actions">
                    <button className="btn btn-primary">View Details</button>
                    <button className="btn btn-outline-primary">Contact</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Property 4 */}
            <div className="col-lg-4 col-md-6">
              <div className="property-card">
                <div className="property-image">
                  <div className="property-badge sale">For Sale</div>
                  <div className="property-type">Office Space</div>
                </div>
                <div className="property-content">
                  <h5>Corporate Office - Udyog Vihar Phase 4</h5>
                  <p className="property-location">
                    <i className="fas fa-map-marker-alt"></i>
                    Udyog Vihar Phase 4, Gurgaon
                  </p>
                  <div className="property-details">
                    <div className="detail-item">
                      <i className="fas fa-expand-arrows-alt"></i>
                      <span>8,000 sq ft</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-building"></i>
                      <span>3rd Floor</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-car"></i>
                      <span>80 Parking</span>
                    </div>
                  </div>
                  <div className="property-features">
                    <span>Conference Rooms</span>
                    <span>Cafeteria</span>
                    <span>Gym Facility</span>
                  </div>
                  <div className="property-price">₹12 Crores</div>
                  <div className="property-actions">
                    <button className="btn btn-primary">View Details</button>
                    <button className="btn btn-outline-primary">Contact</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Property 5 */}
            <div className="col-lg-4 col-md-6">
              <div className="property-card">
                <div className="property-image">
                  <div className="property-badge lease">For Lease</div>
                  <div className="property-type">Retail Space</div>
                </div>
                <div className="property-content">
                  <h5>Showroom Space - MG Road</h5>
                  <p className="property-location">
                    <i className="fas fa-map-marker-alt"></i>
                    MG Road, Near Metro Station, Gurgaon
                  </p>
                  <div className="property-details">
                    <div className="detail-item">
                      <i className="fas fa-expand-arrows-alt"></i>
                      <span>1,800 sq ft</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-store"></i>
                      <span>Ground Floor</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-subway"></i>
                      <span>Metro Connected</span>
                    </div>
                  </div>
                  <div className="property-features">
                    <span>Glass Frontage</span>
                    <span>AC Installed</span>
                    <span>Customer Parking</span>
                  </div>
                  <div className="property-price">₹1,80,000/month</div>
                  <div className="property-actions">
                    <button className="btn btn-primary">View Details</button>
                    <button className="btn btn-outline-primary">Contact</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Property 6 */}
            <div className="col-lg-4 col-md-6">
              <div className="property-card">
                <div className="property-image">
                  <div className="property-badge lease">For Lease</div>
                  <div className="property-type">Office Space</div>
                </div>
                <div className="property-content">
                  <h5>IT Office Space - Sohna Road</h5>
                  <p className="property-location">
                    <i className="fas fa-map-marker-alt"></i>
                    Sohna Road, Sector 48, Gurgaon
                  </p>
                  <div className="property-details">
                    <div className="detail-item">
                      <i className="fas fa-expand-arrows-alt"></i>
                      <span>3,200 sq ft</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-couch"></i>
                      <span>Semi-Furnished</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-wifi"></i>
                      <span>Fiber Internet</span>
                    </div>
                  </div>
                  <div className="property-features">
                    <span>Server Room</span>
                    <span>Meeting Rooms</span>
                    <span>Cafeteria</span>
                  </div>
                  <div className="property-price">₹1,60,000/month</div>
                  <div className="property-actions">
                    <button className="btn btn-primary">View Details</button>
                    <button className="btn btn-outline-primary">Contact</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <button className="btn btn-outline-primary btn-lg">Load More Properties</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary text-white">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="cta-title">Can&apos;t Find What You&apos;re Looking For?</h2>
              <p className="cta-subtitle">
                Let our experts help you find the perfect commercial property that matches your specific requirements.
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-light btn-lg me-3">
                  Get Personalized Search
                </Link>
                <Link href="/services" className="btn btn-outline-light btn-lg">
                  Our Services
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

        .filter-bar {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #102e50;
          margin-bottom: 0;
        }

        .property-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.3s ease;
          height: 100%;
        }

        .property-card:hover {
          transform: translateY(-10px);
        }

        .property-image {
          height: 250px;
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
          left: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .property-badge.sale {
          background: #28a745;
          color: white;
        }

        .property-badge.lease {
          background: #ffc107;
          color: #212529;
        }

        .property-type {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .property-content {
          padding: 2rem;
        }

        .property-content h5 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .property-location {
          color: #6c757d;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .property-location i {
          margin-right: 0.5rem;
          color: #007bff;
        }

        .property-details {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #495057;
          font-size: 0.9rem;
        }

        .detail-item i {
          color: #007bff;
        }

        .property-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .property-features span {
          background: #e3f2fd;
          color: #1976d2;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .property-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #007bff;
          margin-bottom: 1.5rem;
        }

        .property-actions {
          display: flex;
          gap: 1rem;
        }

        .property-actions .btn {
          flex: 1;
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
          
          .property-actions {
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

export default PropertiesPage;
