import React from 'react';
import { FaGooglePlay } from 'react-icons/fa';
import styles from './Playstore.module.scss';

const Playstore = ({ link }) => {
  return (
    <a
      className={styles.container}
      href={link}
      target="_blank"
      rel="noreferrer">
      <FaGooglePlay className={styles.icon} />
    </a>
  );
};

export default Playstore;
