import Quotes from 'containers/lifestyle/quotes/Quotes';
import headerconfig from 'config/header.json';
import Head from 'next/head';
import Recommendations from 'components/recommendations/Recommendations';

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
      <Recommendations skip="quotes" />
    </>
  );
};

export default Index;
