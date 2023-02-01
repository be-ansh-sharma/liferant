import Head from 'next/head';
import headerconfig from 'config/header.json';
import SecretBottle from 'containers/secretbottle/SecretBottle';

export default function Index() {
  let titleText = `Secrets In Bottle - ${headerconfig.brandName}`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Write your secret confessions and throw it away for others to find!"
        />
      </Head>
      <SecretBottle />
    </>
  );
}
