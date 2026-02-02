import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Industries from '@/components/Industries';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Problem />
      <Features />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Testimonials />
      <Industries />
      <FAQ />
      <ContactForm />
    </>
  );
}
