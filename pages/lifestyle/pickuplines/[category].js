import Head from 'next/head';
import Loading from 'components/loading/Loading';
import PickupLines from 'containers/lifestyle/pickuplines/PickupLines';
import PICKUPCATEGORY from 'config/pickuplines.json';
import headerconfig from 'config/header.json';

const Index = ({ category }) => {
  if (!category) {
    return <Loading lines={4} />;
  }

  let titleText = `${
    category === 'formen'
      ? 'Top Pick up lines for Men'
      : 'Top Pick up lines for Woemen'
  } - ${headerconfig.brandName}`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
      </Head>
      <PickupLines category={category} />
    </>
  );
};

export async function getStaticPaths() {
  let paths = [];
  for (const itr in PICKUPCATEGORY) {
    let { id } = PICKUPCATEGORY[itr];
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

  let isInValidRoute = Object.keys(PICKUPCATEGORY).every(itr => {
    cat = PICKUPCATEGORY[itr].id;
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
