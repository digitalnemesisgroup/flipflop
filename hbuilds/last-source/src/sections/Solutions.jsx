import { solutions } from '../data/solutions';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 md:py-32" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6" style={{ color: 'var(--text-primary)' }}>Industry Solutions.</h2>
          <p className="text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>
            We don't just write code. We solve industry-specific problems with tailored technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {solutions.map((sol, i) => {
            const Icon = Icons[sol.icon] || Icons.Briefcase;
            return (
              <motion.div 
                key={sol.industry}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-6 md:p-8 rounded-2xl md:rounded-3xl transition-all duration-300 group"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}
              >
                <div className="flex items-center gap-4 mb-5 md:mb-6">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl md:rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg" style={{ color: 'var(--text-primary)' }}>{sol.industry}</h3>
                    <p className="text-indigo-500 text-sm">{sol.solution}</p>
                  </div>
                </div>
                
                <div className="mb-4 md:mb-6">
                  <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>Problem</p>
                  <p className="font-medium text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>{sol.problem}</p>
                </div>
                
                <div className="space-y-2 mb-6 md:mb-8">
                  {sol.features.slice(0,4).map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-5 md:pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Starting</span>
                  <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{sol.price}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
