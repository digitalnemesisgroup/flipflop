import { Link } from 'react-router-dom';
import { Cpu, Code2, Users, Camera, Video, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="pt-16 md:pt-20 pb-8 md:pb-10 relative overflow-hidden"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none blur-[120px] bg-indigo-500/10 dark:bg-cyan-500/10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-12 md:mb-14">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5 group mb-4 md:mb-5">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                <Cpu size={20} />
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                FlipFlops<span className="text-indigo-500">.</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed mb-5 md:mb-6 max-w-xs" style={{ color: 'var(--text-secondary)' }}>
              Hardware Meets Software. Digital Engineering for Modern Businesses. We build complete technology systems.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 md:gap-3">
              {[Code2, Users, Camera, Video].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:text-indigo-500 hover:scale-110"
                  style={{ border: '1px solid var(--border)', color: 'var(--text-muted)', background: 'var(--glass-bg)' }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 md:mb-5 text-xs md:text-sm uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Services</h4>
            <ul className="space-y-2.5 md:space-y-3">
              <li><Link to="/services" className="text-sm transition-colors hover:text-indigo-500" style={{ color: 'var(--text-muted)' }}>Web Development</Link></li>
              <li><Link to="/services" className="text-sm transition-colors hover:text-indigo-500" style={{ color: 'var(--text-muted)' }}>Mobile Apps</Link></li>
              <li><Link to="/services" className="text-sm transition-colors hover:text-indigo-500" style={{ color: 'var(--text-muted)' }}>Desktop Apps</Link></li>
              <li><Link to="/services" className="text-sm transition-colors hover:text-indigo-500" style={{ color: 'var(--text-muted)' }}>Hardware & IoT</Link></li>
              <li><Link to="/services" className="text-sm transition-colors hover:text-indigo-500" style={{ color: 'var(--text-muted)' }}>ERP & CRM</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 md:mb-5 text-xs md:text-sm uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Company</h4>
            <ul className="space-y-2.5 md:space-y-3">
              <li><Link to="/about" className="text-sm transition-colors hover:text-indigo-500" style={{ color: 'var(--text-muted)' }}>About Us</Link></li>
              <li><Link to="/solutions" className="text-sm transition-colors hover:text-indigo-500" style={{ color: 'var(--text-muted)' }}>Projects</Link></li>
              <li><Link to="/pricing" className="text-sm transition-colors hover:text-indigo-500" style={{ color: 'var(--text-muted)' }}>Pricing</Link></li>
              {/* <li><Link to="/about" className="text-sm transition-colors hover:text-indigo-500" style={{ color: 'var(--text-muted)' }}>Careers</Link></li> */}
              <li><Link to="/contact" className="text-sm transition-colors hover:text-indigo-500" style={{ color: 'var(--text-muted)' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold mb-4 md:mb-5 text-xs md:text-sm uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Contact</h4>
            <ul className="space-y-3 md:space-y-4">
              {/* Address 1 */}
              <li className="flex items-start gap-2.5 md:gap-3">
                <MapPin size={15} className="text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-0.5 text-indigo-500">Office 1</p>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    First Floor, Janpath Complex,<br />
                    Hazratganj, Lucknow – 226001
                  </span>
                </div>
              </li>
              {/* Address 2 */}
              <li className="flex items-start gap-2.5 md:gap-3">
                <MapPin size={15} className="text-pink-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-0.5 text-pink-500">Office 2</p>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    UGF, Nazarbagh Appartment,<br />
                    Cantonment Road, Lucknow – 226001
                  </span>
                </div>
              </li>
              {/* Email 1 */}
              <li className="flex items-center gap-2.5 md:gap-3">
                <Mail size={15} className="text-indigo-500 shrink-0" />
                <a href="mailto:info@flipflp.online" className="text-sm hover:text-indigo-500 transition-colors" style={{ color: 'var(--text-muted)' }}>
                  info@flipflp.online
                </a>
              </li>
              {/* Email 2 */}
              <li className="flex items-center gap-2.5 md:gap-3">
                <Mail size={15} className="text-pink-500 shrink-0" />
                <a href="mailto:contact@flipflp.online" className="text-sm hover:text-pink-500 transition-colors" style={{ color: 'var(--text-muted)' }}>
                  contact@flipflp.online
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {currentYear} FlipFlops Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-5 text-xs">
            <Link to="/about" className="hover:text-indigo-500 transition-colors" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link>
            <Link to="/about" className="hover:text-indigo-500 transition-colors" style={{ color: 'var(--text-muted)' }}>Terms of Service</Link>
            <Link to="/pricing" className="hover:text-indigo-500 transition-colors" style={{ color: 'var(--text-muted)' }}>Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
