import { useState } from 'react';
import { Send, MapPin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent! We will contact you shortly.');
    e.target.reset();
  };

  const inputClass = "w-full rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40";

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none blur-[150px] bg-indigo-500/5 dark:bg-cyan-500/5" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Start a Conversation.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Tell us about your project, timeline and goals. We're here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Office 1 */}
            <div className="p-6 rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent)', opacity: 0.1 }}>
                  <MapPin size={18} style={{ color: 'var(--accent)' }} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>Office 1</span>
              </div>
              <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
                First Floor, Janpath Complex,<br />
                Hazratganj, Lucknow – 226001
              </p>
            </div>

            {/* Office 2 */}
            <div className="p-6 rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent-2)', opacity: 0.1 }}>
                  <MapPin size={18} style={{ color: 'var(--accent-2)' }} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent-2)' }}>Office 2</span>
              </div>
              <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
                UGF, Nazarbagh Appartment,<br />
                Cantonment Road, Lucknow – 226001
              </p>
            </div>

            {/* Emails */}
            <div className="p-6 rounded-2xl space-y-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--accent)', opacity: 0.1 }}>
                  <Mail size={18} style={{ color: 'var(--accent)' }} />
                </div>
                <a href="mailto:info@flipflp.online" className="text-sm font-semibold transition-colors" style={{ color: 'var(--text-primary)' }}>
                  info@flipflp.online
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--accent-2)', opacity: 0.1 }}>
                  <Mail size={18} style={{ color: 'var(--accent-2)' }} />
                </div>
                <a href="mailto:contact@flipflp.online" className="text-sm font-semibold transition-colors" style={{ color: 'var(--text-primary)' }}>
                  contact@flipflp.online
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-6 md:p-10 rounded-3xl shadow-2xl"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Name</label>
                <input
                  required type="text"
                  className={inputClass}
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Email</label>
                <input
                  required type="email"
                  className={inputClass}
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Company</label>
              <input
                type="text"
                className={inputClass}
                style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                placeholder="Your company (optional)"
              />
            </div>

            <div className="mb-5">
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Project Description</label>
              <textarea
                required rows="4"
                className={`${inputClass} resize-none`}
                style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                placeholder="Describe your project..."
              />
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
                I need help with
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Hardware', 'Mobile App', 'Payment Gateway', 'Admin Panel', 'Cloud Deployment', 'Maintenance'].map(item => (
                  <label
                    key={item}
                    className="flex items-center gap-2 p-3 rounded-xl cursor-pointer transition-colors hover:border-indigo-400 text-sm"
                    style={{ border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text-secondary)' }}
                  >
                    <input type="checkbox" className="accent-indigo-500 w-4 h-4 shrink-0" />
                    <span className="text-xs font-medium">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {status && (
              <div className="mb-5 p-4 rounded-xl bg-green-500/10 text-green-600 border border-green-500/30 text-sm text-center font-medium">
                {status}
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 text-white transition-colors shadow-lg"
              style={{ background: 'var(--accent)', boxShadow: '0 8px 24px var(--glow)' }}
            >
              Send Message <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
