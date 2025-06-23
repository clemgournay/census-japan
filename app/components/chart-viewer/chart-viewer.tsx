
import { Suspense } from 'react';

// Components
import Chart from '@components/chart/chart';
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
}

export default async function ChartViewer({prefCodes}: Props) {
  const prefectureService = new PrefectureService();
  const populationService = new PopulationService();
  const [prefectures, compositions] = await Promise.all([
    prefectureService.fetchAll(),
    populationService.fetchCompositionByPrefs(prefCodes)
  ]);
  const filteredPrefectures = prefectures.filter(p => prefCodes.includes(p.prefCode));
  
  const chartItems = BuildChartData('年少人口', compositions, filteredPrefectures);
  console.log(chartItems);

  return (
    <div className={styles.chartViewer}>
      <h3 className={styles.title}>都道府県ごとの人口</h3>
      <div className={styles.chart}>
        <Suspense fallback={<ChartViewerSkeleton />}>
          <Chart items={chartItems} prefectures={filteredPrefectures}/>
        </Suspense>
      </div>
    </div>
  )
}