// Styles
import styles from './prefecture-selection.module.scss';

export default async function PrefectureSelectionSkeleton() {
  const nbPrefectures = 47;
  return (
    <div className={styles.prefectures}>
      {[...Array(nbPrefectures)].map((x: number, i: number) => {
        return (
          <div key={i} className={styles.prefecture}></div>
        )
      })}
    </div>
  )
}