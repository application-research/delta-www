import styles from '@components/SectionNavigation.module.scss';

import * as React from 'react';

export default function SectionNavigation(props) {
  return (
    <div className={styles.body}>
      <a className={styles.left} href="/">
        ∆ Delta
      </a>
      <span className={styles.right}>
        {!props.hideRegistry ? (
          <span className={styles.content}>
            <a href="/registry" className={styles.link}>
              ➝ Registry
            </a>
          </span>
        ) : null}
      </span>
    </div>
  );
}
