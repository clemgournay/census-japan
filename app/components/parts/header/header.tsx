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
import { ROOT_PROPERTIES } from '@app/data/styles';

export default function Header() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {

    const refreshTheme = (): void => {
      const root = document.documentElement;
      const style = window.getComputedStyle(document.body);
      for (const property of ROOT_PROPERTIES) {
        const lightVal = style.getPropertyValue(`--${property}-light`);
        const darkVal = style.getPropertyValue(`--${property}-dark`);
        root.style.setProperty(`--${property}`, theme === 'light' ? lightVal : darkVal);
      }
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
          alt="日本地図とグラフを丸で囲まれたロゴ"
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