import Head from 'next/head';
import Loading from 'components/loading/Loading';
import TDCONFIG from 'config/truthordare.json';
import TruthORDare from 'containers/lifestyle/truthordare/TruthORDare';

const Index = ({ category }) => {
  if (!category) {
    return <Loading lines={4} />;
  }

  return (
    <>
      <Head></Head>
      <TruthORDare category={category} />
    </>
  );
};

export async function getStaticPaths() {
  let paths = [];
  for (const itr in TDCONFIG) {
    let { id } = TDCONFIG[itr];
    paths.push({
      params: {
        category: id,
      },
    });
  }

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { category } = context.params;
  let cat;

  let isInValidRoute = Object.keys(TDCONFIG).every(itr => {
    cat = TDCONFIG[itr].id;
    return cat !== category;
  });

  if (isInValidRoute) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  return {
    props: {
      category,
    },
    revalidate: 3600,
  };
}

export default Index;
