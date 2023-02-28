import Login from 'components/account/login/Login';
import Head from 'next/head';

export default function Index() {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Login />
    </div>
  );
}
