import styles from './chart-viewer.module.scss';

export default function ChartViewerSkeleton() {
  
  return (
    <div className={styles.chartViewer}>
      <h3 className={styles.title}></h3>
    </div>
  )
}