import { useEffect, useRef, useState } from 'react';
import styles from './Options.module.scss';
import Tile from 'components/tiles/category/Tile';
import lottie from 'lottie-web';
import { ScaleFade } from '@chakra-ui/react';

const Options = ({ clickHandler }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animations/shoal-of-fish.json',
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <ScaleFade initialScale={0.9} in={true} className={styles.container}>
      <div ref={ref} className={styles.animation}></div>
      <div className={styles.contentWrapper}>
        <Tile
          title="THROW"
          description="Write Your Secrets in a bottle and throw them away."
          link={() => clickHandler('throw')}
          icon="GiFireBottle"
          color="#00B0FF"
          disableLink
        />
        <Tile
          title="CATCH"
          description="Catch A Secret Of Others"
          link={() => clickHandler('catch')}
          icon="GiFishing"
          color="#00B0FF"
          disableLink
        />
      </div>
    </ScaleFade>
  );
};

export default Options;
