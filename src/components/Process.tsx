export default function Process() {
  return (
    <section className="py-16 bg-gray-900" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How I Build Your App
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A simple, transparent process focused on turning your vision into reality—without the technical complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Vision & Planning</h3>
            <p className="text-gray-400">
              We start with your idea. I help you refine it, identify key features, and create a clear plan for success.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Rapid Development</h3>
            <p className="text-gray-400">
              Using modern tools and AI, I build your app efficiently while keeping you updated every step of the way.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Launch & Support</h3>
            <p className="text-gray-400">
              I handle the technical details of launching your app and provide ongoing support to ensure your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 