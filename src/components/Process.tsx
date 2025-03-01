export default function Process() {
  return (
    <section className="py-16 bg-gray-900" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Here&apos;s How I&apos;ll Launch Your SaaS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A simple, proven process to turn your idea into a working SaaS product.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Book a Call</h3>
            <p className="text-gray-400">
              We&apos;ll hop on a 15-min call to discuss your idea and pick the right package. Quick, no-pressure chat.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Build & Iterate</h3>
            <p className="text-gray-400">
              I&apos;ll handle the AI-powered development while you focus on your business. You&apos;ll get regular updates and live strategy calls.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Launch & Scale</h3>
            <p className="text-gray-400">
              Your SaaS goes live. I&apos;ll provide ongoing support to ensure it scales smoothly. Ready for growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 