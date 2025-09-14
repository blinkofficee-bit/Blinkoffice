import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const BlogPage: React.FC = () => {
  return (
    <Layout 
      title="Commercial Real Estate Blog - Blinkoffice Insights & News"
      description="Stay updated with the latest commercial real estate trends, market insights, and property news in Gurgaon and Delhi NCR from Blinkoffice experts."
      keywords="commercial real estate blog, property market news, Gurgaon real estate trends, office space insights, retail property news"
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="hero-title">Real Estate Insights & News</h1>
              <p className="hero-subtitle">
                Stay informed with expert insights, market trends, and latest news in commercial real estate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="featured-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h2 className="section-title">Featured Article</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="featured-article">
                <div className="article-image">
                  <div className="article-category">Market Analysis</div>
                </div>
                <div className="article-content">
                  <h3>Gurgaon Commercial Real Estate Market Outlook 2024</h3>
                  <div className="article-meta">
                    <span><i className="fas fa-calendar"></i> December 15, 2024</span>
                    <span><i className="fas fa-user"></i> Hardeep Joon</span>
                    <span><i className="fas fa-clock"></i> 8 min read</span>
                  </div>
                  <p>
                    The commercial real estate market in Gurgaon is witnessing unprecedented growth with new developments in Cyber City and Golf Course Road. Our comprehensive analysis reveals key trends that will shape the market in 2024...
                  </p>
                  <Link href="/blog/gurgaon-market-outlook-2024" className="btn btn-primary">
                    Read Full Article
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="trending-sidebar">
                <h4>Trending Topics</h4>
                <div className="trending-list">
                  <div className="trending-item">
                    <span className="trending-number">1</span>
                    <div>
                      <h6>Office Space Demand Surge</h6>
                      <small>Dec 12, 2024</small>
                    </div>
                  </div>
                  <div className="trending-item">
                    <span className="trending-number">2</span>
                    <div>
                      <h6>Retail Recovery Post-Pandemic</h6>
                      <small>Dec 10, 2024</small>
                    </div>
                  </div>
                  <div className="trending-item">
                    <span className="trending-number">3</span>
                    <div>
                      <h6>Warehouse Investment Opportunities</h6>
                      <small>Dec 8, 2024</small>
                    </div>
                  </div>
                  <div className="trending-item">
                    <span className="trending-number">4</span>
                    <div>
                      <h6>New Metro Line Impact</h6>
                      <small>Dec 5, 2024</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="categories-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-3 mb-4 fw-bold">Market Intelligence. Within Reach.</h1>
              <p className="lead mb-5 fs-4">Before making any recommendation, we analyze market dynamics, demographic shifts, and growth projections. Our insights help you make informed decisions in Gurgaon&apos;s evolving commercial landscape.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="category-card">
                <div className="category-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h5>Market Analysis</h5>
                <p>In-depth market reports and trend analysis</p>
                <span className="article-count">12 Articles</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="category-card">
                <div className="category-icon">
                  <i className="fas fa-building"></i>
                </div>
                <h5>Office Spaces</h5>
                <p>Office market trends and workspace insights</p>
                <span className="article-count">18 Articles</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="category-card">
                <div className="category-icon">
                  <i className="fas fa-store"></i>
                </div>
                <h5>Retail Properties</h5>
                <p>Retail market updates and consumer trends</p>
                <span className="article-count">15 Articles</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="category-card">
                <div className="category-icon">
                  <i className="fas fa-coins"></i>
                </div>
                <h5>Investment Tips</h5>
                <p>Expert advice on property investments</p>
                <span className="article-count">10 Articles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="articles-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="section-title">Recent Articles</h2>
                <div className="filter-buttons">
                  <button className="btn btn-outline-primary btn-sm active">All</button>
                  <button className="btn btn-outline-primary btn-sm">Market</button>
                  <button className="btn btn-outline-primary btn-sm">Office</button>
                  <button className="btn btn-outline-primary btn-sm">Retail</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="article-card">
                <div className="article-image">
                  <div className="article-category">Office Spaces</div>
                </div>
                <div className="article-content">
                  <h5>Top 5 Office Locations in Cyber City for Tech Companies</h5>
                  <div className="article-meta">
                    <span><i className="fas fa-calendar"></i> Dec 12, 2024</span>
                    <span><i className="fas fa-clock"></i> 5 min read</span>
                  </div>
                  <p>Discover the most sought-after office spaces in DLF Cyber City that offer the perfect blend of connectivity, amenities, and modern infrastructure...</p>
                  <Link href="/blog/top-office-locations-cyber-city" className="read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="article-card">
                <div className="article-image">
                  <div className="article-category">Market Analysis</div>
                </div>
                <div className="article-content">
                  <h5>Commercial Property Prices: Q4 2024 Report</h5>
                  <div className="article-meta">
                    <span><i className="fas fa-calendar"></i> Dec 10, 2024</span>
                    <span><i className="fas fa-clock"></i> 7 min read</span>
                  </div>
                  <p>Our quarterly analysis reveals significant price movements across different commercial segments in Gurgaon and Delhi NCR...</p>
                  <Link href="/blog/property-prices-q4-2024" className="read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="article-card">
                <div className="article-image">
                  <div className="article-category">Retail Properties</div>
                </div>
                <div className="article-content">
                  <h5>Retail Revival: High Street vs Mall Spaces</h5>
                  <div className="article-meta">
                    <span><i className="fas fa-calendar"></i> Dec 8, 2024</span>
                    <span><i className="fas fa-clock"></i> 6 min read</span>
                  </div>
                  <p>Analyzing the performance and prospects of high street retail locations compared to traditional mall spaces in the post-pandemic era...</p>
                  <Link href="/blog/retail-revival-comparison" className="read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="article-card">
                <div className="article-image">
                  <div className="article-category">Investment Tips</div>
                </div>
                <div className="article-content">
                  <h5>Warehouse Investment: ROI Analysis for 2024</h5>
                  <div className="article-meta">
                    <span><i className="fas fa-calendar"></i> Dec 5, 2024</span>
                    <span><i className="fas fa-clock"></i> 8 min read</span>
                  </div>
                  <p>Comprehensive ROI analysis for warehouse investments in key logistics hubs around Gurgaon and Manesar industrial areas...</p>
                  <Link href="/blog/warehouse-investment-roi" className="read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="article-card">
                <div className="article-image">
                  <div className="article-category">Market Analysis</div>
                </div>
                <div className="article-content">
                  <h5>Impact of New Metro Line on Commercial Properties</h5>
                  <div className="article-meta">
                    <span><i className="fas fa-calendar"></i> Dec 3, 2024</span>
                    <span><i className="fas fa-clock"></i> 5 min read</span>
                  </div>
                  <p>How the upcoming metro connectivity is reshaping commercial property values and investment opportunities along the new route...</p>
                  <Link href="/blog/metro-impact-commercial-properties" className="read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="article-card">
                <div className="article-image">
                  <div className="article-category">Office Spaces</div>
                </div>
                <div className="article-content">
                  <h5>Flexible Workspace Trends in Gurgaon</h5>
                  <div className="article-meta">
                    <span><i className="fas fa-calendar"></i> Dec 1, 2024</span>
                    <span><i className="fas fa-clock"></i> 6 min read</span>
                  </div>
                  <p>Exploring the growing demand for flexible office spaces and co-working environments in Gurgaon&apos;s business districts...</p>
                  <Link href="/blog/flexible-workspace-trends" className="read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <button className="btn btn-outline-primary btn-lg">Load More Articles</button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section py-5 bg-primary text-white">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="newsletter-title">Stay Updated with Market Insights</h2>
              <p className="newsletter-subtitle">
                Subscribe to our newsletter and get the latest commercial real estate news delivered to your inbox weekly.
              </p>
              <div className="newsletter-form">
                <div className="row g-3 justify-content-center">
                  <div className="col-md-6">
                    <input type="email" className="form-control form-control-lg" placeholder="Enter your email address" />
                  </div>
                  <div className="col-md-3">
                    <button className="btn btn-light btn-lg w-100">Subscribe</button>
                  </div>
                </div>
              </div>
              <small className="newsletter-note">
                No spam, unsubscribe at any time. We respect your privacy.
              </small>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, hsl(359.1deg 83.26% 53.14%) 0%, hsl(359.1deg 83.26% 53.14%) 100%);
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

        .featured-article {
          background: white;
          border-radius: 15px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          overflow: hidden;
        }

        .article-image {
          height: 300px;
          background: linear-gradient(135deg, hsl(359.1deg 83.26% 53.14%), hsl(359.1deg 83.26% 53.14%));
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 4rem;
        }

        .article-category {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .article-content {
          padding: 2.5rem;
        }

        .article-content h3 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 1.8rem;
        }

        .article-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          color: #6c757d;
          font-size: 0.9rem;
        }

        .article-meta span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .article-meta i {
          color: hsl(359.1deg 83.26% 53.14%);
        }

        .article-content p {
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .trending-sidebar {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          height: fit-content;
        }

        .trending-sidebar h4 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .trending-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .trending-item:last-child {
          border-bottom: none;
        }

        .trending-number {
          width: 30px;
          height: 30px;
          background: hsl(359.1deg 83.26% 53.14%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .trending-item h6 {
          color: #102e50;
          font-weight: 500;
          margin-bottom: 0.25rem;
          font-size: 0.95rem;
        }

        .trending-item small {
          color: #6c757d;
        }

        .category-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
          height: 100%;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .category-card:hover {
          transform: translateY(-10px);
        }

        .category-icon {
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

        .category-card h5 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .category-card p {
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .article-count {
          background: #e3f2fd;
          color: #1976d2;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .filter-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-buttons .btn.active {
          background: hsl(359.1deg 83.26% 53.14%);
          color: white;
          border-color: hsl(359.1deg 83.26% 53.14%);
        }

        .article-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.3s ease;
          height: 100%;
        }

        .article-card:hover {
          transform: translateY(-5px);
        }

        .article-card .article-image {
          height: 200px;
          font-size: 3rem;
        }

        .article-card .article-content {
          padding: 2rem;
        }

        .article-card h5 {
          color: #102e50;
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 1.2rem;
          line-height: 1.4;
        }

        .article-card .article-meta {
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .article-card p {
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .read-more {
          color: hsl(359.1deg 83.26% 53.14%);
          text-decoration: none;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .read-more:hover {
          color: hsl(359.1deg 83.26% 53.14%);
          gap: 1rem;
        }

        .newsletter-section {
          background: linear-gradient(135deg, hsl(359.1deg 83.26% 53.14%) 0%, hsl(359.1deg 83.26% 53.14%) 100%) !important;
        }

        .newsletter-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .newsletter-subtitle {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .newsletter-form {
          margin-bottom: 1rem;
        }

        .newsletter-form .form-control {
          border: none;
          border-radius: 10px;
        }

        .newsletter-note {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .newsletter-title {
            font-size: 2rem;
          }
          
          .article-content {
            padding: 1.5rem;
          }
          
          .trending-sidebar {
            margin-top: 2rem;
          }
          
          .filter-buttons {
            justify-content: center;
            margin-top: 1rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default BlogPage;
