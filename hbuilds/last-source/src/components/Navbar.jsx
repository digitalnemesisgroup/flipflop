import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
      <header
      style={{
        background: isScrolled
          ? (isDark ? 'rgba(0,0,0,0.85)' : 'rgba(250,248,245,0.92)')
          : 'transparent',
        borderBottom: isScrolled ? `1px solid var(--border)` : '1px solid transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 md:py-4"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-2.5 group shrink-0">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg md:rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
              <Cpu size={18} />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              FlipFlops<span className="text-indigo-500">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{ color: 'var(--text-secondary)' }}
                className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-500 after:transition-all hover:after:w-full ${location.pathname === link.path ? 'text-indigo-500 after:w-full' : 'hover:text-indigo-500'}`}
              >
                {link.name}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)', background: 'var(--glass-bg)' }}
              title={isDark ? 'Switch to Light' : 'Switch to Dark'}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/30"
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2 md:gap-3">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center"
              style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)', background: 'var(--glass-bg)' }}
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              style={{ color: 'var(--text-primary)' }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 shadow-2xl py-5 px-5 md:px-6 flex flex-col gap-4 lg:hidden"
            style={{
              background: isDark ? 'rgba(0,0,0,0.97)' : 'rgba(250,248,245,0.97)',
              borderBottom: `1px solid var(--border)`,
              backdropFilter: 'blur(20px)',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={link.path}
                  style={{ color: location.pathname === link.path ? 'var(--accent)' : 'var(--text-secondary)' }}
                  className="text-base md:text-lg font-medium transition-colors py-1 block"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl text-white font-semibold text-center bg-indigo-600 hover:bg-indigo-500 transition-colors mt-2 block"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
