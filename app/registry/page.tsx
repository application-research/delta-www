import '@root/global.scss';

import DefaultLayout from '@components/DefaultLayout';

import SectionNavigation from '@components/SectionNavigation';
import SectionSearch from '@components/SectionSearch';
import SectionFooter from '@components/SectionFooter';

export default async function Page(props) {
  return (
    <DefaultLayout>
      <SectionNavigation hideRegistry />
      <SectionSearch />
      <SectionFooter />
    </DefaultLayout>
  );
}
