import Contact from '../sections/Contact';

const ContactPage = () => {
  return (
    <>
      <div className="pt-24 pb-12" style={{ background: 'var(--bg)' }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Contact Us.</h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Get in touch with us for your next project.
          </p>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default ContactPage;
