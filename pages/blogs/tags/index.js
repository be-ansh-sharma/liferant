import Head from 'next/head';
import { fetchAllTags, getDataCountByTag } from 'services/firebase/Database';
import headerconfig from 'config/header.json';
import Tags from 'containers/tags/Tags';
import Loading from 'components/loading/Loading';
import { useRouter } from 'next/router';
import { sortByValue } from 'utils/Utils';

const Index = ({ tagsList }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading lines={5} />;
  }

  return (
    <>
      <Head>
        <title>Browse Tags - {headerconfig.brandName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Tags tagsList={tagsList} />
    </>
  );
};

export async function getStaticProps(context) {
  let tagsList = await fetchAllTags('blog');
  if (tagsList.length) {
    tagsList = await getDataCountByTag(tagsList, 'blogs');
    tagsList = sortByValue(tagsList, 'count', 'desc');
    return {
      props: {
        tagsList,
      },
      revalidate: 21600,
    };
  }
}

export default Index;
