import React from 'react';
import styles from './Output.module.scss';
import BMICONFIG from 'config/bmi.json';

const BMIRANGE = BMICONFIG.BMIRANGE;
const BMICOLOR = BMICONFIG.BMICOLOR;

const Output = ({ person }) => {
  const getDisplayRange = bmi => {
    let range;
    Object.keys(BMIRANGE).map(item => {
      let rangeArr = BMIRANGE[item];
      if (bmi >= rangeArr[0] && bmi <= rangeArr[1]) {
        range = item;
      }
    });
    return (
      <span
        style={{
          color: BMICOLOR[range],
        }}>
        {range}
      </span>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2>
          Yout BMI is <span className={styles.bmi}>{person.bmi}</span> which
          comes under {getDisplayRange(person.bmi)} Range!
        </h2>
      </div>
    </div>
  );
};

export default Output;
