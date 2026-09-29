import { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';

export default function CostEstimator() {
  const [type, setType] = useState('Website');
  const [complexity, setComplexity] = useState('Basic');
  const [features, setFeatures] = useState([]);
  
  // For animated counting
  const [displayEstimate, setDisplayEstimate] = useState(15000);

  const basePrices = {
    'Website': 15000,
    'Web App': 60000,
    'Android': 40000,
    'iOS': 50000,
    'Desktop': 35000,
    'ERP': 100000,
    'CRM': 60000,
    'POS': 75000,
    'IoT': 25000,
    'Hardware': 40000,
    'Hardware + Software': 75000
  };

  const complexityMultiplier = {
    'Basic': 1,
    'Standard': 1.5,
    'Advanced': 2,
    'Enterprise': 3
  };

  const featurePrice = 8000;

  useEffect(() => {
    const base = basePrices[type] || 15000;
    const mult = complexityMultiplier[complexity] || 1;
    const targetEstimate = (base * mult) + (features.length * featurePrice);
    
    const controls = animate(displayEstimate, targetEstimate, {
      duration: 0.8,
      onUpdate: (value) => setDisplayEstimate(value),
      ease: "easeOut"
    });

    return controls.stop;
  }, [type, complexity, features]);

  const toggleFeature = (f) => {
    setFeatures(prev => prev.includes(f) ? prev.filter(i => i !== f) : [...prev, f]);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-500/5 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-pink-500/5 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
       
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div 
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-indigo-500/10 text-indigo-500 mb-5 md:mb-6 border border-indigo-500/20"
          >
            <Calculator size={28} />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>Estimate Your Project.</h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>Build your custom solution and get an instant indicative quote powered by our dynamic pricing engine.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6 md:space-y-8 p-5 md:p-8 rounded-2xl md:rounded-[2rem] shadow-xl"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            {/* Step 1 */}
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-500 flex items-center justify-center text-sm font-mono border border-indigo-500/30">1</span>
                Project Type
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {Object.keys(basePrices).map(t => (
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl border transition-all duration-300 font-medium text-xs md:text-sm ${type === t ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/30' : 'text-gray-600 hover:border-indigo-500/50 hover:bg-indigo-500/5'}`}
                    style={{ borderColor: type === t ? undefined : 'var(--border-strong)', background: type === t ? undefined : 'var(--bg)' }}
                  >
                    {t}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-500 flex items-center justify-center text-sm font-mono border border-pink-500/30">2</span>
                Complexity
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {Object.keys(complexityMultiplier).map(c => (
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={c}
                    onClick={() => setComplexity(c)}
                    className={`px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl border transition-all duration-300 font-medium text-xs md:text-sm ${complexity === c ? 'bg-pink-600 border-pink-500 text-white shadow-lg shadow-pink-500/30' : 'text-gray-600 hover:border-pink-500/50 hover:bg-pink-500/5'}`}
                    style={{ borderColor: complexity === c ? undefined : 'var(--border-strong)', background: complexity === c ? undefined : 'var(--bg)' }}
                  >
                    {c}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center text-sm font-mono border border-amber-500/30">3</span>
                Additional Features
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                {['Authentication', 'Payment Gateway', 'Admin Panel', 'API Integration', 'Real Time Data', 'Reports', 'Notifications', 'Hardware Integration', 'Cloud Deployment'].map(f => (
                  <motion.label 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    key={f} 
                    className={`flex items-center gap-2 md:gap-3 p-2.5 md:p-3 rounded-lg md:rounded-xl border cursor-pointer transition-all duration-300 ${features.includes(f) ? 'bg-indigo-500/10 border-indigo-500/50' : 'bg-gray-50 hover:bg-gray-100'}`}
                    style={{ color: features.includes(f) ? 'var(--text-primary)' : 'var(--text-secondary)', borderColor: features.includes(f) ? undefined : 'var(--border)' }}
                  >
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={features.includes(f)}
                      onChange={() => toggleFeature(f)}
                    />
                    <div className={`w-4 h-4 md:w-5 md:h-5 rounded border flex items-center justify-center transition-colors ${features.includes(f) ? 'bg-indigo-600 border-indigo-500' : 'border-gray-300 bg-white'}`}>
                      {features.includes(f) && (
                        <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </motion.svg>
                      )}
                    </div>
                    <span className="text-xs md:text-sm font-medium">{f}</span>
                  </motion.label>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl md:rounded-[2rem] flex flex-col justify-center text-center relative overflow-hidden shadow-xl"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <motion.div 
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-pink-500/5 to-transparent z-0" 
            />
             
            <div className="relative z-10">
              <p className="mb-4 uppercase tracking-widest text-xs md:text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>Estimated Cost</p>
              
              <div className="flex justify-center items-start mb-2">
                <span className="text-xl md:text-2xl text-indigo-500 mt-1 md:mt-2 mr-1">₹</span>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter tabular-nums" style={{ color: 'var(--text-primary)' }}>
                  {Math.round(displayEstimate).toLocaleString('en-IN')}
                </h3>
              </div>
              
              <p className="text-xs md:text-sm mb-8 md:mb-10 font-mono tracking-widest" style={{ color: 'var(--text-muted)' }}>
                UP TO ₹{Math.round(displayEstimate * 1.4).toLocaleString('en-IN')}
              </p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 md:py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/30"
              >
                Request Detailed Quote
              </motion.button>
              
              <p className="text-[10px] md:text-xs mt-5 md:mt-6 px-2 md:px-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                This is an algorithmic estimate based on selected parameters. Hardware manufacturing and custom electronics integration may vary depending on prototype complexity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
