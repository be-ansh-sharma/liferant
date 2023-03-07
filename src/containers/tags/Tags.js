import Tag from 'components/tag/Tag';
import styles from './Tags.module.scss';

const Tags = ({ tagsList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Browse Tags</h1>
      <div className={styles.content}>
        {tagsList.map(tag => (
          <Tag key={tag.refId} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default Tags;
