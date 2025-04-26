'use client';

import { useState } from 'react';
import { Loader } from '@/components/Loader';
import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { TapeSection } from '@/sections/Tape';
import { AboutSection } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Loader onFinish={() => setIsLoading(false)} />
      ) : (
        <div>
          <Header />
          <HeroSection />
          <AboutSection />
          <TapeSection />
          <ProjectsSection />
          <TapeSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </>
  );
}
