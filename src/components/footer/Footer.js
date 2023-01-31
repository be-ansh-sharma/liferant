import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.coloums}>
        <h3 className={styles.heading}>About Us</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li className={styles.item}>
            <Link
              href="https://ko-fi.com/liferant"
              passHref={false}
              target="_blank">
              Buy me a Coffee
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              href="https://play.google.com/store/apps/dev?id=7526734186437937977"
              passHref={false}
              target="_blank">
              Apps
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.coloums}>
        <h3 className={styles.heading}>Let Us Help</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="mailto:ntraholic69@gmail.com" target="_top">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.coloums}></div>
    </footer>
  );
};

export default Footer;
