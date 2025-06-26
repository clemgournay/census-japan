// Components
import PrefectureSelectionSkeleton from '@components/ui/prefecture-selection/prefecture-selection-skeleton';

// Styles
import styles from './prefecture-card.module.scss';

export default function PrefectureCardSkeleton() {
  
  return (
    <div className={styles.card}>
      <div className={styles.title}></div>
      <div className={styles.content}>
        <PrefectureSelectionSkeleton />
      </div>
    </div>
  )
}