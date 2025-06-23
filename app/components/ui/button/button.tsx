'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './button.module.scss';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type Props = {
  icon: IconDefinition,
  label: string;
  mode?: string;
  action: () => void;                                    
}

export default function Button({icon, label, mode, action}: Props) {
  return (
    <button className={`${styles.button} ${mode === 'primary' ? styles.primary : ''}`} onClick={() => action()}>
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      <span>{label}</span>
    </button>
  )
}