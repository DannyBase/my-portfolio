'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Coffee from "@/assets/images/coffee-c.png";

export default function CoffeeSteamEffect() {
  return (
    <div className="relative w-fit -mb-[126px]">
      <Image src={Coffee} className="size-[50px]" alt="Coffee" />

      {/* Realistic Vapor Lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            y: [-5, -30], 
            x: [0, i % 2 === 0 ? -3 : 3] // slight wave left and right
          }}
          transition={{
            duration: 2.5 + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4
          }}
          className="absolute w-[2px] h-[40px] bg-white/30 rounded-full blur-sm"
          style={{
            top: "-18px",
            left: `${22 + i * 4}px`,
          }}
        />
      ))}
    </div>
  );
}
