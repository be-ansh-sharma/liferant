import { Badge } from '@chakra-ui/react';
import Link from 'next/link';
import styles from './Tag.module.scss';

const Tag = ({ tag }) => {
  return (
    <Link href={`tags/${tag.id}`} className={styles.container}>
      <>
        <Badge className={styles.title}>{tag.id}</Badge>
        <div className={styles.description}>{tag.description}</div>
        {tag.count > 0 && (
          <div className={styles.count}>
            {tag.count} {tag.count > 1 ? 'Blogs' : 'Blog'}
          </div>
        )}
      </>
    </Link>
  );
};

export default Tag;
