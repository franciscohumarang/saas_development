'use client';

import { useState, useEffect } from 'react';
import PlaybookModal from './PlaybookModal';
import { Currency, formatPrice, convertPrice, getLocalCurrency } from '../utils/currency';

const PricingTier = ({
  title,
  basePrice,
  currency,
  features,
  ctaText,
  isPopular = false,
}: {
  title: string;
  basePrice: number;
  currency: Currency;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}) => {
  const price = convertPrice(basePrice, currency);
  
  return (
    <div className={`bg-gray-800 rounded-2xl shadow-xl p-8 ${isPopular ? 'ring-2 ring-blue-500' : ''}`}>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-4xl font-bold text-blue-400 mb-6">{basePrice === 0 ? 'Custom' : formatPrice(price)}</p>
      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="https://calendly.com/buildwithai/1-hr-meeting"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-4 px-8 rounded-lg text-lg font-semibold transition-all ${
          isPopular
            ? 'bg-blue-500 hover:bg-blue-600 text-white'
            : 'bg-gray-700 hover:bg-gray-600 text-white border-2 border-blue-500'
        }`}
      >
        {ctaText}
      </a>
    </div>
  );
};

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>('USD');

  useEffect(() => {
    const detectLocation = async () => {
      const localCurrency = await getLocalCurrency();
      setCurrency(localCurrency);
    };

    detectLocation();
  }, []);

  const tiers = [
    {
      id: 'starter',
      title: 'Starter Package',
      basePrice: 500,
      features: [
        'Custom landing page',
        'Basic functionality',
        'Contact form integration',
        'Mobile responsive design',
        '2 rounds of revisions',
      ],
      ctaText: 'Book a Call',
    },
    {
      id: 'standard',
      title: 'Standard App',
      basePrice: 2500,
      features: [
        'Full app development',
        'User authentication',
        'Database integration',
        'Payment processing',
        'Admin dashboard',
        '1-month support',
      ],
      ctaText: 'Book a Call',
      isPopular: true,
    },
    {
      id: 'premium',
      title: 'Premium Solution',
      basePrice: 0,
      features: [
        'Everything in Standard, plus:',
        'Advanced features',
        'Custom integrations',
        'Performance optimization',
        'Enhanced security',
        '3-month support',
      ],
      ctaText: 'Book a Call',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400">
            Choose the perfect package to bring your app idea to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <PricingTier
              key={tier.id}
              {...tier}
              currency={currency}
            />
          ))}
        </div>

        {/* Pricing Disclaimer */}
        <div className="mt-12 mb-20 max-w-3xl mx-auto">
          <p className="text-sm text-gray-400 text-center">
            <span className="font-semibold text-gray-300">Note:</span> Prices cover development and support only. Additional costs may apply for hosting services, backend infrastructure, third-party integrations (e.g., AI services, payment processors), and premium plugins/libraries. I&apos;ll provide detailed infrastructure recommendations and cost estimates during our consultation.
          </p>
        </div>

        {/* DIY Guide Section */}
        <div className="mt-20 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Want to Learn More? Get My {formatPrice(convertPrice(99, currency))} Guide
          </h3>
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-blue-500/20">
            <h4 className="text-xl font-bold text-blue-400 mb-6">
              📖 &ldquo;Building Modern Apps: A Complete Guide&rdquo;
            </h4>
            <ul className="space-y-4 mb-8 text-left">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Step-by-step guide to modern app development</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Tools, templates & exact workflows</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Common pitfalls to avoid & money-saving tips</span>
              </li>
            </ul>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 px-8 rounded-lg text-lg font-semibold transition-all bg-gray-700 hover:bg-gray-600 text-white border-2 border-blue-500 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              🛒 Get the Guide for {formatPrice(convertPrice(99, currency))}
            </button>
          </div>
        </div>
      </div>

      <PlaybookModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Pricing; 