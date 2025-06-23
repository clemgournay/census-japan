// Styles
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <h1 className={styles.title}>CENSUS JAPAN</h1>
    </header>
  )
}