import { useState } from 'react';
import styles from './WasteCounter.module.scss';
import FadeSwitchTransistion from 'components/transistions/fadeswitchtransistion/FadeSwitchTransistion';
import Input from 'components/wastecounter/input/Input';
import Output from 'components/wastecounter/output/Output';
import { FaArrowLeft } from 'react-icons/fa';

const WasteCounter = () => {
  const [showResult, setShowResult] = useState(false);
  const [date, setDate] = useState();

  const resultHandler = selectedDate => {
    if (selectedDate) {
      setDate(selectedDate);
    }

    setShowResult(!!selectedDate);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        {showResult && (
          <span onClick={() => resultHandler()} className={styles.back}>
            <FaArrowLeft className={styles.icon} />
          </span>
        )}
        <h1 className={styles.headingText}>Waste Counter</h1>
      </div>
      <FadeSwitchTransistion
        mode="out-in"
        switcher={!showResult}
        mount={false}
        type="fade"
        appear={false}>
        {!showResult ? (
          <Input resultHandler={resultHandler} date={date} />
        ) : (
          <Output resultHandler={resultHandler} date={date} />
        )}
      </FadeSwitchTransistion>
    </div>
  );
};

export default WasteCounter;
