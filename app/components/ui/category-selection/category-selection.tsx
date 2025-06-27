'use client';
import { redirect, usePathname, useSearchParams } from 'next/navigation';

// Data
import { CATEGORIES } from '@data/categories';

// Styles
import styles from './category-selection.module.scss';

// Fonts
import { NOTO_SANS_JP } from '@app/fonts';

type Props = {
  category: string;
};

export default function CategorySelection({category}: Props) {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = (label: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('category', label);
    redirect(`${pathname}?${decodeURIComponent(params.toString())}`);
  }

  return (
    <div className={styles.group}>
      <div className={styles.categories}>
        {CATEGORIES.map((label: string, i: number) => {
          return (
            <button 
              key={i} 
              className={`${styles.category} ${label === category ? styles.active : ''} ${NOTO_SANS_JP.className}`} 
              onClick={() => handleClick(label)}
            >{label}</button>
          )
        })}
      </div>
    </div>
  )
}