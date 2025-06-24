
import { Suspense } from 'react';

// Third-Party
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';

// Components
import Chart from '@components/ui/chart/chart';
import CategorySelection from '@components/ui/category-selection/category-selection';
import ChartViewerSkeleton from './chart-viewer-skeleton';

// Services
import { PopulationService } from '@services/population';
import { PrefectureService } from '@services/prefecture';

// Utils
import { BuildChartData } from '@utils/chart';
import { GenerateUniqueColors } from '@utils/colors';

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
  const colors = GenerateUniqueColors(filteredPrefectures.length);

  const chartItems = BuildChartData(category, compositions, filteredPrefectures);

  return (
    <div className={`${styles.card} ${styles.viewer}`}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={faChartColumn}></FontAwesomeIcon>
        <h3>各都道府県の{category}</h3>
        <CategorySelection category={category}/>
      </div>
      <div className={styles.chart}>
        <Suspense fallback={<ChartViewerSkeleton />}>
          <Chart items={chartItems} prefectures={filteredPrefectures} colors={colors}/>
        </Suspense>
      </div>
    </div>
  )
}