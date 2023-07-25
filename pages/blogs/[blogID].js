import Blog from 'components/blog/Blog';
import Loading from 'components/loading/Loading';
import headerconfig from 'config/header.json';
import Head from 'next/head';
import { useEffect } from 'react';
import { getBlog, getAllBlogs, updateMetric } from 'services/firebase/Database';

const Index = ({ blog }) => {
  useEffect(() => {
    if (blog) {
      updateMetric('blogs', blog.refId, 'views', 1);
    }
  }, [blog]);
  
  if (!blog) {
    return <Loading lines={3} />;
  }

  let titleText = `${blog.title} - ${headerconfig.brandName}`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={blog.metaDescription} />
      </Head>
      <Blog blog={blog} />
    </>
  );
};

export async function getStaticPaths() {
  let paths = [];
  const blogs = await getAllBlogs();
  for (const blog of blogs) {
    paths.push({
      params: {
        blogID: blog.seoTitle,
      },
    });
  }

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { blogID } = context.params;
  let blog = await getBlog(blogID);

  if (!blog) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  return {
    props: {
      blog,
    },
    revalidate: 86400,
  };
}

export default Index;
