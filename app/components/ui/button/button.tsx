'use client';

// Third-Party
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

// Styles
import styles from './button.module.scss';

// Fonts
import { NOTO_SANS_JP } from '@app/fonts';

type Props = {
  icon: IconDefinition,
  label?: string;
  mode?: string;
  action: () => void;                                    
}

export default function Button({icon, label, mode, action}: Props) {
  return (
    <button 
      className={`${styles.button} ${mode === 'primary' ? styles.primary : ''} ${NOTO_SANS_JP.className}`} 
      onClick={() => action()}
    >
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      {label && (<span>{label}</span>)}
    </button>
  )
}