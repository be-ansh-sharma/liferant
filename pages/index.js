import Head from 'next/head';
import headerconfig from 'config/header.json';
import categoryconfig from 'config/categories.json';
import Grid from 'containers/grid/Grid';

export default function Index() {
  let titleText = `Home - ${headerconfig.brandName}`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Get random information and widgets for your day to day life. Daily Water Intake calculator, Truth or Dares, top quotes and many more."
        />
      </Head>
      <Grid list={categoryconfig} />
    </>
  );
}
