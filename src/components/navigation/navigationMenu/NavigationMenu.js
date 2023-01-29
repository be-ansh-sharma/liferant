import React from 'react';
import styles from './NavigationMenu.module.scss';
import { FaCaretDown } from 'react-icons/fa';
import Link from 'next/link';
import NavigationItems from './navigationitems/NavigationItems';
import useComponentVisible from 'hooks/useComponentVisible';

const NavigationMenu = ({ name, items, depth, mode }) => {
  let hasChild = typeof items === 'object' && items !== null;
  const [ref, showMenu, setShowMenu] = useComponentVisible(false);

  if (hasChild) {
    return (
      <>
        <li
          ref={ref}
          className={styles.items}
          onClick={() => setShowMenu(!showMenu)}>
          <div className={styles.wrapper}>
            <p className={styles.itemText}>{name}</p>
            <FaCaretDown className={styles.caret} />
          </div>
          {showMenu && (
            <NavigationItems depth={depth + 1} items={items} mode={mode} />
          )}
        </li>
      </>
    );
  } else {
    return (
      <li className={styles.items}>
        <Link href={items}>
          <p className={styles.itemText}>{name}</p>
        </Link>
      </li>
    );
  }
};

export default NavigationMenu;
