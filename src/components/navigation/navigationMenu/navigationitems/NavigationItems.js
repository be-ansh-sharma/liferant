import React from 'react';
import Link from 'next/link';
import styles from './NavigationItems.module.scss';
import NavigationMenu from '../NavigationMenu';

const NavigationItems = ({ items, depth }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {Object.keys(items).map((item, index) => {
          if (typeof items[item] === 'object' && items[item] !== null) {
            return (
              <li key={index} className={styles.item}>
                <NavigationMenu
                  depth={depth + 1}
                  items={items[item]}
                  name={item}
                />
              </li>
            );
          } else {
            return (
              <li className={styles.item} key={index}>
                <Link href={items[item]} className={styles.anchor}>
                  {item}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default NavigationItems;
