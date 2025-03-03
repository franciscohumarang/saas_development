import Header from '../components/Header';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import WhyMe from '../components/WhyMe';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Portfolio />
        <section id="services">
          <Pricing />
        </section>
        <section id="why-me">
          <WhyMe />
        </section>
        <section id="process">
          <Process />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
