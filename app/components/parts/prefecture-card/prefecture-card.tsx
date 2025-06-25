import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './prefecture-card.module.scss'
import PrefectureSelection from '@app/components/ui/prefecture-selection/prefecture-selection';

type Props = {
  prefCodes: Array<number>;
}

export default async function PrefectureCard({prefCodes}: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={faSquareCheck}/>
        <h3>都道府県選択</h3>
      </div>
      <div className={styles.content}>
        <PrefectureSelection prefCodes={prefCodes} />
      </div>
    </div>
  )
}