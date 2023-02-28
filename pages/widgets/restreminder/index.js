import Head from 'next/head';
import headerconfig from 'config/header.json';
import RestReminder from 'containers/widgets/restreminder/RestReminder';

export default function Index() {
  let titleText = `Rest Reminder - ${headerconfig.brandName}`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="We will tell you when to take rest" />
      </Head>
      <RestReminder />
    </>
  );
}
