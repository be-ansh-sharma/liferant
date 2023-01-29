import React from 'react';
import styles from './IntakeResult.module.scss';
import { FaArrowLeft } from 'react-icons/fa';
import Schedule from './schedule/Schedule';

const IntakeResult = ({ person, resultHandler }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <span onClick={() => resultHandler()} className={styles.back}>
          <FaArrowLeft className={styles.icon} />
        </span>
        <h1 className={styles.heading}>
          Daily Goal:{' '}
          <span className={styles.goal}>
            {person.dailyGoal} {person.dailyGoalType}
          </span>
        </h1>
      </div>
      <Schedule person={person} />
    </div>
  );
};

export default IntakeResult;
