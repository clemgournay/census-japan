// Third-Party
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import PrefectureSelection from '@components/ui/prefecture-selection/prefecture-selection';
import AllButton from '@components/ui/all-button/all-button';
import ResetButton from '@components/ui/reset-button/reset-button';

// Styles
import styles from './prefecture-card.module.scss'


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
        <div className={styles.controls}>
          <AllButton />
          <ResetButton />
        </div>
        <PrefectureSelection prefCodes={prefCodes} />
      </div>
    </div>
  )
}