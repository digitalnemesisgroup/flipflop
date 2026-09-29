import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none bg-indigo-500/5 dark:bg-blue-500/10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
            About FlipFlops.
          </h2>
          <p className="text-lg md:text-2xl leading-relaxed font-medium mb-10" style={{ color: 'var(--text-secondary)' }}>
            FlipFlops is a technology engineering company focused on building practical digital solutions for modern businesses. We combine software engineering, digital electronics and hardware development to create complete technology systems rather than isolated applications.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/25"
          >
            Work with us <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
