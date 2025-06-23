// Components
import PrefectureButton from '@components/ui/prefecture-button/prefecture-button';

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
      <div className={styles.title}>
        <h3>都道府県選択</h3>
      </div>
      <div className={styles.prefectures}>
        {prefectures.map((prefecture: Prefecture) => {
          return (
            <PrefectureButton 
              key={prefecture.prefCode} 
              prefecture={prefecture} 
              active={prefCodes.includes(prefecture.prefCode)}
              disabled={prefCodes.includes(prefecture.prefCode) && prefCodes.length === 1}
            />
          )
        })}
      </div>
    
    </div>
  )
}