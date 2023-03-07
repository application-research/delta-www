'use client';

import styles from '@components/SectionBody.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

const DataLine = (props) => {
  return (
    <span className={styles.dataTag}>
      <span className={styles.dataTagLeft}>{props.children}</span>
      <span className={styles.dataTagRight}>{props.label}</span>
    </span>
  );
};

const DataQuote = (props) => {
  return (
    <span className={styles.dataTag}>
      <span className={styles.dataTagLeftQuote} />
      <span className={styles.dataTagRightQuote}>{props.children}</span>
    </span>
  );
};

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
        We're releasing a new tool <strong>March 27th, 2023</strong> that will help you onboard your data to any Filecoin Storage Provider including yours.
      </p>
      <p className={styles.paragraph}>Here are our alpha testing results and performance.</p>

      <div className={styles.performance}>
        <DataLine label="Total end-to-end deals">{data.total_e2e_deals}</DataLine>
        <DataQuote>
          An end-to-end deal is when a user has a file, uses [any data prep service + any data client + any filecoin address], and knows that deal ends up on a storage provider,
          sealed, with a receipt.
        </DataQuote>
        <DataLine label="Total data size in end-to-end deals">{Utilities.bytesToSize(data.total_e2e_deals_in_bytes)}</DataLine>

        <DataLine label="Total import deals">{data.total_import_deals}</DataLine>
        <DataQuote>
          An import deal is when the Filecoin Network has some mechanism for expecting a certain CID (the analogy is like an Amazon S3 Pre-signed URL, expecting certain bytes) and
          the import of those deals comes from any mechanism the operator decides to use.
        </DataQuote>
        <DataLine label="Total data size in import deals">{Utilities.bytesToSize(data.total_import_deals_in_bytes)}</DataLine>

        <DataLine label="Total data onboarded to Filecoin">{Utilities.bytesToSize(data.total_e2e_deals_in_bytes + data.total_import_deals_in_bytes)}</DataLine>

        <DataQuote>
          We will always know our performance relative to the total storage onboarded onto Filecoin (
          <a href="https://dashboard.starboard.ventures/market-deals" target="_blank">
            https://dashboard.starboard.ventures/market-deals
          </a>
          ). Delta's goal is to perform at least 25% of the work for the Filecoin Storage Network by the end of 2023.
        </DataQuote>

        <DataLine label="What if we scaled Delta 1000x?">{Utilities.bytesToSize((data.total_e2e_deals_in_bytes + data.total_import_deals_in_bytes) * 1000)}</DataLine>

        <DataLine label="How many storage providers?">{data.total_miners}</DataLine>

        <DataLine label="Total piece commitment made">{data.total_piece_commitment_made}</DataLine>
      </div>
    </div>
  );
}
