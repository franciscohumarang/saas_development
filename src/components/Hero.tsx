import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/saas-preview.avif"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            I Make Building an App Easy
            <span className="block text-blue-400 mt-2">So You Can Focus on Your Vision</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Want an app but don&apos;t have the tech skills? No problem. I help entrepreneurs and businesses turn their ideas into custom apps, websites, and software—without the stress.
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
            <a
              href="#pricing"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              See How It Works
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-left">
              <div className="text-blue-400 text-lg font-semibold mb-2">Your Idea, Built Right</div>
              <p className="text-gray-400">I translate your vision into a working product, fast.</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-left">
              <div className="text-blue-400 text-lg font-semibold mb-2">No Tech Headaches</div>
              <p className="text-gray-400">No need to learn code, hire developers, or manage projects—I handle it all.</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-left">
              <div className="text-blue-400 text-lg font-semibold mb-2">AI & Smart Tools</div>
              <p className="text-gray-400">I use AI-driven development and the best tech to keep costs low and speed high.</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-left">
              <div className="text-blue-400 text-lg font-semibold mb-2">A Personal Approach</div>
              <p className="text-gray-400">Unlike big agencies, I work with you directly, guiding you every step of the way.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 