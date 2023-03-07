import '@root/global.scss';

import DefaultLayout from '@components/DefaultLayout';

import SectionHero from '@components/SectionHero';
import SectionNavigation from '@components/SectionNavigation';
import SectionReel from '@components/SectionReel';
import SectionBody from '@components/SectionBody';
import SectionFooter from '@components/SectionFooter';

export default async function Page(props) {
  return (
    <DefaultLayout>
      <SectionNavigation />
      <SectionHero />
      <SectionBody />
      <SectionFooter />
    </DefaultLayout>
  );
}
