import About from '../sections/About';
import WhyFlipFlops from '../sections/WhyFlipFlops';
import TrustMetrics from '../sections/TrustMetrics';
import Payment from '../sections/Payment';

const AboutPage = () => {
  return (
    <>
      <div className="pt-24 pb-12" style={{ background: 'var(--bg)' }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>About Us.</h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Learn more about FlipFlops and our mission.
          </p>
        </div>
      </div>
      <About />
      <WhyFlipFlops />
      <TrustMetrics />
      <Payment />
    </>
  );
};

export default AboutPage;
