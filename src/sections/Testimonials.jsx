import { testimonials } from '../data/testimonials';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32" style={{ background: 'var(--bg)' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6" style={{ color: 'var(--text-primary)' }}>Client Feedback.</h2>
          <p className="text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>Hear from businesses that use our technology.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 md:p-8 rounded-2xl md:rounded-3xl relative group transition-all duration-300"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}
            >
              <Quote className="absolute top-6 right-6 text-indigo-500/20" size={40} />
              <p className="text-sm md:text-base leading-relaxed mb-6 md:mb-8 relative z-10" style={{ color: 'var(--text-secondary)' }}>"{t.content}"</p>
              <div className="flex items-center gap-3 md:gap-4">
                <img src={t.image} alt={t.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" style={{ border: '1px solid var(--border)' }} />
                <div>
                  <h4 className="font-bold text-sm md:text-base" style={{ color: 'var(--text-primary)' }}>{t.name}</h4>
                  <p className="text-xs md:text-sm text-indigo-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
