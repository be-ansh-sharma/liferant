import Quotes from 'containers/lifestyle/quotes/Quotes';
import headerconfig from 'config/header.json';
import Head from 'next/head';

const Index = () => {
  let titleText = `Mind Blowing Quotes - ${headerconfig.brandName}`;
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Mind Blowing Quotes That Will Change Your Life!"
        />
        <title>{titleText}</title>
      </Head>
      <Quotes />
    </>
  );
};

export default Index;
