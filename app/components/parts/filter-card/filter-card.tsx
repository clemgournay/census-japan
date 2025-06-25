'use client';

// Third-Party
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faFilter } from '@fortawesome/free-solid-svg-icons';

// Styles
import styles from './filter-card.module.scss';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
}

export default function FilterCard({children}: Props) {

  const [deployed, setDeployed] = useState(false);

  const handleTitleClick = () => {
    setDeployed(!deployed);
  }

  return (
    <div className={`${styles.card} ${deployed ? styles.deployed : ''}`}>
      <div className={styles.title} onClick={handleTitleClick}>
        <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon>
        <span>絞り込み</span>
        <div className={styles.toggle}>
          <FontAwesomeIcon icon={deployed ? faChevronDown : faChevronUp} />
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}