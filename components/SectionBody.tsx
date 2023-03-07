'use client';

import styles from '@components/SectionBody.module.scss';

import * as React from 'react';

export default function SectionBody(props) {
  const [data, setData] = React.useState({
    total_content_consumed: 0,
    total_e2e_deals: 0,
    total_e2e_deals_in_bytes: 0,
    total_import_deals: 0,
    total_import_deals_in_bytes: 0,
    total_miners: 0,
    total_piece_commitment_made: 0,
    total_piece_committed: 0,
    total_proposal_made: 0,
    total_proposal_sent: 0,
    total_sealed_deal_in_bytes: 0,
    total_storage_allocated: 0,
    total_transfer_finished: 0,
    total_transfer_started: 0,
  });

  React.useEffect(() => {
    async function init() {
      const response = await fetch('https://node.delta.store/open/stats/totals/info');
      const json = await response.json();
      setData({ ...json });
    }

    init();
  }, []);

  return (
    <div className={styles.body}>
      <p className={styles.paragraph}>
        We're releasing a new tool <strong>March 27th, 2023</strong> that will help you onboard your data to a Filecoin Storage Provider. It could be yours, it could be anyone
        elses!
      </p>
      <p className={styles.paragraph}>Here are our alpha testing results and performance.</p>
    </div>
  );
}
