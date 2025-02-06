// components/ComingSoon.tsx
"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, HeartIcon } from '@heroicons/react/24/outline';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your email submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="absolute w-full py-6 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              ClientFocusedCare
            </span>
          </h1>
          <div className="space-x-6">
            <a href="#contact" className="text-gray-600 hover:text-blue-900 transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Compassionate Care,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Unparalleled Excellence
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            We're redefining care standards with personalized solutions that put you first. 
            Launching our premium services soon.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {[
            { icon: HeartIcon, title: 'Person-Centered Approach', text: 'Tailored care plans designed around individual needs' },
            { icon: PhoneIcon, title: '24/7 Support', text: 'Round-the-clock professional assistance' },
            { icon: EnvelopeIcon, title: 'Family Updates', text: 'Regular communication and progress reports' },
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <item.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          id="contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Be the First to Know</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for updates"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isLoading ? 'Processing...' : submitted ? 'Thank You!' : 'Notify Me'}
            </button>
          </form>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-blue-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Terms of Service
            </a>
          </div>
          <p className="text-blue-200">
            © {new Date().getFullYear()} ClientFocusedCare. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;