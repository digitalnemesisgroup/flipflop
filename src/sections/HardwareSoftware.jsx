import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Wifi, Code2, Server, Database, Monitor, Smartphone, Briefcase, Activity, Cloud } from 'lucide-react';

export default function HardwareSoftware() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const steps = [
    { icon: Cpu, title: 'Hardware', desc: 'Custom PCB design and microcontrollers.' },
    { icon: Wifi, title: 'Communication', desc: 'Secure data transmission and IoT protocols.' },
    { icon: Code2, title: 'API', desc: 'Robust middleware linking devices to the cloud.' },
    { icon: Server, title: 'Backend', desc: 'Scalable infrastructure to handle device data.' },
    { icon: Database, title: 'Database', desc: 'Optimized storage for high-frequency telemetry.' },
    { icon: Monitor, title: 'Dashboard', desc: 'Real-time web interfaces for monitoring and control.' },
    { icon: Smartphone, title: 'Mobile', desc: 'Native applications for on-the-go management.' },
    { icon: Briefcase, title: 'Business', desc: 'Integration with enterprise systems like ERP/CRM.' }
  ];

  const hardwareOpacity = useTransform(smoothProgress, [0, 0.2, 0.4, 1], [1, 1, 0.2, 0]);
  const cloudOpacity = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, 0.5, 1, 0.8]);
  const dataPathLength = useTransform(smoothProgress, [0, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="relative border-y" style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh' }}>
      {/* Desktop: Scroll effect. Mobile: Static */}
      <div className="lg:h-[400vh]">
        <div className="lg:sticky lg:top-0 lg:h-screen flex items-center overflow-hidden py-12 md:py-16 lg:py-0">
          
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 w-full">
              
              {/* Left Side: Illustration */}
              <div className="relative h-[300px] md:h-[400px] lg:h-[600px] flex items-center justify-center perspective-[1000px]">
                
                <div className="absolute top-0 left-0 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white/40 w-full">
                  <span className="text-white">We Build the Device.</span><br/>
                  <span className="text-cyan-300">And Everything Around It.</span>
                </div>

                {/* Central Illustration */}
                <div className="relative w-full max-w-[300px] md:max-w-[400px] aspect-square transform-style-3d">
                  
                  {/* SVG Circuit Lines */}
                  <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 400">
                    <defs>
                      <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                    
                    <motion.path 
                      d="M 50 350 L 50 200 L 200 200 L 200 50 L 350 50" 
                      fill="transparent" 
                      stroke="url(#circuitGrad)" 
                      strokeWidth="4"
                      style={{ pathLength: dataPathLength }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    <motion.path 
                      d="M 350 350 L 350 200 L 200 200" 
                      fill="transparent" 
                      stroke="#aa3bff" 
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      style={{ pathLength: dataPathLength }}
                    />
                  </svg>

                  {/* Hardware Node */}
                  <motion.div 
                    style={{ opacity: hardwareOpacity, scale: hardwareOpacity }}
                    className="absolute bottom-4 left-4 md:bottom-10 md:left-10 w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.2)] z-20 backdrop-blur-md"
                  >
                    <Cpu size={28} className="text-cyan-400" />
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-xl md:rounded-2xl border border-cyan-400"
                    />
                  </motion.div>

                  {/* Processing Node (Center) */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center z-20 backdrop-blur-md"
                  >
                    <Activity size={24} className="text-blue-400" />
                  </motion.div>

                  {/* Cloud/Business Node */}
                  <motion.div 
                    style={{ opacity: cloudOpacity, scale: cloudOpacity }}
                    className="absolute top-4 right-4 md:top-10 md:right-10 w-20 h-20 md:w-32 md:h-32 rounded-full bg-purple-500/10 border border-purple-500/30 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(170,59,255,0.2)] z-20 backdrop-blur-md"
                  >
                    <Cloud size={24} className="text-purple-400 mb-1" />
                    <Briefcase size={18} className="text-purple-300" />
                  </motion.div>

                </div>
              </div>

              {/* Right Side: Steps */}
              <div className="flex flex-col justify-center lg:h-[600px] lg:pl-12 lg:border-l lg:border-white/10 relative">
                {/* Progress Line - Desktop only */}
                <motion.div 
                  className="absolute left-[-1px] top-0 w-[2px] bg-gradient-to-b from-cyan-500 to-purple-600 origin-top hidden lg:block"
                  style={{ scaleY: smoothProgress }}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6 lg:gap-12">
                  {steps.map((step, i) => {
                    const Icon = step.icon;
                    const stepStart = i / steps.length;
                    const stepEnd = (i + 1) / steps.length;
                    
                    return (
                      <motion.div 
                        key={step.title}
                        className="relative flex items-center gap-4 md:gap-6"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {/* Active Indicator - Desktop */}
                        <motion.div 
                          className="absolute -left-[37px] md:-left-[61px] w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-white/20 items-center justify-center hidden lg:flex"
                          style={{
                            borderColor: useTransform(smoothProgress, 
                              [stepStart - 0.1, stepStart, stepEnd], 
                              ["rgba(255,255,255,0.2)", "#22d3ee", "rgba(255,255,255,0.2)"]
                            ),
                            backgroundColor: useTransform(smoothProgress,
                              [stepStart - 0.1, stepStart, stepEnd],
                              ["#000", "rgba(34,211,238,0.2)", "#000"]
                            )
                          }}
                        >
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-cyan-400"
                            style={{
                              scale: useTransform(smoothProgress, [stepStart - 0.1, stepStart, stepEnd], [0, 1, 0])
                            }}
                          />
                        </motion.div>
                        
                        <motion.div
                          className="w-11 h-11 md:w-14 md:h-14 rounded-xl border border-white/10 flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: useTransform(smoothProgress, [stepStart - 0.1, stepStart], ["rgba(255,255,255,0.05)", "rgba(34,211,238,0.1)"]),
                            color: useTransform(smoothProgress, [stepStart - 0.1, stepStart], ["#9ca3af", "#22d3ee"]),
                            scale: useTransform(smoothProgress, [stepStart - 0.1, stepStart, stepEnd], [0.9, 1.1, 0.9])
                          }}
                        >
                          <Icon size={20} />
                        </motion.div>

                        <motion.div
                          style={{
                            opacity: useTransform(smoothProgress, [stepStart - 0.1, stepStart, stepEnd, stepEnd + 0.1], [0.3, 1, 1, 0.3]),
                            x: useTransform(smoothProgress, [stepStart - 0.1, stepStart], [20, 0])
                          }}
                        >
                          <h3 className="text-base md:text-xl font-bold text-white mb-1">
                            <span className="text-xs md:text-sm font-mono text-cyan-500 mr-2">0{i + 1}</span>
                            {step.title}
                          </h3>
                          <p className="text-gray-400 text-xs md:text-sm">{step.desc}</p>
                        </motion.div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
