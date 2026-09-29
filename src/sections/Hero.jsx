import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Server, Database, Cloud, Smartphone, Monitor, Code2, Wifi } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.05,
        y: (e.clientY - window.innerHeight / 2) * 0.05
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const headline = "Hardware Meets Software.";
  const subhead = "Built Around Your Business.";

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, staggerChildren: 0.08 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const floatingNodes = [
    { icon: Database, label: 'Database', pos: 'top-[5%] left-[20%]', delay: 0 },
    { icon: Cloud, label: 'Cloud', pos: 'top-[15%] right-[15%]', delay: 0.2 },
    { icon: Smartphone, label: 'Mobile', pos: 'bottom-[25%] right-[20%]', delay: 0.4 },
    { icon: Monitor, label: 'Web', pos: 'bottom-[15%] left-[10%]', delay: 0.6 },
    { icon: Code2, label: 'API', pos: 'top-[40%] left-[5%]', delay: 0.8 },
    { icon: Wifi, label: 'IoT', pos: 'bottom-[40%] right-[5%]', delay: 1.0 }
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden perspective-[1000px]">
      {/* Animated Background */}
      <motion.div 
        animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        className="absolute inset-0 pointer-events-none z-0 opacity-30 dark:opacity-100"
        style={{ backgroundImage: 'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)', backgroundSize: '4rem 4rem', maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)' }}
      />
      
      <motion.div style={{ y, opacity }} className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-2xl relative z-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6"
              style={{ background: 'var(--accent)', color: '#fff', opacity: 0.9 }}
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Digital Engineering for Modern Businesses
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-2 leading-[1.1] flex flex-wrap"
              style={{ color: 'var(--text-primary)' }}
            >
              <span className="mr-2">Hardware</span>
              <span className="mr-2">Meets</span>
              <span>Software.</span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-[1.1] text-transparent bg-clip-text flex flex-wrap"
              style={{ backgroundImage: 'linear-gradient(to right, var(--accent), var(--accent-2))' }}
            >
              <span className="mr-2">Built</span>
              <span className="mr-2">Around</span>
              <span className="mr-2">Your</span>
              <span>Business.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-base md:text-lg mb-10 leading-relaxed max-w-xl flex flex-wrap"
              style={{ color: 'var(--text-secondary)' }}
            >
              FlipFlops builds custom software, digital electronics and connected technology solutions that help businesses automate, operate and scale.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link 
                to="/solutions"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold transition-colors flex items-center gap-2 group relative overflow-hidden text-white"
                style={{ background: 'var(--accent)' }}
              >
                <span className="relative z-10">Start a Project</span>
                <motion.span 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="relative z-10"
                >
                  <ArrowRight size={20} />
                </motion.span>
                <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration:300 ease-out z-0" />
              </Link>
              <Link 
                to="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium transition-colors"
                style={{ background: 'var(--surface)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="relative h-[400px] md:h-[600px] hidden lg:block perspective-[1000px]"
            style={{ 
              x: mousePosition.x, 
              y: mousePosition.y,
              rotateX: mousePosition.y * -0.2,
              rotateY: mousePosition.x * 0.2
            }}
          >
            {/* Visual Concept */}
            <div className="absolute inset-0 flex items-center justify-center transform-style-3d">
              <div className="relative w-full h-full max-w-[500px]">
                
                {/* Connecting Lines (SVG) with flowing data */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none" viewBox="0 0 500 500">
                  <defs>
                    <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="var(--accent-2)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.2" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {floatingNodes.map((_, i) => (
                    <motion.path 
                      key={`line-${i}`}
                      d={`M 250 250 L ${Math.cos((i * Math.PI * 2) / 6) * 180 + 250} ${Math.sin((i * Math.PI * 2) / 6) * 180 + 250}`} 
                      stroke="url(#gradientLine)" 
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 2 + i * 0.2 }}
                      filter="url(#glow)"
                    />
                  ))}

                  {/* Flowing particles along paths */}
                  {floatingNodes.map((_, i) => (
                    <motion.circle
                      key={`particle-${i}`}
                      r="3"
                      fill="var(--accent)"
                      filter="url(#glow)"
                      animate={{
                        cx: [250, Math.cos((i * Math.PI * 2) / 6) * 180 + 250, 250],
                        cy: [250, Math.sin((i * Math.PI * 2) / 6) * 180 + 250, 250],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "linear"
                      }}
                    />
                  ))}
                </svg>

                {/* Center Node */}
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1.5 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-2xl md:rounded-3xl p-[2px] z-30 transform-style-3d"
                  style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', boxShadow: '0 0 60px var(--glow)' }}
                >
                  <motion.div 
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full rounded-[20px] md:rounded-[22px] flex items-center justify-center relative overflow-hidden"
                    style={{ background: 'var(--surface)' }}
                  >
                    <div className="absolute inset-0 blur-xl" style={{ background: 'var(--accent)', opacity: 0.1 }} />
                    <Server className="w-8 h-8 md:w-12 md:h-12 relative z-10" style={{ color: 'var(--accent)' }} />
                  </motion.div>
                </motion.div>

                {/* Floating Cards */}
                {floatingNodes.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 2.2 + item.delay }}
                    className={`absolute ${item.pos} p-3 md:p-4 rounded-xl flex items-center gap-3 z-20 cursor-pointer shadow-xl`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: `translateZ(${Math.random() * 50 + 20}px)`,
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                    }}
                    whileHover={{ scale: 1.1, zIndex: 50 }}
                  >
                    <motion.div 
                      animate={{ rotateZ: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: Math.random() * 2 }}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center"
                      style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                    >
                      <item.icon size={20} style={{ color: 'var(--accent)' }} />
                    </motion.div>
                    <span className="font-semibold tracking-wide text-xs md:text-sm" style={{ color: 'var(--text-primary)' }}>{item.label}</span>
                  </motion.div>
                ))}

              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
