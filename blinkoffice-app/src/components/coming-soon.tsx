'use client';
import CountdownTimer from './ui/countdown-timer';
import SubscriptionForm from './ui/subscription-form';
import SocialLinks from './ui/social-links';

// SVG icons for social media
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function ComingSoon() {
  // Set launch date to 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);
  
  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com', icon: <TwitterIcon /> },
    { name: 'Facebook', url: 'https://facebook.com', icon: <FacebookIcon /> },
    { name: 'Instagram', url: 'https://instagram.com', icon: <InstagramIcon /> },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: <LinkedInIcon /> },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl w-full mx-auto text-center space-y-8 md:space-y-12">
        {/* Logo */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            BlinkOffice
          </h1>
          <p className="text-lg md:text-xl mt-2 text-gray-600 dark:text-gray-300">
            The future of workspace management
          </p>
        </div>
        
        {/* Main content */}
        <div className="space-y-8 md:space-y-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
            We&apos;re launching soon
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We&apos;re working hard to bring you the best workspace management solution. 
            Subscribe to get notified when we launch.
          </p>
          
          {/* Countdown Timer */}
          <div className="py-4">
            <CountdownTimer targetDate={launchDate} />
          </div>
          
          {/* Subscription Form */}
          <div className="max-w-md mx-auto w-full">
            <SubscriptionForm />
          </div>
        </div>
        
        {/* Social Links */}
        <div className="pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Follow us on social media</p>
          <SocialLinks links={socialLinks} />
        </div>
        
        {/* Footer */}
        <footer className="pt-12 pb-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} BlinkOffice. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}