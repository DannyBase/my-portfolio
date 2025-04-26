'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GrainImage from '@/assets/images/grain.jpg';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const GlowingProjectGrid = ({ portfolioProjects }: { portfolioProjects: any[] }) => {
  const [glowingIndex, setGlowingIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * portfolioProjects.length);
      setGlowingIndex(randomIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [portfolioProjects.length]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14">
      {portfolioProjects.map((project, index) => {
        const isGlowing = glowingIndex === index;

        return (
          <motion.div
            key={project.title}
            className="bg-teal-800 rounded-3xl relative z-0 overflow-hidden px-8 py-8 pt-4"
            initial={{ boxShadow: '0 0 0px rgba(255,255,255,0)' }}
            animate={{
              boxShadow: isGlowing
                ? '0 0 25px rgba(255, 255, 255, 0.3)'
                : '0 0 0px rgba(255,255,255,0)',
            }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          >
            {/* Subtle background grain */}
            <div
              className="absolute inset-0 -z-10 opacity-5"
              style={{ backgroundImage: `url(${GrainImage.src})` }}
            />

            {/* Soft outline */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="absolute inset-0 outline outline-2 outline-white/20 rounded-3xl -outline-offset-2" />
            </div>

            {/* Actual card content */}
            <div className="relative z-20">
              <Image
                src={project.image}
                className="w-full rounded"
                alt={project.title}
              />

              <h3 className="font-poppins text-md md:text-2xl mt-8">{project.title}</h3>
              <p className="mt-4 text-white/50">{project.description}</p>

              <div className="mt-8 flex justify-between items-center">
              <div className="flex items-center">
  {project.tech.map((techItem: any, i: number) => (
    <div key={i} className="relative group -ml-2 first:ml-0">
      {/* Icon container */}
      <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center">
        <Image
          src={techItem.icon}
          alt={techItem.name}
          className="w-4 h-4 object-contain"
        />
      </div>

      {/* Tooltip */}
      <div className="absolute -top-9 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-200 ease-in-out bg-white text-teal-950 text-xs font-medium px-2 py-1 rounded-md shadow-lg whitespace-nowrap z-10 pointer-events-none">
        {techItem.name}
      </div>
    </div>
  ))}
</div>


                <a
                  href={project.link || '#'}
                  className="text-white/50 inline-flex gap-1 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                  <ArrowUpRightIcon className="w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default GlowingProjectGrid;
