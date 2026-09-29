import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef(null);
  const trailRef = useRef({ x: -100, y: -100 });
  const posRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const checkDesktop = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsDesktop(window.innerWidth > 1024 && !isTouchDevice);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const updatePos = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const animateTrail = () => {
      trailRef.current = {
        x: trailRef.current.x + (posRef.current.x - trailRef.current.x) * 0.15,
        y: trailRef.current.y + (posRef.current.y - trailRef.current.y) * 0.15,
      };
      setTrailPos({ ...trailRef.current });
      rafRef.current = requestAnimationFrame(animateTrail);
    };
    rafRef.current = requestAnimationFrame(animateTrail);

    const handleOver = (e) => {
      const el = e.target.closest('button, a, [role="button"], label, .cursor-pointer, input, select, textarea');
      if (el) {
        setIsHovering(true);
        setHoverText(el.closest('[data-cursor]')?.dataset.cursor || '');
      } else {
        setIsHovering(false);
        setHoverText('');
      }
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updatePos, { passive: true });
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', updatePos);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseleave', handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isDesktop, isVisible]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Core dot — fast, precise */}
      <motion.div
        className="fixed z-[9999] pointer-events-none rounded-full"
        animate={{
          left: pos.x - 4,
          top: pos.y - 4,
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.08, ease: 'easeOut' }}
        style={{
          width: 8,
          height: 8,
          background: '#6366f1',
          boxShadow: '0 0 8px rgba(99,102,241,0.6)',
        }}
      />

      {/* Outer ring — follows with lag */}
      <motion.div
        className="fixed z-[9998] pointer-events-none rounded-full flex items-center justify-center overflow-hidden"
        animate={{
          left: trailPos.x,
          top: trailPos.y,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 52 : 38,
          height: isHovering ? 52 : 38,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{
          border: isHovering ? '2px solid rgba(99,102,241,0.8)' : '1.5px solid rgba(99,102,241,0.4)',
          backgroundColor: isHovering ? 'rgba(99,102,241,0.12)' : 'transparent',
          backdropFilter: 'blur(2px)',
        }}
      >
        <AnimatePresence>
          {hoverText && (
            <motion.span
              key="label"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="text-[9px] font-bold tracking-widest text-indigo-600 select-none uppercase"
            >
              {hoverText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Particle trail effect */}
      {isHovering && (
        <motion.div
          className="fixed z-[9997] pointer-events-none rounded-full"
          animate={{
            left: pos.x - 2,
            top: pos.y - 2,
          }}
          transition={{ duration: 0.3 }}
          style={{
            width: 4,
            height: 4,
            background: 'rgba(236,72,153,0.6)',
            boxShadow: '0 0 6px rgba(236,72,153,0.4)',
          }}
        />
      )}
    </>
  );
}
