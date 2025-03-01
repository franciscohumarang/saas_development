import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-900 pt-[120px] pb-16 md:pt-[150px] md:pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <div className="mb-12 lg:mb-0 max-w-[570px]">
              <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
                From Idea to SaaS{" "}
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Build Faster, Launch Smarter
                </span>
              </h1>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start text-lg md:text-xl text-gray-400">
                  <svg className="w-6 h-6 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Rapid Development Without Cutting Corners
                </li>
                <li className="flex items-start text-lg md:text-xl text-gray-400">
                  <svg className="w-6 h-6 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Built for Non-Tech Founders Who Want Results
                </li>
                <li className="flex items-start text-lg md:text-xl text-gray-400">
                  <svg className="w-6 h-6 text-green-400 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Done-for-You AI-Assisted SaaS Development
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://calendly.com/saasdevai/1-hr-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a Call
                </a>
                <a
                  href="#pricing"
                  className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  View Packages
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative z-10">
              <Image
                src="/saas-preview.avif"
                alt="SaaS Preview"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 