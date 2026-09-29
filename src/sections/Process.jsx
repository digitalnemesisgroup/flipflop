import { motion } from 'framer-motion';
import { Search, PenTool, Code, Webhook, ShieldCheck, Rocket, Wrench } from 'lucide-react';

const steps = [
  { num: '01', title: 'Discover', desc: 'Understand business requirements.', icon: Search },
  { num: '02', title: 'Design', desc: 'Architecture and UI/UX.', icon: PenTool },
  { num: '03', title: 'Build', desc: 'Software and hardware development.', icon: Code },
  { num: '04', title: 'Integrate', desc: 'Connect APIs, devices and services.', icon: Webhook },
  { num: '05', title: 'Test', desc: 'Quality assurance and real world testing.', icon: ShieldCheck },
  { num: '06', title: 'Deploy', desc: 'Production deployment.', icon: Rocket },
  { num: '07', title: 'Support', desc: 'Maintenance and improvements.', icon: Wrench },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 relative" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            How We Build.
          </h2>
          <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
            A systematic engineering process for reliable solutions.
          </p>
        </motion.div>

        {/* Desktop: horizontal. Mobile: vertical list */}
        <div className="hidden md:grid grid-cols-7 gap-3 lg:gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="flex flex-col items-center text-center group"
              >
                <p className="text-5xl font-black mb-[-16px] select-none pointer-events-none" style={{ color: 'var(--border-strong)' }}>
                  {step.num}
                </p>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 relative z-10 transition-all duration-300 group-hover:bg-indigo-600 dark:group-hover:bg-cyan-500"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                  }}
                >
                  <Icon size={22} className="group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                <p className="text-xs leading-relaxed px-1" style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-4 rounded-2xl"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--accent)' }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-500 dark:text-cyan-500">{step.num}</span>
                  <h3 className="font-bold text-sm mb-0.5" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
