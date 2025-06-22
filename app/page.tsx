import PrefectureSelection from '@components/prefecture-selection/prefecture-selection';

import styles from './page.module.scss';
import { Suspense } from 'react';
import PrefectureSelectionSkeleton from './components/prefecture-selection/prefecture-selection-skeleton';

export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<PrefectureSelectionSkeleton />}>
        <PrefectureSelection />
      </Suspense>
    </main>
  );
}
