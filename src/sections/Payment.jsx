import { useState } from 'react';
import { CreditCard, Wallet, Smartphone, ShieldCheck } from 'lucide-react';

export default function Payment() {
  const [amount, setAmount] = useState('5000');
  const [customAmount, setCustomAmount] = useState('');
  const [purpose, setPurpose] = useState('Project Advance');

  const handlePay = () => {
    alert('Demo Payment Mode: Redirecting to secure gateway...');
  };

  return (
    <section className="py-24 md:py-32" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-green-500/10 text-green-500 mb-5 md:mb-6">
            <ShieldCheck size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6" style={{ color: 'var(--text-primary)' }}>Ready to Start?</h2>
          <p className="text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>Make secure payments for your project milestones.</p>
        </div>

        <div className="p-6 md:p-12 rounded-2xl md:rounded-3xl max-w-2xl mx-auto relative overflow-hidden shadow-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="absolute top-0 right-0 bg-amber-500/20 text-amber-600 text-xs font-bold px-3 md:px-4 py-1 rounded-bl-xl border-l border-b border-amber-500/30">
            DEMO PAYMENT MODE
          </div>
          
          <div className="mb-6 md:mb-8 mt-4">
            <label className="block text-sm font-medium mb-3 md:mb-4" style={{ color: 'var(--text-secondary)' }}>Payment Purpose</label>
            <select 
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full rounded-xl px-4 py-3 md:py-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500/40 appearance-none"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              <option value="Project Advance">Project Advance</option>
              <option value="Development Milestone">Development Milestone</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Custom Invoice">Custom Invoice</option>
            </select>
          </div>

          <div className="mb-6 md:mb-8">
            <label className="block text-sm font-medium mb-3 md:mb-4" style={{ color: 'var(--text-secondary)' }}>Select Amount</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-3 md:mb-4">
              {['5000', '10000', '25000', '50000'].map(amt => (
                <button
                  key={amt}
                  onClick={() => { setAmount(amt); setCustomAmount(''); }}
                  className={`py-2.5 md:py-3 rounded-xl border font-medium text-sm transition-colors ${amount === amt && !customAmount ? 'bg-indigo-600 border-indigo-500 text-white' : 'hover:bg-indigo-50'}`}
                  style={{ borderColor: amount === amt && !customAmount ? undefined : 'var(--border)', color: amount === amt && !customAmount ? undefined : 'var(--text-secondary)', background: amount === amt && !customAmount ? undefined : 'var(--bg)' }}
                >
                  ₹{(+amt).toLocaleString()}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }}>₹</span>
              <input 
                type="number" 
                placeholder="Custom Amount"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setAmount(''); }}
                className="w-full rounded-xl pl-8 pr-4 py-3 md:py-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              />
            </div>
          </div>

          <div className="mb-6 md:mb-8">
            <label className="block text-sm font-medium mb-3 md:mb-4" style={{ color: 'var(--text-secondary)' }}>Payment Method (Preview)</label>
            <div className="flex gap-3 md:gap-4">
              {[Smartphone, CreditCard, Wallet].map((Icon, i) => (
                <div key={i} className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handlePay}
            className="w-full py-3 md:py-4 rounded-xl bg-indigo-600 text-white font-bold text-base md:text-lg hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/30"
          >
            Pay ₹{customAmount ? Number(customAmount).toLocaleString() : Number(amount).toLocaleString()}
          </button>
        </div>
      </div>
    </section>
  );
}
