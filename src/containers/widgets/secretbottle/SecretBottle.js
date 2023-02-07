import styles from './SecretBottle.module.scss';
import Options from 'components/secrets/options/Options';
import Throw from 'components/secrets/throw/Throw';
import Catch from 'components/secrets/catch/Catch';
import { useState } from 'react';

const SecretBottle = () => {
  let [currentAction, setCurrentAction] = useState();
  let [showAction, setShowAction] = useState(false);
  let action = null;

  const clickHandler = action => {
    setCurrentAction(action);
    setShowAction(action !== null);
  };

  switch (currentAction) {
    case 'throw': {
      action = <Throw clickHandler={clickHandler} />;
      break;
    }
    case 'catch': {
      action = <Catch clickHandler={clickHandler} />;
      break;
    }
    default: {
      action = <Options clickHandler={clickHandler} />;
    }
  }

  return <div className={styles.container}>{action}</div>;
};

export default SecretBottle;
