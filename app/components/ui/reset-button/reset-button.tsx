'use client';

import { redirect, usePathname, useSearchParams } from 'next/navigation';

// Third-Party
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Components
import Button from '@components/ui/button/button';

export default function ResetButton() {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('prefs');
    redirect(`${pathname}?${decodeURIComponent(params.toString())}`);
  }

  return (
    <Button icon={faTimes} action={handleClick}/>
  )
}