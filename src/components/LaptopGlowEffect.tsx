'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Person from '@/assets/images/person.png';

export default function LaptopGlowEffect() {
  return (
    <div className="relative w-fit">
      <Image src={Person} className="size-[150px]" alt="Person" />

      {/* Realistic Screen Light Beam */}
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.8 }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute pointer-events-none blur-2xl"
        style={{
          width: "60px",
          height: "100px",
          top: "40px",   // position it to hit the face area
          left: "52px",  // adjust to match your image
          background: "linear-gradient(180deg, rgba(173,216,230,0.7) 0%, rgba(255,255,255,0.1) 100%)",
          transform: "rotate(-10deg)", // optional tilt
        }}
      />
    </div>
  );
}
