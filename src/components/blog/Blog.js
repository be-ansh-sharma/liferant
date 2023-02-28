import Image from 'next/image';
import styles from './Blog.module.scss';
import { transformDate } from 'utils/Utils';

const Blog = ({ blog }) => {
  const {
    author,
    byline,
    content,
    created,
    imagePath,
    metaDescription,
    title,
  } = blog;
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>{title}</h1>
        <div className={styles.metric}>
          By <span className={styles.author}>{author}</span> published on{' '}
          {transformDate(created, 'MMMM DD, YYYY')}
        </div>
      </div>
      <div className={styles.banner}>
        <Image className={styles.image} src={imagePath} alt={title} fill />
      </div>
      <blockquote className={styles.quote}>{byline}</blockquote>
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
