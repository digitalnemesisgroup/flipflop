import { pricing } from '../data/pricing';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Transparent Pricing.
          </h2>
          <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
            Indicative pricing. Final pricing depends on project scope, integrations, complexity and hardware requirements.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {pricing.map((plan, i) => {
            const Icon = Icons[plan.icon] || Icons.Box;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.08 }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300 } }}
                className="p-6 rounded-2xl flex flex-col transition-all duration-300 group"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow)',
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-indigo-500 dark:text-cyan-400 bg-indigo-500/10 dark:bg-cyan-500/10">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>{plan.name}</h3>
                </div>

                <div className="mb-4">
                  <p className="text-[10px] uppercase tracking-widest font-semibold mb-0.5" style={{ color: 'var(--text-muted)' }}>Starting From</p>
                  <p className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{plan.price}</p>
                </div>

                <p className="text-sm leading-relaxed mb-5 flex-grow" style={{ color: 'var(--text-secondary)' }}>{plan.description}</p>

                <ul className="space-y-2 mb-6">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <Icons.Check size={13} className="text-indigo-500 dark:text-cyan-500 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 border text-center block"
                  style={{ border: '1px solid var(--border-strong)', color: 'var(--accent)', background: 'transparent' }}
                >
                  Get Quote
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
