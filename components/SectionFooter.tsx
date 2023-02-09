import styles from '@components/SectionFooter.module.scss';

import * as React from 'react';

export default function SectionFooter(props) {
  return (
    <div className={styles.body}>
      <a href="https://filecoin.io" className={styles.link} target="_blank">
        ↗ Learn more about Filecoin
      </a>
      <a href="https://protocol.ai" className={styles.link} target="_blank">
        ↗ Learn more about Protocol Labs
      </a>

      <a href="https://filecoin.io/slack" className={styles.link} target="_blank">
        ↗ Want to work with the team? Join us on Slack in #ecosystem-dev.
      </a>

      <a href="https://estuary.tech" className={styles.link} target="_blank">
        ↗ Do you need storage and the promise of retrievable data today? Learn more about Estuary
      </a>
    </div>
  );
}
