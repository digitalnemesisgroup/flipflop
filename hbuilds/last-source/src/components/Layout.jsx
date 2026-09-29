import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, useScroll } from 'framer-motion';

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className="flex flex-col min-h-screen font-sans"
      style={{
        background: 'var(--bg)',
        color: 'var(--text-primary)',
        transition: 'background 0.4s ease, color 0.4s ease',
      }}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[9997] origin-left"
        style={{
          scaleX: scrollYProgress,
          background: 'linear-gradient(90deg, #6366f1, #22d3ee)',
        }}
      />

      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
