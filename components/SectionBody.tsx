import styles from '@components/SectionBody.module.scss';

import * as React from 'react';

export default function SectionBody(props) {
  return (
    <div className={styles.body}>
      <p className={styles.paragraph}>Do you have a lot of data you want to put on Filecoin?</p>
      <p className={styles.paragraph}>Are you having difficulty finding a tool you can use to get the job done?</p>
      <p className={styles.paragraph}>
        We hear you loud and clear. We are building a tool (<i>∆ Delta</i>) where you can upload as much data as a storage provider will take.
      </p>

      <p className={styles.paragraph}>
        We understand the strife that storage providers face. Being a storage provider is hard and they want to break even on their large investments. They need more QAP (
        <a href="https://spec.filecoin.io/systems/filecoin_mining/sector/sector-quality/" target="_blank">
          Quality Adjusted Power
        </a>
        ) to have a higher chance of earning{' '}
        <a href="https://medium.com/cryptoeconlab/filecoins-adaptive-block-rewards-will-autonomously-reactivate-after-baseline-crossing-in-early-e5079bf16970" target="_blank">
          Filecoin block rewards
        </a>{' '}
        for participating in the network. Everyone knows that storage-providers want a tool to onboard more data that is straight forward and does not require special hacks or
        scripts. In addition, storage providers do not want to deal with people telling them what they can or cannot do.
      </p>

      <p className={styles.paragraph}>
        Let us help everyone gain the competitive edge while giving everyone an opportunity to contribute to the source code of ∆ Delta to onboard more data to Filecoin.
      </p>

      <p className={styles.paragraph}>
        Unlike <a href="https://estuary.tech">Estuary</a>, another tool for onboarding data and retrieving unsealed copies through IPFS,{' '}
        <strong>∆ Delta is only focused on getting your data onto a storage provider in the Filecoin Network</strong>. ∆ Delta does not provide a means to retrieve data. ∆ Delta
        will only provide you a receipt of where your data is once it is transferred and sealed.
      </p>

      <p className={styles.paragraph}>
        You (<i>the data client</i>) can upload as many files as a storage provider can take, we recommend the size of your data is between 1GB to 32GB. ∆ Delta will then queue the
        request for the content or CommP, then run a dispatcher to check the status of your storage deal until it is complete.
      </p>

      <p className={styles.paragraph}>Check here soon for updates! We look forward to helping you.</p>
    </div>
  );
}
