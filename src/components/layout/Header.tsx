'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', sectionId: 'home' },
    { name: 'Services', href: '#services', sectionId: 'services' },
    { name: 'Vision', href: '#vision', sectionId: 'vision' },
    { name: 'Projects', href: '#projects', sectionId: 'projects' },
    { name: 'Testimonials', href: '#testimonials', sectionId: 'testimonials' },
    { name: 'Contact', href: '#contact', sectionId: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 120px offset to account for sticky header height
      const scrollPosition = window.scrollY + 120;
      const isAtBottom =
        window.innerHeight + Math.ceil(window.scrollY) >=
        document.documentElement.scrollHeight - 150;

      if (isAtBottom) {
        setActiveNav('Contact');
        return;
      }

      // Check section top positions backwards from Contact to Home
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveNav(item.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Perform immediate check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: { name: string; href: string; sectionId: string }
  ) => {
    e.preventDefault();
    setActiveNav(item.name);
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(item.sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    setActiveNav('Contact');
    setIsMobileMenuOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.container}>
        {/* Logo Container */}
        <div className={styles.logoContainer}>
          <Link href="/" aria-label="Sterling Technical Group Home">
            <Image
              src="/Sterling-26.png"
              alt="Sterling Technical Group"
              width={340}
              height={104}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
        </div>

        {/* Desktop Frame Layout */}
        <div className={styles.frame}>
          <nav className={styles.navContainer} aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeNav === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          <div className={styles.buttonContainer}>
            <button
              className={styles.estimateBtn}
              type="button"
              onClick={scrollToContact}
            >
              Get Your Estimate
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className={`${styles.hamburgerToggle} ${
            isMobileMenuOpen ? styles.isOpen : ''
          }`}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuDrawer}>
          {navItems.map((item) => {
            const isActive = activeNav === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`${styles.mobileNavLink} ${
                  isActive ? styles.active : ''
                }`}
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.name}
              </a>
            );
          })}
          <button
            type="button"
            className={styles.mobileEstimateBtn}
            onClick={scrollToContact}
          >
            Get Your Estimate
          </button>
        </div>
      )}
    </header>
  );
};
