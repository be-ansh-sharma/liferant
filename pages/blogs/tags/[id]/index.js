import Loading from 'components/loading/Loading';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  fetchAllTags,
  getTagByID,
  getDataByTag,
} from 'services/firebase/Database';
import headerconfig from 'config/header.json';
import Tag from 'containers/Tag/Tag';

const Index = ({ tag, questions }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading lines={5} />;
  }

  let titleText = `${tag.id} - ${headerconfig.brandName}`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Tag tag={tag} list={questions} type="blogs" />
    </>
  );
};

export async function getStaticPaths() {
  let tagsList = await fetchAllTags('blogs');
  let paths = [];
  tagsList.map(({ id }) => {
    paths.push({
      params: {
        id,
      },
    });
  });
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const tag = await getTagByID(id);
  console.log(tag);
  if (!tag) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }
  let { list } = await getDataByTag(id, null, null, 5, 'blogs');
  return {
    props: {
      tag,
      questions: list,
    },
    revalidate: 86400,
  };
}

export default Index;
