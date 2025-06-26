import { Suspense } from 'react';

// Components
import FilterCard from '@components/parts/filter-card/filter-card';
import CategorySelection from '@app/components/ui/category-selection/category-selection';
import PrefectureSelection from '@app/components/ui/prefecture-selection/prefecture-selection';

// Styles
import styles from './filter-card-wrapper.module.scss';
import AllButton from '@app/components/ui/all-button/all-button';
import ResetButton from '@app/components/ui/reset-button/reset-button';

type Props = {
  prefCodes: Array<number>;
  category: string;
}

export default function FilterCardWrapper({prefCodes, category}: Props) {

  return (
    <FilterCard>
      <div className={styles.filters}>
        <div className={styles.filter}>
          <h4>人口カテゴリー</h4>
          <Suspense>
            <CategorySelection category={category} />
          </Suspense>
        </div>
        <div className={styles.filter}>
          <h4>都道府県</h4>
          <div className={styles.controls}>
            <AllButton />
            <ResetButton />
          </div>
          <Suspense>
            <PrefectureSelection prefCodes={prefCodes} />
          </Suspense>
        </div>
      </div>
    </FilterCard>
  )
}