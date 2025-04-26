'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onFinish: () => void;
}

const messages = [
  "I'm open for new projects.",
  'Building clean and creative experiences.',
  'Translating ideas into code.',
  'Let’s build something great together.',
];

export const Loader = ({ onFinish }: LoaderProps) => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index + 1 >= messages.length) {
        clearInterval(interval);
        setFadeOut(true); // start fade out
        setTimeout(() => {
          setIsVisible(false);
          onFinish(); // trigger finish only after fade out
        }, 1000); // match the exit transition duration
      } else {
        setIndex((prev) => prev + 1);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [index, onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center font-poppins text-center justify-center bg-teal-900 text-white text-2xl md:text-5xl z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {messages[index]}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
