import styles from '@components/SectionHero.module.scss';

import * as React from 'react';

export default function SectionHero(props) {
  return (
    <div className={styles.body}>
      <h2 className={styles.heading}>
        Use ∆ Delta to upload all of your useful public data to Filecoin storage providers. <br />
        <br />
        Coming soon on March 27th, 2023.
      </h2>
    </div>
  );
}
