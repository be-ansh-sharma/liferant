import React, { useState } from 'react';
import headerjson from 'config/header.json';
import styles from './Navigation.module.scss';
import NavigationMenu from './navigationMenu/NavigationMenu';

const Navigation = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {Object.keys(headerjson.items).map((item, index) => (
          <NavigationMenu
            key={index}
            name={item}
            items={headerjson.items[item]}
            depth={0}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
