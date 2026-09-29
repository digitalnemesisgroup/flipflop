import { services } from '../data/services';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 80, damping: 16 } }
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Light-theme bg decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center top, var(--glow), transparent 70%)' }} />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Technology Without the Gaps.
          </h2>
          <p className="text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>
            From a single application to a complete hardware and software ecosystem, FlipFlops builds technology around how your business actually works.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7"
        >
          {services.map((service) => {
            const Icon = Icons[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
                className="group p-7 rounded-[1.75rem] flex flex-col relative overflow-hidden transition-all duration-300"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow)',
                }}
              >
                {/* Hover glow */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-indigo-500/10 dark:bg-cyan-500/10 -mr-10 -mt-10" />

                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-indigo-500 dark:text-cyan-400"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                >
                  {Icon && <Icon size={28} />}
                </motion.div>

                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>

                {/* Feature list – shows first 4, hover reveals more */}
                <div className="overflow-hidden transition-all duration-500 max-h-[112px] group-hover:max-h-[300px] flex-grow">
                  <ul className="space-y-2.5">
                    {service.includes.map((item, idx) => (
                      <li
                        key={item}
                        className={`flex items-start gap-2.5 text-sm ${idx > 3 ? 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300' : ''}`}
                        style={{ transitionDelay: idx > 3 ? `${(idx - 4) * 50 + 100}ms` : '0ms', color: 'var(--text-secondary)' }}
                      >
                        <Icons.CheckCircle2 size={15} className="text-indigo-500 dark:text-cyan-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)' }}>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-semibold mb-0.5" style={{ color: 'var(--text-muted)' }}>Starting at</p>
                    <p className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{service.startingPrice}</p>
                  </div>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all group-hover:bg-indigo-600 dark:group-hover:bg-cyan-500 group-hover:text-white"
                    style={{ border: '1px solid var(--border)', color: 'var(--text-muted)', background: 'var(--bg)' }}
                  >
                    <Icons.ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
