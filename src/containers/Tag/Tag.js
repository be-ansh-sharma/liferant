import Sort from 'components/sort/Sort';
import { useEffect, useState } from 'react';
import { getDataByTag } from 'services/firebase/Database';
import styles from './Tag.module.scss';
import { Badge, Button } from '@chakra-ui/react';
import Link from 'next/link';
import BlogTile from 'components/tiles/blogs/Tile';

const Tag = ({ tag, list, type }) => {
  const [sort, setSort] = useState();
  const [tagObject, setTagObject] = useState({
    items: list || [],
    hasMore: false,
  });
  const [loading, setLoading] = useState(false);
  const [lastVisible, setLastVisible] = useState(null);

  useEffect(() => {
    if (sort) {
      setTagObject({
        items: [],
        hasMore: false,
      });
      setLastVisible(null);
      fetchData(true);
    }
  }, [sort]);

  useEffect(() => {
    fetchData(true);
  }, []);

  const fetchData = clean => {
    getDataByTag(
      tag.id,
      sort?.value,
      clean ? null : lastVisible,
      10,
      type,
    ).then(({ list, lastVisible }) => {
      if (list.length) {
        setTagObject({
          ...tagObject,
          items: clean ? list : tagObject.items.concat(list),
          hasMore: true,
        });
      } else {
        setTagObject({
          ...tagObject,
          hasMore: false,
        });
      }
      setLoading(false);
      setLastVisible(lastVisible);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.tileWrapper}>
          <Badge className={styles.title}>{tag.id}</Badge>
        </h1>
        <div>{tag.description}</div>
      </div>
      <Sort sortHandler={setSort} config="blogs" />
      {!tagObject.items.length ? (
        <div className={styles.empty}>
          It is very empty here. Browse{' '}
          <p className={styles.emtpyLink}>
            <Link href={type === 'ntr' ? '/stories' : '/blogs'}>
              {type === 'ntr' ? 'Stories' : 'Blogs'}
            </Link>
          </p>{' '}
          Instead!
        </div>
      ) : (
        <>
          <div className={styles.listWrapper}>
            {tagObject.items.map(item => {
              return <BlogTile key={item.refId} {...item} />;
            })}
          </div>
          {!!tagObject.hasMore && (
            <div className={styles.loadmore}>
              <Button
                isLoading={loading}
                onClick={() => {
                  setLoading(true);
                  fetchData();
                }}>
                Load More
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Tag;
