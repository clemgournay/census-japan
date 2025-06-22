
import { Suspense } from 'react';

// Components
import Chart from '@components/chart/chart';
import ChartViewerSkeleton from './chart-viewer-skeleton';

// Services
import { PopulationService } from '@services/population';
import { PrefectureService } from '@services/prefecture';

// Models
import { Prefecture } from '@models/prefecture';

// Utils
import { BuildChartData } from '@utils/chart';

// Styles
import styles from './chart-viewer.module.scss';

export default async function ChartViewer() {
  const prefCodes = [1, 2];
  const prefectureService = new PrefectureService();
  const populationService = new PopulationService();
  const [prefectures, compositions] = await Promise.all([
    prefectureService.fetchAll(),
    populationService.fetchCompositionByPrefs(prefCodes)
  ]);
  const filteredPrefectures = prefectures.filter(p => prefCodes.includes(p.prefCode));
  const chartItems = BuildChartData('年少人口', compositions, filteredPrefectures);

  return (
    <div className={styles.chartViewer}>
      <Suspense fallback={<ChartViewerSkeleton />}>
        <Chart items={chartItems}/>
      </Suspense>
    </div>
  )
}