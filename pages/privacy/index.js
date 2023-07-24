import Privacy from 'components/privacy/Privacy';
import Head from 'next/head';
import headerconfig from 'config/header.json';
import React from 'react';

export default function Index() {
  let titleText = `Privacy Policy - ${headerconfig.brandName}`;
  return (
    <>
      <Head>
        <meta name="description" content="Privacy Policy" />
        <title>{titleText}</title>
      </Head>
      <Privacy config="site" />
    </>
  );
}
