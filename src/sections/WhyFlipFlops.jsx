import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  { title: 'Custom Built', desc: 'No generic templates. We build exactly what your business needs.' },
  { title: 'Hardware + Software', desc: 'One team to design the electronics and write the code.' },
  { title: 'Business Focused', desc: 'We engineer solutions that improve operations and increase revenue.' },
  { title: 'Software-Compatible Hardware', desc: 'Custom hardware manufacturing designed for seamless software compatibility — no integration gaps.' },
  { title: 'Modern Technology', desc: 'Using the latest scalable stacks to ensure longevity.' },
  { title: 'Scalable Architecture', desc: 'Systems designed to grow seamlessly with your business.' },
  { title: 'Long Term Support', desc: 'We maintain and upgrade your infrastructure over time.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.15 } }
};
const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 16 } }
};

export default function WhyFlipFlops() {
  return (
    <section className="py-24 md:py-32 relative" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
            One Partner. Complete Technology.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300 } }}
              className="p-6 rounded-2xl flex flex-col gap-4 group transition-all duration-300"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow)',
              }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.4 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-indigo-500/10 dark:bg-cyan-500/10"
              >
                <CheckCircle2 size={22} className="text-indigo-500 dark:text-cyan-400" />
              </motion.div>
              <div>
                <h3 className="text-base font-bold mb-1.5 group-hover:text-indigo-500 dark:group-hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
