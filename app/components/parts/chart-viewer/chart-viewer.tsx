
import { Suspense } from 'react';

// Components
import Chart from '@components/ui/chart/chart';
import CategorySelection from '@components/ui/category-selection/category-selection';
import ChartViewerSkeleton from './chart-viewer-skeleton';

// Services
import { PopulationService } from '@services/population';
import { PrefectureService } from '@services/prefecture';

// Utils
import { BuildChartData } from '@utils/chart';

// Styles
import styles from './chart-viewer.module.scss';

type Props = {
  prefCodes: Array<number>;
  category: string;
}

export default async function ChartViewer({prefCodes, category}: Props) {
  const prefectureService = new PrefectureService();
  const populationService = new PopulationService();
  const [prefectures, compositions] = await Promise.all([
    prefectureService.fetchAll(),
    populationService.fetchCompositionByPrefs(prefCodes)
  ]);
  const filteredPrefectures = prefectures.filter(p => prefCodes.includes(p.prefCode));

  const chartItems = BuildChartData(category, compositions, filteredPrefectures);

  return (
    <div className={styles.chartViewer}>
      <div className={styles.title}>
        <h3>都道府県ごとの{category}</h3>
        <CategorySelection category={category}/>
      </div>
      <div className={styles.chart}>
        <Suspense fallback={<ChartViewerSkeleton />}>
          <Chart items={chartItems} prefectures={filteredPrefectures}/>
        </Suspense>
      </div>
    </div>
  )
}