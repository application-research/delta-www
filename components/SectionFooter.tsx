import styles from '@components/SectionFooter.module.scss';

import * as React from 'react';

export default function SectionFooter(props) {
  return (
    <div className={styles.body}>
      <a href="https://fw.services" className={styles.link} target="_blank">
        ↗ Learn more about Filecoin Web Services
      </a>
    </div>
  );
}
