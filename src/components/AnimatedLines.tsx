'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedLines = () => {
  const [currentLine, setCurrentLine] = useState(-1); // -1 means no line is animating

  // Cycle through lines one at a time with delay
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setCurrentLine(0); // Start with first line
    }, 1000); // 1s delay before animation

    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % (13 * 2)); // 13 left + 13 right lines
    }, 5000); // 4s flow + 1s pause per line

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, []);

  // Animation variants for the flowing pulse
  const pulseVariants = {
    idle: (custom: { isOdd: boolean }) => ({
      y: custom.isOdd ? '60vh' : '-60vh',
      opacity: 0,
    }),
    active: (custom: { isOdd: boolean }) => ({
      y: custom.isOdd ? '-85vh' : '55vh',
      x: [0, custom.isOdd ? 2 : -2, 0], // Optional slight wobble
      opacity: 0.5,
      transition: {
        y: {
          duration: 4,
          ease: 'easeInOut',
        },
        x: {
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        },
        opacity: {
          duration: 0.6,
          ease: 'easeInOut',
        },
      },
    }),
  };

  return (
    <>
      {Array.from({ length: 13 }).map((_, i) => {
        const isOdd = i % 2 !== 0; // Odd lines flow bottom-to-top
        return (
          <>
            {/* Left side - Top segment */}
            <div
              key={`left-top-${i}`}
              className="absolute w-[0.8px] h-[45vh] bg-white"
              style={{
                left: `${i * 3}vw`,
                top: 0,
                opacity: 0.03,
              }}
            />

            {/* Left side - Bottom segment */}
            <div
              key={`left-bottom-${i}`}
              className="absolute w-[0.8px] h-[45vh] bg-white"
              style={{
                left: `${i * 3}vw`,
                bottom: 0,
                opacity: 0.03,
              }}
            />

            {/* Left side - Flowing water line */}
            <motion.div
              key={`left-pulse-${i}`}
              className="absolute w-[1px] h-[30vh] bg-cyan-300/30 blur-[2px] rounded-full"
              style={{
                left: `${i * 3}vw`,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
              variants={pulseVariants}
              initial="idle"
              animate={currentLine === i ? 'active' : 'idle'}
              custom={{ isOdd }}
            />

            {/* Right side - Top segment */}
            <div
              key={`right-top-${i}`}
              className="absolute w-[0.8px] h-[45vh] bg-white"
              style={{
                right: `${i * 3}vw`,
                top: 0,
                opacity: 0.02,
              }}
            />

            {/* Right side - Bottom segment */}
            <div
              key={`right-bottom-${i}`}
              className="absolute w-[0.8px] h-[45vh] bg-white"
              style={{
                right: `${i * 3}vw`,
                bottom: 0,
                opacity: 0.02,
              }}
            />

            {/* Right side - Flowing water line */}
            <motion.div
              key={`right-pulse-${i}`}
              className="absolute w-[1px] h-[30vh] bg-cyan-300/30 blur-[2px] rounded-full"
              style={{
                right: `${i * 3}vw`,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
              variants={pulseVariants}
              initial="idle"
              animate={currentLine === i + 13 ? 'active' : 'idle'}
              custom={{ isOdd }}
            />
          </>
        );
      })}
    </>
  );
};

export default AnimatedLines;
