import styles from '@components/SectionReel.module.scss';

import * as React from 'react';

export default function SectionReel(props) {
  return (
    <div className={styles.body}>
      <div className={styles.group}>
        <h3 className={styles.heading}>Makes storage deals</h3>
        <p className={styles.paragraph}>Makes deals with storage providers for files that are at least 1 gigabyte.</p>
      </div>

      <div className={styles.group}>
        <h3 className={styles.heading}>Keeps a record</h3>
        <p className={styles.paragraph}>See all of the storage deals you've made with a storage provider, get a CSV or JSON export afterwards.</p>
      </div>

      <div className={styles.group}>
        <h3 className={styles.heading}>Retries on your behalf</h3>
        <p className={styles.paragraph}>Delta will double check if your data has been successfuly stored on Filecoin.</p>
      </div>

      <div className={styles.group}>
        <h3 className={styles.heading}>Lives in the open</h3>
        <p className={styles.paragraph}>Anyone can contribute to this OSS tool. Built by the community for the community.</p>
      </div>
    </div>
  );
}
