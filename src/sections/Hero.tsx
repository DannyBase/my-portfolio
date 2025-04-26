'use client';
import GrainImage from '@/assets/images/grain.jpg';
import AnimatedText from '@/components/AnimatedText';
import AnimatedLines from '@/components/AnimatedLines';
import LaptopGlowEffect from '@/components/LaptopGlowEffect';
import CoffeeSteamEffect from '@/components/CoffeeSteamEffect';
import BounceButton from '@/components/BounceButton';

export const HeroSection = () => {
  return (
    <div className="py-28 md:py-30 relative z-0 overflow-x-clip overflow-y-clip" id='home'>
      
      {/* Background grain & animated lines */}
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${GrainImage.src})` }}
        />
        <AnimatedLines />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center">

          <div className="flex items-center gap-1">
            <CoffeeSteamEffect/>
            <LaptopGlowEffect />
          </div>

          {/* Animated Text Display */}
          <div className="relative w-80 h-24 bg-teal-800 rounded-t-lg shadow-lg mx-auto flex items-center justify-center">
            <AnimatedText />
          </div>
        </div>

        {/* Hero Heading & Paragraph */}
        <div className="max-w-lg mx-auto">
          <h1 className="font-poppins text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Creating Intuitive and Impactful UI
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Blending creativity with precision, I craft digital experiences that are both engaging and effective. From intuitive interfaces to smooth functionality, I focus on building solutions users love.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 relative z-20">
          
          <a href="#projects">
          <BounceButton />
          </a>
          <a href='#contact' className="inline-flex items-center gap-2 border border-white bg-white text-teal-900 px-6 h-12 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <span>👋</span>
            <span>Let's Connect</span>
          </a>
        </div>
      </div>
    </div>
  );
};
