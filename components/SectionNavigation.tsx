import styles from '@components/SectionNavigation.module.scss';

import * as React from 'react';

export default function SectionNavigation(props) {
  return (
    <div className={styles.body}>
      <span className={styles.left}>∆ Delta</span>
      <span className={styles.right}>
        <span className={styles.content}>
          <span className={styles.link}>
            ➝ Documentation <span className={styles.subtle}>(coming soon)</span>
          </span>
          <span className={styles.link}>
            ➝ Github<span className={styles.subtle}>(coming soon)</span>
          </span>
          <span className={styles.link}>
            ➝ Registry <span className={styles.subtle}>(coming soon)</span>
          </span>
        </span>
      </span>
    </div>
  );
}
