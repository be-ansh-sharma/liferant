import Privacy from 'components/privacy/Privacy';
import Head from 'next/head';

const privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <Privacy config="drinkingbuddy" />
    </>
  );
};

export default privacy;
