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
  let y = 0;
  let touching = false;
  const limit = 100;

  const handleTitleClick = (): void => {
    setDeployed(!deployed);
  }

  const handleTouchStart = (e: React.TouchEvent): void => {
    y = e.touches[0].pageY;
    touching = true;
  }

  const handleTouchMove = (e: React.TouchEvent): void => {
    const newY = e.touches[0].pageY;
    if (touching) {
      if (deployed && newY >= y + limit) {
        setDeployed(false);
        touching = false;
      } else if (!deployed && newY <= y - limit) {
        setDeployed(true);
        touching = false;
      }
    }
  }

  const handleTouchEnd = () => {
    touching = false;
  }

  return (
    <div 
      className={`${styles.card} ${deployed ? styles.deployed : ''}`}
    >
      <div 
        className={styles.title} 
        onClick={handleTitleClick} 
        onTouchStart={handleTouchStart} 
        onTouchMove={handleTouchMove} 
        onTouchEnd={handleTouchEnd}
      >
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