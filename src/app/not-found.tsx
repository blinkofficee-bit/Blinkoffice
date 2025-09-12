'use client';

import Link from 'next/link';

export default function NotFound() {
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
            404 - Page Not Found
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          
          <div className="pt-4">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Return Home
            </Link>
          </div>
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