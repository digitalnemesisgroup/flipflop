import { technologies } from '../data/technologies';
import { motion } from 'framer-motion';

export default function Technologies() {
  return (
    <section className="py-24 md:py-32" style={{ background: 'var(--bg)' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            The Stack.
          </h2>
          <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
            Modern, scalable technologies to build robust and future-proof solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-2xl"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}
            >
              <h3 className="text-xs font-bold uppercase tracking-widest mb-3 text-indigo-500 dark:text-cyan-400">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.items.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors cursor-default"
                    style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
