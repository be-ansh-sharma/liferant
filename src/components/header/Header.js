import styles from './Header.module.scss';
import headerJson from 'src/config/header.json';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';
import useMobileComponent from 'hooks/useMobileComponent';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import Navigation from 'components/navigation/Navigation';

const Header = () => {
  const isMobile = useMobileComponent();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles.container}>
      {isMobile ? (
        <>
          <div onClick={onOpen} className={styles.bar}>
            <FaBars className={styles.barIcon} />
          </div>
          <h2 className={styles.heading}>
            <Link legacyBehavior href="/">
              <a
                dangerouslySetInnerHTML={{
                  __html: headerJson.brandNameFormatted,
                }}></a>
            </Link>
          </h2>
          <div className={styles.modewrapper}>
            <label htmlFor="Dark Mode" className={styles.mode}>
              <Toggle
                defaultChecked={colorMode === 'light'}
                icons={false}
                onChange={toggleColorMode}
              />
            </label>
          </div>
          <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
            <DrawerOverlay />
            <DrawerContent>
              <Navigation />
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <>
          <h2 className={styles.heading}>
            <Link legacyBehavior href="/">
              <a
                dangerouslySetInnerHTML={{
                  __html: headerJson.brandNameFormatted,
                }}></a>
            </Link>
          </h2>
          <Navigation />
          <label htmlFor="Dark Mode" className={styles.mode}>
            <Toggle
              defaultChecked={colorMode === 'light'}
              icons={false}
              onChange={toggleColorMode}
            />
          </label>
        </>
      )}
    </div>
  );
};

export default Header;
