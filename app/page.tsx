import { Suspense } from 'react';

// Components
import PrefectureCard from '@components/parts/prefecture-card/prefecture-card';
import PrefectureCardSkeleton from '@components/parts/prefecture-card/prefecture-card-skeleton';
import ChartCard from '@components/parts/chart-card/chart-card';
import ChartCardSkeleton from '@components/parts/chart-card/chart-card-skeleton';
import FilterCardWrapper from '@components/parts/filter-card-wrapper/filter-card-wrapper';

// Styles
import styles from './page.module.scss';

// Data
import { CATEGORIES } from '@data/categories';

// Utils
import { ParsePrefs } from '@utils/parsing';


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
      <Suspense fallback={<PrefectureCardSkeleton />}>
        <PrefectureCard prefCodes={prefCodes}/>
      </Suspense>
      <Suspense fallback={<ChartCardSkeleton />}>
        <ChartCard prefCodes={prefCodes} category={category} />
      </Suspense>
      <FilterCardWrapper prefCodes={prefCodes} category={category}/>
    </main>
  );
}
