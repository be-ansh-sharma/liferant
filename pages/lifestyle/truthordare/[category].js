import Head from 'next/head';
import Loading from 'components/loading/Loading';
import TDCONFIG from 'config/truthordare.json';
import TruthORDare from 'containers/lifestyle/truthordare/TruthORDare';
import headerconfig from 'config/header.json';

const Index = ({ category }) => {
  if (!category) {
    return <Loading lines={4} />;
  }

  let titleText;
  switch (category) {
    case 'teens':
      titleText = `Top Truth or Dares for Teens - ${headerconfig.brandName}`;
      break;
    case 'classic':
      titleText = `Classic Truth or Dares - ${headerconfig.brandName}`;
      break;
    case 'couplenormal':
      titleText = `Top Truth or Dares for Couples - ${headerconfig.brandName}`;
      break;
    default:
      titleText = `Truth or Dare - ${headerconfig.brandName}`;
  }

  return (
    <>
      <Head>
        <title>{titleText}</title>
      </Head>
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
