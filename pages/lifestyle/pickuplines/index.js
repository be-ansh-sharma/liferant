import PICKUPCATEGORY from 'config/pickuplines';
import Head from 'next/head';
import Grid from 'containers/grid/Grid';
import headerconfig from 'config/header.json';

const TruthOrDare = () => {
  let titleText = `Top Pick up lines for Men & Women - ${headerconfig.brandName}`;
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Top Pick up lines for Men & Women" />
      </Head>
      <Grid list={PICKUPCATEGORY} />
    </>
  );
};

export default TruthOrDare;
