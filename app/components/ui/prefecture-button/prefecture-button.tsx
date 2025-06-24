'use client';

import { useEffect, useState } from 'react';
import { redirect, usePathname, useSearchParams } from 'next/navigation';

// Models
import { Prefecture } from '@models/prefecture';

// Styles
import styles from './prefecture-button.module.scss';
import { ParsePrefs } from '@utils/parsing';

type Props = {
  prefecture: Prefecture,
  active?: boolean,
  disabled?: boolean;
}

export default function PrefectureButton({prefecture, active, disabled}: Props) {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeState, setActiveState] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setActiveState(!activeState);
      const params = new URLSearchParams(searchParams);
      const codes: Array<number > = ParsePrefs(params.get('prefs'));
      const codeIndex = codes.indexOf(prefecture.prefCode);
      if (codeIndex >= 0) codes.splice(codeIndex, 1);
      else codes.push(prefecture.prefCode);
      
      let path: string = pathname;
      if (codes.length > 0) {
        params.set('prefs', codes.join(','));
        path = `${pathname}?${decodeURIComponent(params.toString())}`;
      }
      redirect(path);
    }
  
  }

  useEffect(() => {
    if (active) setActiveState(true);
  }, [active]);

  return (
    <button 
      type="button" 
      className={`${styles.button} ${activeState ? styles.active : ''}`} 
      onClick={handleClick}
    >
      <span>{prefecture.prefName}</span>
    </button>
  )
}