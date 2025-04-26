'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import ArrowDown from '@/assets/icons/arrow-down.svg';

export default function BounceButton() {
  const controls = useAnimation();

  useEffect(() => {
    const startBouncing = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800)); // delay before bounce starts
      controls.start({
        y: [0, -4, 0],
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 1.2,
          ease: 'easeInOut',
        },
      });
    };

    startBouncing();
  }, [controls]);

  return (
    <motion.button
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() =>
        controls.start({
          y: [0, -4, 0],
          transition: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 1.2,
            ease: 'easeInOut',
          },
        })
      }
      className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl overflow-hidden"
    >
      <motion.span animate={controls} className="font-semibold">
        Explore My Work
      </motion.span>

      <motion.div animate={controls}>
        <ArrowDown className="size-4" />
      </motion.div>
    </motion.button>
  );
}
