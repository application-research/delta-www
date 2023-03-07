import styles from '@components/SectionHero.module.scss';

import * as React from 'react';

export default function SectionHero(props) {
  return (
    <div className={styles.body}>
      <h2 className={styles.heading}>
        Use ∆ Delta to upload all of your data to Filecoin with freedom and control in your process.
        <br />
      </h2>
    </div>
  );
}
