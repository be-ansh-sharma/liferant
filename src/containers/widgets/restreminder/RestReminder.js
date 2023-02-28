import { useEffect, useState } from 'react';
import {
  getNotificationPermission,
  hasNotifications,
  hasNotificationPremission,
} from 'utils/Utils';
import styles from './RestReminder.module.scss';

const RestReminder = () => {
  const [haspermission, setHasPersmission] = useState(
    hasNotificationPremission(),
  );
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    getNotificationPermission().then(permission => {
      if (permission === 'granted') {
        setHasPersmission(true);
      }
    });
    if (!hasNotifications) {
      setErrorMessage(`Your Browser doesn't support Notifications!`);
    } else if (!haspermission) {
      setErrorMessage(
        'You need to enable Notifications for this to work. Please enable themfor this to work!',
      );
    }
  }, []);

  const clickHandler = () => {
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification('Vibration Sample', {
        body: 'Buzz! Buzz!',
        icon: '/icons/android-chrome-192x192.png',
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        tag: 'vibration-sample',
        timestamp: 1676326728068,
      });
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Rest Reminder</div>
      {!!errorMessage.length && (
        <div className={styles.error}>{errorMessage}</div>
      )}
      <div onClick={clickHandler}>Send me a notification</div>
    </div>
  );
};

export default RestReminder;
