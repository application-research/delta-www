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
      <div className={styles.label}>
        <strong>Delta Data Manager</strong> ➝ manage and import a massive quantity of deals into your storage provider.
      </div>
      <img src="https://user-images.githubusercontent.com/310223/221113426-80a53e2b-9eb1-470c-a26b-f3aba69008f6.png" className={styles.image} />

      <div className={styles.label}>
        <strong>Delta white-label</strong> ➝ get a website with your data, Filecoin address, and every deal made with it.
      </div>
      <img src="https://user-images.githubusercontent.com/310223/223874359-ce0aa15b-8e96-40ef-be38-893d16bbaf19.png" className={styles.image} />

      <p className={styles.paragraph} style={{ marginTop: 88 }}>
        We're releasing a new tool <strong>March 27th, 2023</strong> that will help you onboard your data to any Filecoin Storage Provider including yours.
      </p>
      <p className={styles.paragraph}>Here are our alpha testing results and performance.</p>

      <div className={styles.performance}>
        <DataLine label="Total end-to-end deals achieved by one node">{data.total_e2e_deals}</DataLine>
        <DataQuote>
          An end-to-end deal is when a user has a file, uses [any data prep service + any data client + any filecoin address], and knows that deal ends up on a storage provider,
          sealed, with a receipt.
        </DataQuote>
        <DataLine label="Total data size in end-to-end deals achieved by one node">{Utilities.bytesToSize(data.total_e2e_deals_in_bytes)}</DataLine>

        <DataLine label="Total import deals achieved by one node">{data.total_import_deals}</DataLine>
        <DataQuote>
          An import deal is when the Filecoin Network has some mechanism for expecting a certain CID (the analogy is like an Amazon S3 Pre-signed URL, expecting certain bytes) and
          the import of those deals comes from any mechanism the operator decides to use.
        </DataQuote>
        <DataLine label="Total data size in import deals achieved by one node">{Utilities.bytesToSize(data.total_import_deals_in_bytes)}</DataLine>

        <DataLine label="Total data onboarded to Filecoin achieved by one node">{Utilities.bytesToSize(data.total_e2e_deals_in_bytes + data.total_import_deals_in_bytes)}</DataLine>

        <DataQuote>
          We will always know our performance relative to the total storage onboarded onto Filecoin (
          <a href="https://dashboard.starboard.ventures/market-deals" target="_blank">
            https://dashboard.starboard.ventures/market-deals
          </a>
          ). Delta's goal is to perform at least 25% of the work for the Filecoin Storage Network by the end of 2023.
        </DataQuote>

        <DataLine label="Total estimated potential if we run multiple Delta instances">
          {Utilities.bytesToSize((data.total_e2e_deals_in_bytes + data.total_import_deals_in_bytes) * 1000)}
        </DataLine>

        <DataLine label="Total number of storage providers this Delta node worked with">{data.total_miners}</DataLine>

        <DataLine label="Total piece commitment made by one node">{data.total_piece_commitment_made}</DataLine>

        <DataLine label="Maximum individual file size">32 GB, 64 GB</DataLine>

        <DataQuote>You can include many small files, a lot of users use millions of small files to upload terabytes of data.</DataQuote>
        <DataLine label="Minimum file size">Any</DataLine>
        <DataLine label="Runs on cloud, bare metal">✅</DataLine>
        <DataLine label="GUI for file management, import deals, settings">✅</DataLine>
        <DataQuote>
          <a href="https://github.com/application-research/delta-dm">https://github.com/application-research/delta-dm</a>
          <br />
          <a href="https://github.com/application-research/delta-nextjs-client">https://github.com/application-research/delta-nextjs-client</a>
          <br />
          <a href="https://github.com/application-research/delta-nextjs-white-label-app">https://github.com/application-research/delta-nextjs-white-label-app</a>
        </DataQuote>
        <DataLine label="API + key generation">✅</DataLine>
        <DataLine label="Manage your own Filecoin wallet">✅</DataLine>
        <DataLine label="Track storage providers">✅</DataLine>
        <DataLine label="Track deal state">✅</DataLine>
        <DataLine label="Failure handling and retries">✅</DataLine>
        <DataLine label="Track file, sector metadata, CID">✅</DataLine>
        <DataLine label="Track deal state, data stat">✅</DataLine>
        <DataLine label="SSL terminated HA proxy">✅</DataLine>
        <DataLine label="Containerization, docker, and K8 capable">✅</DataLine>
        <DataLine label="Deal status tracking">✅</DataLine>
        <DataLine label="Custom configuration">✅</DataLine>
        <DataLine label="Optional deal prepping engine">✅</DataLine>
        <DataLine label="Supports HTTP">✅</DataLine>
        <DataLine label="Supports Bitswap">✅</DataLine>
        <DataLine label="CAR Generation">❓</DataLine>
        <DataQuote>
          Delta currently doesn't have its own CAR generation right now but it will be part of the "convenience" tooling later on. See examples of this below:
          <br />
          <br />
          <a href="https://github.com/anjor/filecoin_data_prep_tools">https://github.com/anjor/filecoin_data_prep_tools</a>
        </DataQuote>
        <DataLine label="CommP calculation for each piece">✅</DataLine>
        <DataLine label="Inclusion proofs">✅</DataLine>
        <DataQuote>
          An inclusion proof of the data itself is the simplest way to achieve a verifiable deal aggregation. While this guarantees data inclusion within a sector, it does not
          provide any guarantees around the ability of the Storage Provider of finding that data.
          <br />
          <br />
          A possibly simpler than the proposed approach way to achieve the second requirement is a specially designed CAR structure and padding, rendering a user-provided CAR
          readable as part of a larger, deal- or sector-wide, CAR. This has a drawback of CAR structure being fragile and the discoverability of user’s data within that larger CAR
          is a function of all the previous data within it. This data could be adversarial in nature, making data from user CAR unretrievable.
          <br />
          <br />
          The primary goal is to inform the Storage Provider what data is stored where within the deal or sector in a verifiable way, without having to utilize the limited chain
          space.
        </DataQuote>
      </div>
    </div>
  );
}
