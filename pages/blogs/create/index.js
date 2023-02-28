import Loading from 'components/loading/Loading';
import NewBlog from 'components/newblog/NewBlog';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Auth } from 'src/services/firebase/Firebase';

export default function Index() {
  const [user, loading, error] = useAuthState(Auth);
  const router = useRouter();

  if (!user) {
    <Loading lines={3} />;
  }

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

  return <NewBlog />;
}
