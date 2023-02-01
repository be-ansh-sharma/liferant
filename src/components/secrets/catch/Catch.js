import { ScaleFade } from '@chakra-ui/react';
import Icon from 'components/icon/Icon';
import { useEffect, useState } from 'react';
import Loading from '../loading/Loading';
import styles from './Catch.module.scss';
import { getRandomDocument } from 'services/firebase/Database';

const Catch = ({ clickHandler }) => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [secretMessage, setSecretMessage] = useState(null);

  useEffect(() => {
    if (showLoadingScreen && !secretMessage) {
      getRandomDocument('secrets').then(res => {
        setSecretMessage(res);
      });
    }
  }, []);

  return (
    <ScaleFade initialScale={0.9} in={true} className={styles.container}>
      {showLoadingScreen ? (
        <Loading cb={setShowLoadingScreen} mode="catch" />
      ) : (
        <>
          <div className={styles.header}>
            <div className={styles.back} onClick={() => clickHandler(null)}>
              <Icon
                name="FaArrowLeft"
                style={{ color: '#00B0FF', fontSize: '1.5em' }}
              />
            </div>
            <h1 className={styles.heading}>Look What You Caught</h1>
          </div>
          <div className={styles.cardContainer}>
            {secretMessage && (
              <div className={styles.card}>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{
                    __html: secretMessage.content,
                  }}></div>
                <p className={styles.alias}>- {secretMessage.alias}</p>
              </div>
            )}
          </div>
        </>
      )}
    </ScaleFade>
  );
};

export default Catch;
