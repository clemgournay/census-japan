import PrefectureSelection from '@components/prefecture-selection/prefecture-selection';
import PrefectureSelectionSkeleton from '@components/prefecture-selection/prefecture-selection-skeleton';
import ChartViewer from '@components/chart-viewer/chart-viewer';

import styles from './page.module.scss';
import { Suspense } from 'react';
import { ParsePrefs } from '@utils/parsing';

type Props = {
  searchParams?: Promise<{
    prefs?: string;
  }>;
}

export default async function Home({searchParams}: Props) {
  const params = await searchParams;
  const prefCodes = params ? ParsePrefs(params.prefs) : [1];
  return (
    <main className={styles.main}>
      <Suspense fallback={<PrefectureSelectionSkeleton />}>
        <PrefectureSelection prefCodes={prefCodes}/>
      </Suspense>
      <ChartViewer prefCodes={prefCodes}/>
    </main>
  );
}
