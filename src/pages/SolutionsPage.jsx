import Solutions from '../sections/Solutions';
import Projects from '../sections/Projects';
import Testimonials from '../sections/Testimonials';

const SolutionsPage = () => {
  return (
    <>
      <div className="pt-24 pb-12" style={{ background: 'var(--bg)' }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Industry Solutions.</h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Tailored technology solutions for your industry needs.
          </p>
        </div>
      </div>
      <Solutions />
      <Projects />
      <Testimonials />
    </>
  );
};

export default SolutionsPage;
