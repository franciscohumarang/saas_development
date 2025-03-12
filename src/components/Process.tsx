export default function Process() {
  return (
    <section className="py-16 bg-gray-900" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            My AI-Powered Development Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A cutting-edge approach that combines business expertise with AI innovation to transform your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">AI Strategy Planning</h3>
            <p className="text-gray-400">
              I analyze your business processes and identify key areas where AI can drive the most value and automation opportunities.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">AI Solution Development</h3>
            <p className="text-gray-400">
              Using advanced AI tools and frameworks, I build custom solutions that automate tasks, enhance decision-making, and optimize workflows.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Integration & Optimization</h3>
            <p className="text-gray-400">
              Seamlessly integrate AI solutions into your existing systems and continuously optimize for maximum business impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 