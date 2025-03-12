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

  const faqItems = [
    {
      question: "How can AI transform my business operations?",
      answer: "AI can revolutionize your business by automating repetitive tasks, providing data-driven insights, and creating intelligent workflows. I help businesses implement AI solutions for customer service automation, predictive analytics, process optimization, and smart decision-making systems. The result is increased efficiency, reduced costs, and improved customer satisfaction."
    },
    {
      question: "What types of AI solutions do you implement?",
      answer: "I specialize in practical AI implementations including natural language processing for customer service, machine learning for business analytics, automated workflow systems, and intelligent process automation. Each solution is customized to your specific business needs and integrated seamlessly with your existing systems."
    },
    {
      question: "How do you ensure AI solutions deliver business value?",
      answer: "I follow a value-first approach: First, I identify specific business processes where AI can create the most impact. Then, I develop and implement solutions with clear ROI metrics. Throughout the process, I focus on practical applications that deliver tangible business results rather than implementing AI just for the sake of it."
    },
    {
      question: "What's your development timeline?",
      answer: "Most AI solutions can be implemented in 4-8 weeks, depending on complexity. I use a rapid development approach that combines pre-built AI components with custom development to deliver results quickly. You'll see progress within the first few weeks."
    },
    {
      question: "How do you handle data security with AI implementations?",
      answer: "Security is paramount when dealing with AI and data. I implement enterprise-grade security measures including encrypted data processing, secure API integrations, and compliance with data protection regulations. All AI solutions are built with privacy-by-design principles."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "I provide comprehensive support including AI model maintenance, system optimization, and performance monitoring. I also offer training for your team to effectively use and manage the AI solutions, plus regular updates to improve system performance based on new data and requirements."
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