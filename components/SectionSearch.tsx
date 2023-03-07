'use client';

import styles from '@components/SectionSearch.module.scss';

import * as React from 'react';
import * as HTTP from '@common/http';

export default function SectionSearch(props) {
  return (
    <div className={styles.body}>
      <input
        className={styles.input}
        placeholder="Search by deal id"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />

      <p className={styles.paragraph}>Coming soon, search through all deals.</p>
    </div>
  );
}
