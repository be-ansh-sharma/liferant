import React, { useState } from 'react';
import Input from 'components/bmi/input/Input';
import Output from 'components/bmi/output/Output';
import styles from './BMICalculator.module.scss';
import { FaArrowLeft } from 'react-icons/fa';
import FadeSwitchTransistion from 'components/transistions/fadeswitchtransistion/FadeSwitchTransistion';
import Info from 'content/widgets/bmi/Info';

const BMICalculator = () => {
  const [showResult, setShowResult] = useState(false);
  const [person, setPerson] = useState({});
  const resultHandler = person => {
    if (person) {
      setPerson(person);
    }
    setShowResult(!showResult);
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        {showResult && (
          <span onClick={() => resultHandler()} className={styles.back}>
            <FaArrowLeft className={styles.icon} />
          </span>
        )}
        <h1 className={styles.headingText}>Body Mass Index(BMI) Calculator</h1>
      </div>
      <FadeSwitchTransistion
        mode="out-in"
        switcher={!showResult}
        mount={false}
        type="fade"
        appear={false}>
        {showResult ? (
          <Output person={person} />
        ) : (
          <Input person={person} resultHandler={resultHandler} />
        )}
      </FadeSwitchTransistion>
      <Info />
    </div>
  );
};

export default BMICalculator;
