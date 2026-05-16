import { Nav } from '../components/Nav';
import { Hero } from '../components/Hero';
import { WhyWick } from '../components/WhyWick';
import { HowItWorks } from '../components/HowItWorks';
import { Screenshots } from '../components/Screenshots';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyWick />
        <HowItWorks />
        <Screenshots />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
