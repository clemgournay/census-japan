'use client';
 
import { useEffect, useState } from 'react';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import Button from '@components/button/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [errorMsg, setErrorMsg] = useState<string>('');
  useEffect(() => {
    if (error.message) setErrorMsg(error.message);
  }, [error]);
 
  return (
    <main>
      <h2>エラー</h2>
      <p>{errorMsg}</p>
      <Button icon={faSync} label={'再読み込み'} mode={'primary'} action={() => reset()} />
    </main>
  );
}