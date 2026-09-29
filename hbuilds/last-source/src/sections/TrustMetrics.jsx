import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 25, suffix: '+', label: 'Business Clients' },
  { value: 10, suffix: '+', label: 'Hardware Solutions' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
];

function AnimatedCounter({ value, suffix }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = value / 60;
        const timer = setInterval(() => {
          start += step;
          if (start >= value) { setDisplay(value); clearInterval(timer); }
          else setDisplay(Math.floor(start));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function TrustMetrics() {
  return (
    <section className="py-16 md:py-20 relative" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </h3>
              <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs mt-8" style={{ color: 'var(--text-muted)' }}>* Indicative demo data</p>
      </div>
    </section>
  );
}
