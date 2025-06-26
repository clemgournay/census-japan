// Styles
import styles from './chart-card.module.scss';

export default function ChartCardSkeleton() {
  
  return (
    <div className={styles.card}>
      <div className={styles.title}></div>
      <div className={styles.content}>
        <div className={`${styles.chart} ${styles.skeleton}`}></div>
      </div>
    </div>
  )
}