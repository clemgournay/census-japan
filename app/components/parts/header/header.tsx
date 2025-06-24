import Image from 'next/image';

// Styles
import styles from './header.module.scss';
import { GEMUNU_LIBRE } from '../../../fonts';

export default function Header() {
  return (
    <header className={styles.header}>
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
    </header>
  )
}