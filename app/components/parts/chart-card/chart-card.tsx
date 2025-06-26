// Third-Party
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';

// Components
import Chart from '@components/ui/chart/chart';
import CategorySelection from '@components/ui/category-selection/category-selection';

// Services
import { PopulationService } from '@services/population';
import { PrefectureService } from '@services/prefecture';

// Utils
import { BuildChartData } from '@utils/chart';
import { GenerateUniqueColors } from '@utils/colors';

// Styles
import styles from './chart-card.module.scss';

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
    <div className={`${styles.card}`}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={faChartColumn}></FontAwesomeIcon>
        <h3>各都道府県の{category}</h3>
      </div>
      <div className={`${styles.content}`}>
        <div className={styles.controls}>
          <CategorySelection category={category}/>
        </div>
        <div className={styles.chart}>
          <Chart items={chartItems} prefectures={filteredPrefectures} colors={colors}/>
        </div>
      </div>
    </div>
  )
}