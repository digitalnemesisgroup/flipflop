import Pricing from '../sections/Pricing';
import CostEstimator from '../sections/CostEstimator';
import FAQ from '../sections/FAQ';

const PricingPage = () => {
  return (
    <>
      <div className="pt-24 pb-12" style={{ background: 'var(--bg)' }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Pricing.</h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Transparent and competitive pricing for all our services.
          </p>
        </div>
      </div>
      <Pricing />
      <CostEstimator />
      <FAQ />
    </>
  );
};

export default PricingPage;
