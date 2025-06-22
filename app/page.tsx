import PrefectureSelection from '@components/prefecture-selection/prefecture-selection';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <PrefectureSelection />
    </main>
  );
}
