'use client';

// Third-Party
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

// Styles
import styles from './option-card.module.scss';

export default function OptionCard() {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={faSquareCheck}></FontAwesomeIcon>
        <span>Options</span>
      </div>
      <div>
      </div>
    </div>
  )
}