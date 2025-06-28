'use client';
 
import { useEffect, useState } from 'react';

// Third-Party
import { faSync } from '@fortawesome/free-solid-svg-icons';

// Components
import Button from '@components/ui/button/button';

// Styles
import styles from './error.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [errorMsg, setErrorMsg] = useState<string>('');

  const renderError = (message: string) => {
    return message.split('\n').map((line: string, i: number) => {
      return (<p key={i}>{line}</p>);
    });
  }

  useEffect(() => {
    if (error.message) {
      setErrorMsg(error.message);
    }
  }, [error]);
 
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.title}>
          <h2>エラーが発生しました</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.error}>{renderError(errorMsg)}</div>
          <Button icon={faSync} label={'再読み込み'} mode={'primary'} action={() => reset()} />
        </div>
      </div>
    </main>
  );
}