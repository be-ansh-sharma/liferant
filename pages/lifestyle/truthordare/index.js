import React from 'react';
import Playstore from 'components/playstore/Playstore';
import Head from 'next/head';
import TDCONFIG from 'config/truthordare.json';
import Grid from 'containers/grid/Grid';
import headerconfig from 'config/header.json';

const TruthOrDare = () => {
  let titleText = `Truth or Dare - ${headerconfig.brandName}`;
  return (
    <>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Grid list={TDCONFIG} />
      <Playstore link={headerconfig.links.truthordare} />
    </>
  );
};

export default TruthOrDare;
