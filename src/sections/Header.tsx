'use client';

import { useEffect, useState } from 'react';

export const Header = () => {
  const [active, setActive] = useState<string>('#home');
  const [glow, setGlow] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setGlow(true);
    setTimeout(() => setGlow(false), 800);

    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '#home';
    
      const scrollBottom = window.innerHeight + window.scrollY;
      const pageHeight = document.body.scrollHeight;
    
      if (Math.abs(scrollBottom - pageHeight) < 40) {
        setActive('#contact');
        return;
      }
    
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = item.href;
          }
        }
      });
    
      setActive(currentSection);
    };
    

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex justify-center items-center fixed w-full z-10">
      <nav
        className={`flex gap-1 p-1 border border-white/15 rounded border-t-0 bg-white/10 backdrop-blur transition-shadow duration-500 ${
          glow ? 'glow-border' : ''
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className={`nav-item px-4 py-2 rounded transition duration-300 ${
              active === item.href ? 'bg-white/10 text-white' : 'text-white/70'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};
