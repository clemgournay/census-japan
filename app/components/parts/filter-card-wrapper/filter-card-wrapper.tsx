import { Suspense } from 'react';

// Components
import FilterCard from '@components/parts/filter-card/filter-card';
import CategorySelection from '@app/components/ui/category-selection/category-selection';
import PrefectureSelection from '@app/components/ui/prefecture-selection/prefecture-selection';

type Props = {
  prefCodes: Array<number>;
  category: string;
}

export default function FilterCardWrapper({prefCodes, category}: Props) {

  return (
    <FilterCard>
      <h4>人口カテゴリー</h4>
      <Suspense>
        <CategorySelection category={category} />
      </Suspense>
      <h4>都道府県</h4>
      <Suspense>
        <PrefectureSelection prefCodes={prefCodes} />
      </Suspense>
    </FilterCard>
  )
}