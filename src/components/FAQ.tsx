'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordion = ({ question, answer, isOpen, onClick }: FAQItem & { isOpen: boolean; onClick: () => void }) => (
  <div className="border-b border-gray-700 py-4">
    <button
      className="flex justify-between items-center w-full text-left"
      onClick={onClick}
    >
      <span className="text-lg font-semibold text-white">{question}</span>
      <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''} text-gray-400`}>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
    <div
      className={`mt-2 text-gray-300 transition-all duration-300 ${
        isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}
    >
      {answer}
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'How long does it take?',
      answer: '🕒 Validation Pack ($500) → 3 days with up to 2 revisions. \n 🕒 MVP SaaS ($2,500) → 4-6 Weeks\n🕒 Full SaaS ($6,900) → 8-12 Weeks',
    },
    {
      question: 'What if I don\'t have a solid idea yet?',
      answer: 'Start with the Validation Pack ($500). I\'ll help test your idea before you spend more on development.',
    },
    {
      question: 'What\'s the difference between MVP & Full SaaS?',
      answer: 'MVP = Core features, quick launch, perfect for validation.\nFull SaaS = More features, better UX, automation, built for scaling.',
    },
    {
      question: 'Will I own 100% of my SaaS?',
      answer: 'Yes! You\'ll own everything—code, revenue, and IP.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'For frontend, I use NextJS/React to build modern, fast web applications. For backend, I leverage serverless solutions like Cloudflare Workers, and databases like Supabase or Firebase. CloudFlare Pages for hosting. If you need a traditional backend, I use C# or Python. For mobile apps, I use React Native to build cross-platform solutions.',
    },
    {
      question: 'What if I need custom features?',
      answer: 'I can add custom features at an extra cost after your launch.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'No refunds, but I guarantee a high-quality product that meets your requirements.',
    },
    {
      question: 'What exactly is the Full SaaS package suitable for?',
      answer: 'The Full SaaS package is designed for focused, single-purpose applications that serve small to medium-sized businesses. It\'s perfect for implementing core business features, standard payment systems, user authentication, and basic admin dashboards. Think of it as a complete but streamlined solution for your specific business need.\n\nHowever, it\'s important to note what this package is NOT designed for. This is not suitable for enterprise-grade applications, multi-tenant architectures, or complex systems requiring microservices. It won\'t support custom AI/ML implementations or applications needing extreme scalability (millions of users). If you need these advanced features, you\'ll need a more comprehensive enterprise solution.',
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <svg className="w-8 h-8 inline-block mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Got Questions? I&apos;ve Got Answers
          </h2>
        </div>

        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <FAQAccordion
              key={index}
              {...item}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://X.com/@frankhhq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            DM me on Twitter/X
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 