import React from 'react';
import styles from './Tile.module.scss';
import Link from 'next/link';
import Icon from 'components/icon/Icon';

const Tile = ({
  title,
  description,
  link,
  icon,
  color,
  disableLink = false,
}) => {
  return (
    <>
      {!disableLink ? (
        <Link href={link} className={styles.container}>
          <div className={styles.iconContainer}>
            <Icon name={icon} style={{ color: color, fontSize: '1.5em' }} />
          </div>
          <span className={styles.title}>{title}</span>
          <span className={styles.description}>{description}</span>
        </Link>
      ) : (
        <div onClick={link} className={styles.container}>
          <div className={styles.iconContainer}>
            <Icon name={icon} style={{ color: color, fontSize: '1.5em' }} />
          </div>
          <span className={styles.title}>{title}</span>
          <span className={styles.description}>{description}</span>
        </div>
      )}
    </>
  );
};

export default Tile;
