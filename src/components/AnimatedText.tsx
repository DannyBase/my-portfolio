'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedText = () => {
  const sentences = [
    'Open to new tasks now',
    'Ready for fresh work',
    'Seeking new projects',
    'Prepared for tasks now',
    'Looking for work now',
    'Excited for new jobs',
    'Eager for bold tasks',
  ];
  const defaultSentence = 'Ready for fresh work'; // Shortened default

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(-1); // -1 for default
  const [isAnimating, setIsAnimating] = useState(false);

  // Start animation after 2s, cycle every 15s (slower animation needs more time)
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsAnimating(true);
      setCurrentSentenceIndex(0);
    }, 3000); // 2s delay before animation

    let interval: NodeJS.Timeout;
    if (isAnimating) {
      interval = setInterval(() => {
        setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
      }, 18000); // 15s cycle for slower animation
    }

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [isAnimating, sentences.length]);

  const displaySentence =
    currentSentenceIndex === -1 ? defaultSentence : sentences[currentSentenceIndex];
  const chars = displaySentence.split('');
  const words = displaySentence.split('');

  // Calculate delays with word gaps (slower)
  const getCharDelay = (index: number) => {
    let wordCount = 0;
    for (let i = 0; i < index; i++) {
      if (displaySentence[i] === ' ') wordCount++;
    }
    return index * 0.5 + wordCount * 0.4; // 0.5s per char + 0.4s per word start
  };

  // Character animation (slower)
  const charVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: getCharDelay(i), duration: 0.8, ease: 'easeOut' }, // 0.8s duration
    }),
    exit: { opacity: 0, y: 50, transition: { duration: 0.8, ease: 'easeIn' } }, // 0.8s exit
  };

  // Last two characters of each word bounce (slower)
  const lastTwoVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: getCharDelay(i),
        duration: 0.8, // 0.8s duration
        ease: 'easeOut',
        y: {
          type: 'spring',
          stiffness: 200,
          damping: 10,
          delay: getCharDelay(i) + 0.4, // Kept bounce delay at 0.4s
          from: -15, // Rise up a little before bouncing back
        },
      },
    }),
    exit: { opacity: 0, y: 50, transition: { duration: 0.8, ease: 'easeIn' } }, // 0.8s exit
  };

  // Target last two characters of each word
  const isLastTwoInWord = (index: number) => {
    const actualWords = displaySentence.split(' '); // Correctly split into words
    let charPosition = 0;
    for (const word of actualWords) {
      const wordLength = word.length;
      charPosition += wordLength + 1;
      if (index < charPosition - 1) {
        const positionInWord = index - (charPosition - wordLength - 1);
        return wordLength > 2 && positionInWord >= wordLength - 2; // Last two chars of each word
      }
    }
    return false;
  };

  return (
    <div className="text-white text-base">
      {currentSentenceIndex === -1 ? (
        // Default static sentence
        <div className="inline-flex flex-wrap gap-1">
          {words.map((word, wordIndex) => (
            <span key={`${word}-${wordIndex}`} className="inline-flex">
              {word.split('').map((char, charIndex) => (
                <span
                  key={`${char}-${charIndex}`}
                  className="inline-block"
                >
                  {char}
                </span>
              ))}
              {wordIndex < words.length - 1 && <span> </span>}
            </span>
          ))}
        </div>
      ) : (
        // Animated sentences
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSentenceIndex}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="inline-flex flex-wrap gap-1"
          >
            {chars.map((char, index) => {
              const isLastTwo = isLastTwoInWord(index);
              return (
                <motion.span
                  key={`${char}-${index}-${currentSentenceIndex}`}
                  variants={isLastTwo ? lastTwoVariants : charVariants}
                  custom={index}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default AnimatedText;