import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Blinkoffice - Premier Commercial Real Estate Agency',
  description = 'Blinkoffice is a professionally managed real estate services, property brokerage and consulting company based in Gurgaon/Gurugram. Specializing in commercial real estate sales including retail space, anchor stores, shops, showrooms, food courts, and offices.',
  keywords = 'commercial real estate, Gurgaon, Delhi NCR, property brokerage, retail space, office space, showrooms, food court, real estate consulting'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Blinkoffice" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blinkoffice.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://blinkoffice.com" />
      </Head>
      
      <Header />
      
      <main>
        {children}
      </main>
      
      <Footer />
    </>
  );
};

export default Layout;
