const { useEffect, useState, useRef } = require('react');
import lottie from 'lottie-web';
import styles from './Loading.module.scss';

const MESSAGE = {
  throw: [
    'Wrapping up your message',
    'Screwing that cork!',
    'Finding a new spot to throw',
    `It's done.`,
  ],
  catch: [
    'Finding a good spot & bait',
    'Attaching the line and tieing the hook',
    'Casting the line',
    'Handling it with care',
  ],
};

const Loading = ({ cb, mode }) => {
  const ref = useRef();
  const [currentMessage, setCurrentMessage] = useState({
    message: MESSAGE[mode][0],
    index: 0,
  });

  useEffect(() => {
    if (ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path:
          mode === 'throw'
            ? '/animations/bottle.json'
            : '/animations/fisherman.json',
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  let interval = setInterval(() => {
    if (currentMessage.index < MESSAGE[mode].length) {
      clearInterval(interval);
      setCurrentMessage({
        message: MESSAGE[mode][currentMessage.index + 1],
        index: currentMessage.index + 1,
      });
    }
  }, 1500);

  if (currentMessage.index === MESSAGE[mode].length) {
    clearInterval(interval);
    cb(null);
  }

  return (
    <div className={styles.container}>
      {currentMessage.index !== MESSAGE[mode].length && (
        <>
          <div ref={ref} className={styles.animation}></div>
          <div className={styles.message}>{currentMessage.message}</div>
        </>
      )}
    </div>
  );
};

export default Loading;
