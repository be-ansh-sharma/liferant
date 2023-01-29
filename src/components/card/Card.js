import React from 'react';
import styles from './Card.module.scss'; 13

const Card = ({ quote }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.message}>{quote.message}</div>
        <div className={styles.author}>- {quote.author}.</div>
      </div>
    </div>
  );
};

export default Card;
