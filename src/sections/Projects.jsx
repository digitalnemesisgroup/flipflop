import { projects } from '../data/projects';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[200vh] md:h-[300vh] lg:h-[400vh]" style={{ background: 'var(--bg-secondary)' }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <div className="absolute top-12 md:top-20 lg:top-24 left-4 md:left-6 lg:left-24 z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Selected Works.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base lg:text-lg max-w-md lg:max-w-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Scroll to explore engineering excellence.
          </motion.p>
        </div>

        <motion.div style={{ x }} className="flex gap-3 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-24 pt-20 md:pt-28 lg:pt-32 w-max">
          {projects.map((project, i) => (
            <div 
              key={project.id}
              className="relative w-[80vw] md:w-[55vw] lg:w-[700px] h-[40vh] md:h-[50vh] lg:h-[55vh] shrink-0 group"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                className="w-full h-full rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden relative shadow-xl"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl">
                  <motion.img 
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)' }} />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-4 md:p-6 lg:p-10 flex flex-col justify-end">
                  <div className="flex justify-between items-end gap-4">
                    
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="overflow-hidden flex-1 min-w-0"
                    >
                      <span 
                        className="font-medium mb-1 md:mb-2 block tracking-widest text-xs uppercase"
                        style={{ color: 'var(--accent)' }}
                      >
                        {project.category}
                      </span>
                      <h3 className="text-xl md:text-3xl lg:text-5xl font-bold text-white mb-2 md:mb-4 tracking-tight truncate">
                        {project.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2 md:mb-4">
                        {project.technology.map((tech, idx) => (
                          <span 
                            key={tech} 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                            className="px-2 md:px-3 py-1 md:py-1.5 rounded-md md:rounded-lg text-xs md:text-sm border"
                            style={{ background: 'var(--surface)', color: 'var(--text-primary)', borderColor: 'var(--border)' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Button */}
                    <motion.button 
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shrink-0 text-white"
                      style={{ background: 'var(--accent)' }}
                    >
                      <ArrowUpRight size={20} />
                    </motion.button>
                    
                  </div>
                  
                  {/* Progress */}
                  <div className="absolute top-3 right-3 md:top-6 md:right-6 text-xs md:text-sm font-mono tracking-widest" style={{ color: 'var(--text-muted)' }}>
                    0{i + 1} <span style={{ color: 'var(--text-muted)', opacity: 0.5 }}>/</span> 0{projects.length}
                  </div>
                </div>

              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
