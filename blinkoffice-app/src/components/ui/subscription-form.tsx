'use client';

import { useState } from 'react';

export default function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing! We will notify you when we launch.');
      setEmail('');
    }, 1000);
    
    // In a real application, you would send the email to your API
    // try {
    //   const response = await fetch('/api/subscribe', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email }),
    //   });
    //   const data = await response.json();
    //   
    //   if (response.ok) {
    //     setStatus('success');
    //     setMessage(data.message || 'Thank you for subscribing!');
    //     setEmail('');
    //   } else {
    //     setStatus('error');
    //     setMessage(data.message || 'Something went wrong. Please try again.');
    //   }
    // } catch (error) {
    //   setStatus('error');
    //   setMessage('Something went wrong. Please try again.');
    // }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
          >
            {status === 'loading' ? 'Subscribing...' : 'Notify Me'}
          </button>
        </div>
        
        {message && (
          <p className={`text-sm ${status === 'error' ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}