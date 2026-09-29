import Services from '../sections/Services';
import HardwareSoftware from '../sections/HardwareSoftware';
import Technologies from '../sections/Technologies';
import Process from '../sections/Process';

const ServicesPage = () => {
  return (
    <>
      <div className="pt-24 pb-12" style={{ background: 'var(--bg)' }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Our Services.</h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Comprehensive technology solutions from hardware to software.
          </p>
        </div>
      </div>
      <Services />
      <HardwareSoftware />
      <Technologies />
      <Process />
    </>
  );
};

export default ServicesPage;
