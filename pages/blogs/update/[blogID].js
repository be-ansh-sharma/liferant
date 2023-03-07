import Loading from 'components/loading/Loading';
import NewBlog from 'components/newblog/NewBlog';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getBlog } from 'services/firebase/Database';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Auth } from 'src/services/firebase/Firebase';

const Index = () => {
  const router = useRouter();
  const [blog, setBlog] = useState();
  const [user, loading, error] = useAuthState(Auth);
  let blogID = router.query.blogID;

  useEffect(() => {
    if (!user && !loading) {
      router.push(
        {
          pathname: '/',
          query: {
            toastMessage: 'No Access',
          },
        },
        '/',
      );
    }

    if (!blog && user && blogID) {
      getBlog(blogID).then(b => setBlog(b));
    }
  }, [blogID, user, loading]);

  if (!blog) {
    return <Loading lines={3} />;
  }

  return user ? <NewBlog blog={blog} /> : <Loading lines={4} />;
};

export default Index;
