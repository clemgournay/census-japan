import PrefectureSelection from '@components/parts/prefecture-selection/prefecture-selection';
import PrefectureSelectionSkeleton from '@components/parts/prefecture-selection/prefecture-selection-skeleton';
import ChartViewer from '@components/parts/chart-viewer/chart-viewer';

import styles from './page.module.scss';
import { Suspense } from 'react';
import { ParsePrefs } from '@utils/parsing';
import { CATEGORIES } from '@data/categories';


type Props = {
  searchParams?: Promise<{
    prefs?: string;
    category?: string;
  }>;
}

export default async function Home({searchParams}: Props) {
  const params = await searchParams;
  const prefCodes = params ? ParsePrefs(params.prefs) : [1];
  const category = params && params.category ? params.category : CATEGORIES[0];
  return (
    <main className={styles.main}>
      <Suspense fallback={<PrefectureSelectionSkeleton />}>
        <PrefectureSelection prefCodes={prefCodes}/>
      </Suspense>
      <ChartViewer prefCodes={prefCodes} category={category}/>
    </main>
  );
}
