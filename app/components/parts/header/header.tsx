'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Third-Party
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

// Styles
import styles from './header.module.scss';

// Fonts
import { GEMUNU_LIBRE } from '@app/fonts';

export default function Header() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {

    const refreshTheme = (): void => {
      const root = document.documentElement;
      const bodyColorDark = window.getComputedStyle(document.body).getPropertyValue('--body-color-dark');
      const bodyColorLight = window.getComputedStyle(document.body).getPropertyValue('--body-color-light');
      const primaryBgColorLight = window.getComputedStyle(document.body).getPropertyValue('--primary-bg-color-light');
      const primaryBgColorDark = window.getComputedStyle(document.body).getPropertyValue('--primary-bg-color-dark');
      const secondaryBgColorLight = window.getComputedStyle(document.body).getPropertyValue('--secondary-bg-color-light');
      const secondaryBgColorDark = window.getComputedStyle(document.body).getPropertyValue('--secondary-bg-color-dark');
      const fontColorLight = window.getComputedStyle(document.body).getPropertyValue('--font-color-light');
      const fontColorDark = window.getComputedStyle(document.body).getPropertyValue('--font-color-dark');
      const borderColorDark = window.getComputedStyle(document.body).getPropertyValue('--border-color-dark');
      const borderColorLight = window.getComputedStyle(document.body).getPropertyValue('--border-color-light');
      root.style.setProperty('--body-color', theme === 'light' ? bodyColorLight : bodyColorDark);
      root.style.setProperty('--primary-bg-color', theme === 'light' ? primaryBgColorLight : primaryBgColorDark);
      root.style.setProperty('--secondary-bg-color', theme === 'light' ? secondaryBgColorLight : secondaryBgColorDark);
      root.style.setProperty('--font-color', theme === 'light' ? fontColorLight : fontColorDark);
      root.style.setProperty('--border-color', theme === 'light' ? borderColorLight : borderColorDark);
    }

    refreshTheme();
  }, [theme]);

  return (
    <header className={`${styles.header} ${GEMUNU_LIBRE.className}`}>
      <div className={styles.logo}>
        <Image
          src="/logo.png"
          width={238}
          height={327}
          alt="Logo"
        />
      </div>
      <h1 className={`${styles.title} ${GEMUNU_LIBRE.className}`}>
        <span className={styles.primary}>CENSUS</span>
        <span className={styles.secondary}>JAPAN</span>
      </h1>
      <div className={styles.toggle}>
        <div className={`${styles.btn} ${theme === 'light' ? styles.active : ''}`} onClick={() => setTheme('light')}>
          <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
          <span>Light</span>
        </div>
        <div className={`${styles.btn} ${theme === 'dark' ? styles.active : ''}`} onClick={() => setTheme('dark')}>
          <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
          <span>Dark</span>
        </div>
      </div>
    </header>
  )
}