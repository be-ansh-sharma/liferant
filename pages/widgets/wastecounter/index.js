import Head from 'next/head';
import headerconfig from 'config/header.json';
import WasteCounter from 'containers/widgets/wastecounter/WasteCounter';

export default function Index() {
  let titleText = `Waste Counter - ${headerconfig.brandName}`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Calculate how much time you have wasted!"
        />
      </Head>
      <WasteCounter />
    </>
  );
}
