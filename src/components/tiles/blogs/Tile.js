import React from 'react';
import styles from './Tile.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Tile = ({ title, imagePath, seoTitle, byline }) => {
  return (
    <Link href={`/blogs/${seoTitle}`} className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={imagePath}
          alt={title}
          width={340}
          height={200}
          className={styles.image}
        />
      </div>
      <span className={styles.title}>{title}</span>
      <blockquote className={styles.quote}>{byline}</blockquote>
    </Link>
  );
};

export default Tile;
