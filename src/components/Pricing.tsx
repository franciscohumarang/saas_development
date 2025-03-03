'use client';

const PricingTier = ({
  title,
  price,
  features,
  ctaText,
  isPopular = false,
}: {
  title: string;
  price: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}) => (
  <div className={`bg-gray-800 rounded-2xl shadow-xl p-8 ${isPopular ? 'ring-2 ring-blue-500' : ''}`}>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-4xl font-bold text-blue-400 mb-6">{price}</p>
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

const Pricing = () => {
  const tiers = [
    {
      id: 'validation',
      title: 'Validation Pack',
      price: '$500',
      features: [
        'High-converting landing page to validate your idea',
        'Lead capture with email integration',
        '1 hour strategy call',
        'Perfect for idea validation',
      ],
      ctaText: 'Book a Call',
    },
    {
      id: 'mvp',
      title: 'MVP SaaS',
      price: '$2,500',
      features: [
        'Core features development',
        'Payment system integration',
        'User authentication',
        'Basic admin dashboard',
        '1-month support',
      
      ],
      ctaText: 'Book a Call',
      isPopular: true,
    },
    {
      id: 'full',
      title: 'Full SaaS',
      price: 'Starts at $6,000',
      features: [
        'Everything in MVP, plus:',
        'Advanced features',
        'Better UX & automation',
        'API integrations',
        '3-month support',
        'Weekly strategy calls',
      ],
      ctaText: 'Book a Call',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <svg className="w-8 h-8 inline-block mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400">
            Choose the perfect package for your MicroSaaS journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <PricingTier key={tier.id} {...tier} />
          ))}
        </div>

        {/* Pricing Disclaimer */}
        <div className="mt-12 mb-20 max-w-3xl mx-auto">
          <p className="text-sm text-gray-400 text-center">
            <span className="font-semibold text-gray-300">Note:</span> Prices cover development and support only. Additional costs may apply for hosting services, backend infrastructure, third-party integrations (e.g., AI services, payment processors), and premium plugins/libraries. I&apos;ll provide detailed infrastructure recommendations and cost estimates during our consultation.
          </p>
        </div>

        {/* Training Program Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <svg className="w-8 h-8 inline-block mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              AI-Assisted App Development Training
            </h2>
            <p className="text-xl text-blue-400 font-semibold mb-2">
              Build your own AI-powered apps in just 6 hours
            </p>
            <p className="text-lg text-gray-400">
              No dev team? No problem. Learn to build fast—no deep coding required.
            </p>
          </div>

          {/* Value Proposition */}
          <div className="mb-12 max-w-3xl mx-auto">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-blue-500/20">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Why My Training Stands Out:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">
                    <span className="text-blue-400 font-medium">Competitive Price:</span> Similar AI development bootcamps cost $500-1,500 for 6-8 hours
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">
                    <span className="text-blue-400 font-medium">Real-World Focus:</span> Build actual apps, not just theory
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">
                    <span className="text-blue-400 font-medium">Latest AI Tools:</span> Learn the most current AI development stack
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">
                    <span className="text-blue-400 font-medium">Exclusive Student Deal:</span> Group learning at 70% off market rates
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Regular Training */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Training</h3>
              <p className="text-4xl font-bold text-blue-400 mb-6">$175<span className="text-lg text-gray-400">/seat</span></p>
              <div className="space-y-4 mb-8">
                <p className="text-gray-300">Perfect for:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Solopreneurs & Founders</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Tech Professionals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Small Business Owners</span>
                  </li>
                </ul>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Hands-on app building workshop</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Learn AI tools (Cursor, Claude, Bolt.new, Lovable, Replit)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Interactive online sessions with live Q&A</span>
                </li>
              </ul>
              <a
                href="https://calendly.com/buildwithai/1-hr-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 px-8 rounded-lg text-lg font-semibold transition-all bg-blue-500 hover:bg-blue-600 text-white text-center"
              >
                Reserve Your Seat
              </a>
            </div>

            {/* Student Special */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-8 ring-2 ring-blue-500">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
                Student Special
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Group Learning Deal</h3>
              <p className="text-4xl font-bold text-blue-400 mb-2">$175<span className="text-lg text-gray-400">/group</span></p>
              <p className="text-lg text-green-400 mb-6">Pay for 1, Bring 2 Friends FREE!</p>
              <div className="space-y-4 mb-8">
                <p className="text-gray-300">Perfect for:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">College Students</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Coding Bootcamp Students</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Aspiring Developers</span>
                  </li>
                </ul>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Build your own AI-powered app</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Learn latest AI development tools</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Interactive online sessions with live Q&A</span>
                </li>
              </ul>
              <a
                href="https://calendly.com/buildwithai/1-hr-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 px-8 rounded-lg text-lg font-semibold transition-all bg-blue-500 hover:bg-blue-600 text-white text-center"
              >
                Book Group Training
              </a>
            </div>
          </div>
        </div>

        {/* DIY Playbook Section 
        <div className="mt-20 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Still Unsure? Get the $99 Playbook!
          </h3>
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-blue-500/20">
            <h4 className="text-xl font-bold text-blue-400 mb-6">
              📖 &ldquo;Launch Your SaaS with AI Tools – Step by Step&rdquo;
            </h4>
            <ul className="space-y-4 mb-8 text-left">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Step-by-step guide based on real SaaS launches</span>
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
                <span className="text-gray-300">Mistakes to avoid (so you don&apos;t waste time & money)</span>
              </li>
            </ul>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 px-8 rounded-lg text-lg font-semibold transition-all bg-gray-700 hover:bg-gray-600 text-white border-2 border-blue-500 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              🛒 Get the $99 Playbook
            </button>
          </div>
        </div>

        <PlaybookModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
         */}
      </div>
     
    </section>
  );
};

export default Pricing; 