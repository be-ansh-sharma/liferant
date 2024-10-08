import Head from 'next/head';
import headerconfig from 'config/header.json';
import Grid from 'containers/grid/Grid';
import CATEGORIES from 'config/categories.json';
import { getCategories } from 'utils/Utils';

export default function Index() {
  let titleText = `Life Style - ${headerconfig.brandName}`;
  let LIFESTYLE = getCategories(CATEGORIES, 'lifestyle');

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Get random information and widgets for your day to day life. Daily Water Intake calculator, Truth or Dares and many more."
        />
      </Head>
      <Grid list={LIFESTYLE} />
    </>
  );
}
