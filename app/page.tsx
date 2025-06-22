import PrefectureSelection from '@components/prefecture-selection/prefecture-selection';
import PrefectureSelectionSkeleton from '@components/prefecture-selection/prefecture-selection-skeleton';
import ChartViewer from '@components/chart-viewer/chart-viewer';

import styles from './page.module.scss';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<PrefectureSelectionSkeleton />}>
        <PrefectureSelection />
      </Suspense>
      <ChartViewer />
    </main>
  );
}
