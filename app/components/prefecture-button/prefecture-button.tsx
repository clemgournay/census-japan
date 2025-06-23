'use client';

import { useEffect, useState } from 'react';
import { redirect, usePathname, useSearchParams } from 'next/navigation';

// Models
import { Prefecture } from '@models/prefecture';

// Styles
import styles from './prefecture-button.module.scss';


type Props = {
  prefecture: Prefecture,
  active?: boolean
}

export default function PrefectureButton({prefecture, active}: Props) {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeState, setActiveState] = useState(false);

  const handleClick = () => {
    setActiveState(!activeState);
    const params = new URLSearchParams(searchParams);
    let codes: Array<number > = [];
    if (params.get('prefs')) {
      const codeStrings =  params.get('prefs')?.split(',');
      if (codeStrings) codes = codeStrings.map(c => parseInt(c));
    }

    const codeIndex = codes.indexOf(prefecture.prefCode);
    if (codeIndex >= 0) codes.splice(codeIndex, 1);
    else codes.push(prefecture.prefCode);
    
    if (codes.length > 0) params.set('prefs', codes.join(','));
    redirect(`${pathname}?${decodeURIComponent(params.toString())}`);
  }

  useEffect(() => {
    if (active) setActiveState(true);
  }, []);

  return (
    <button type="button" className={`${styles.button} ${activeState ? styles.active : ''}`} onClick={handleClick}>{prefecture.prefName}</button>
  )
}