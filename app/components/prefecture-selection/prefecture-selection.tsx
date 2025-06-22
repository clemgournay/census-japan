import { Prefecture } from '@models/prefecture'
import { PrefectureService } from '@services/prefecture';

import styles from './prefecture-selection.module.scss';

export default async function PrefectureSelection() {
  
  const prefectureService = new PrefectureService();
  const prefectures: Array<Prefecture> = await prefectureService.fetchAll();

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>都道府県選択</h3>
      <div className={styles.prefectures}>
        {prefectures.map((prefecture: Prefecture) => {
          return (
            <div key={prefecture.prefCode} className={styles.prefecture}>{prefecture.prefName}</div>
          )
        })}
      </div>
    
    </div>
  )
}