'use client';
import { useState, useEffect } from 'react';
import PlaybookModal from './PlaybookModal';
import { Currency, formatPrice, convertPrice, getLocalCurrency } from '../utils/currency';

export default function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>('USD');

  useEffect(() => {
    const detectLocation = async () => {
      const localCurrency = await getLocalCurrency();
      setCurrency(localCurrency);
    };

    detectLocation();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Turn Your App Idea Into Reality?
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Let&apos;s work together to build something amazing. Book a free consultation or get my comprehensive guide to modern app development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/buildwithai/1-hr-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a Free Consultation
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Get the Guide ({formatPrice(convertPrice(99, currency))})
          </button>
        </div>
      </div>

      <PlaybookModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
} 