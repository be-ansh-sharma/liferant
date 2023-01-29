import Privacy from 'components/privacy/Privacy';
import Head from 'next/head';
import headerconfig from 'config/header.json';

const privacy = () => {
  let titleText = `Privacy Policy - ${headerconfig.brandName}`;
  return (
    <>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Privacy config="truthordare" />
    </>
  );
};

export default privacy;
