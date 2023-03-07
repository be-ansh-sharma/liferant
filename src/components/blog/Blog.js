import Image from 'next/image';
import styles from './Blog.module.scss';
import { transformDate } from 'utils/Utils';
import Link from 'next/link';
import { Badge } from '@chakra-ui/react';

const Blog = ({ blog }) => {
  const { author, byline, content, created, imagePath, title, tags } = blog;
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>{title}</h1>
        <div className={styles.metric}>
          By <span className={styles.author}>{author}</span> published on{' '}
          {transformDate(created, 'MMMM DD, YYYY')}
        </div>
      </div>
      <div className={styles.tags}>
        {tags?.map(tag => (
          <Link key={tag} className={styles.tag} href={`/blogs/tags/${tag}`}>
            <Badge className={styles.tagitem}>{tag.toUpperCase()}</Badge>
          </Link>
        ))}
      </div>
      <div className={styles.banner}>
        <Image
          priority
          className={styles.image}
          src={imagePath}
          alt={title}
          fill
        />
      </div>
      {!!byline.length && (
        <blockquote className={styles.quote}>{byline}</blockquote>
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  );
};

export default Blog;
