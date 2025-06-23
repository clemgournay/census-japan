// Components
import PrefectureButton from '@components/prefecture-button/prefecture-button';

// Models
import { Prefecture } from '@models/prefecture'

// Services
import { PrefectureService } from '@services/prefecture';

// Styles
import styles from './prefecture-selection.module.scss';

type Props = {
  prefCodes: Array<number>;
}

export default async function PrefectureSelection({prefCodes}: Props) {
  
  const prefectureService = new PrefectureService();
  const prefectures: Array<Prefecture> = await prefectureService.fetchAll();

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>都道府県選択</h3>
      <div className={styles.prefectures}>
        {prefectures.map((prefecture: Prefecture) => {
          return (
            <PrefectureButton key={prefecture.prefCode} prefecture={prefecture} active={prefCodes.includes(prefecture.prefCode)}/>
          )
        })}
      </div>
    
    </div>
  )
}