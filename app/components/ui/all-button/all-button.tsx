'use client';

import { redirect, usePathname, useSearchParams } from 'next/navigation';

// Third-Party
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

// Components
import Button from '@components/ui/button/button';

export default function AllButton() {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.set('prefs', 'all');
    redirect(`${pathname}?${decodeURIComponent(params.toString())}`);
  }

  return (
    <Button icon={faCheckDouble} action={handleClick} />
  )
}