import Image from 'next/image';

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function Portfolio() {
  const portfolioItems: PortfolioItem[] = [
    {
      title: "CrushFlow",
      description: "AI-powered sales automation platform that helps businesses streamline their sales process and close more deals.",
      image: "/crushFlow.PNG",
      url: "https://crushflow.pages.dev"
    },
    {
      title: "ProfilelyAI",
      description: "AI-driven platform for generating customer insights for marketing, product, sales, and HR teams.",
      image: "/PAI.PNG",
      url: "https://profilelyai.com"
    },
    {
      title: "ScheDue",
      description: "A deadline management tool to combat procrastination through social accountability and gamification.",
      image: "/schedue.PNG",
      url: "https://schedue.com"
    }
  ];

  return (
    <section className="py-16 bg-gray-900" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            My SaaS Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I&apos;ve successfully built and launched these SaaS products using the same AI-powered development approach I&apos;ll use for your project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 