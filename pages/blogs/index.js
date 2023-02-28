import Loading from 'components/loading/Loading';
import Grid from 'containers/grid/blogs/Grid';
import Head from 'next/head';
import { getAllBlogs } from 'services/firebase/Database';
import headerconfig from 'config/header.json';

const Index = ({ blogs }) => {
  let titleText = `Blogs - ${headerconfig.brandName}`;
  if (!blogs) {
    return <Loading lines={4} />;
  }

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Get Random news, trivias, and facts about lifestyles, games and programming."
        />
      </Head>
      <Grid list={blogs} />
    </>
  );
};

export async function getStaticProps(context) {
  const blogs = await getAllBlogs();

  if (!blogs) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  return {
    props: {
      blogs,
    },
    revalidate: 86400,
  };
}

export default Index;
