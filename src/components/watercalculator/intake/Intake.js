import React, { useState } from 'react';
import styles from './Intake.module.scss';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import FadeSwitchTransistion from 'components/transistions/fadeswitchtransistion/FadeSwitchTransistion';
import { calculateDailyGoal } from 'utils/water';
import ERRORS from 'config/errors.json';
import Toggle from 'react-toggle';

const Intake = ({ resultHandler, person }) => {
  const [weight, setWeight] = useState(person?.weight || 60);
  const [weightType, setWeightType] = useState(person?.weightType || 'Kg');
  const [exerciseMinutes, setExerciseMinutes] = useState(
    person?.exerciseMinutes || 60,
  );
  const [error, setError] = useState('');

  const weightChangeHandler = event => {
    let currentWeight = event.target.value;
    if (!isNaN(currentWeight.toString())) {
      setWeight(currentWeight);
    }
  };

  const exerciseChangeHandler = event => {
    let currentExercise = event.target.value;
    if (!isNaN(currentExercise.toString())) {
      setExerciseMinutes(currentExercise);
    }
  };

  const typeChangeHandler = () =>
    weightType === 'Kg' ? setWeightType('lbs') : setWeightType('Kg');

  const submitHandler = () => {
    let correctWeight = parseFloat(weight);
    let correctExercise = parseFloat(exerciseMinutes);
    if (!correctWeight || correctExercise < 0) {
      return setError(ERRORS.general);
    }
    if (correctWeight > 400 || correctExercise > 300) {
      return setError(ERRORS.invalid);
    }
    resultHandler(
      calculateDailyGoal({
        weight: correctWeight,
        weightType,
        exerciseMinutes: correctExercise,
      }),
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.headingText}>Daily Water Intake Calculator</h1>
      </div>
      <div className={styles.form}>
        <label htmlFor="Metric" className={styles.mode}>
          <div className={styles.toggle}>
            <span
              className={
                weightType === 'Kg'
                  ? `${styles.system} ${styles.focused}`
                  : `${styles.system}`
              }>
              Metric
            </span>
            <Toggle
              defaultChecked={weightType === 'lbs'}
              icons={false}
              className="bmi"
              onChange={typeChangeHandler}
            />
            <span
              className={
                weightType === 'lbs'
                  ? `${styles.system} ${styles.focused}`
                  : `${styles.system}`
              }>
              Imperial System
            </span>
          </div>
        </label>
        <div className={styles.weightContainer}>
          <label htmlFor="Weight">
            <span className={styles.label}>Weight: </span>
            <input
              type="text"
              name="weight"
              value={weight}
              maxLength={5}
              className={styles.weight}
              onChange={weightChangeHandler}
            />
          </label>
          <FadeSwitchTransistion
            mode="out-in"
            type="fadeup"
            switcher={weightType === 'Kg' ? true : false}>
            <span className={styles.type}>{weightType}</span>
          </FadeSwitchTransistion>
        </div>
        <div className={styles.exerciseContainer}>
          <label htmlFor="Exercise" />
          <input
            type="text"
            name="exercise"
            value={exerciseMinutes}
            maxLength={3}
            className={styles.exercise}
            onChange={exerciseChangeHandler}
          />
          <span className={styles.exerciseText}>Minutes Exercise/day</span>
        </div>
      </div>
      <div className={styles.submit}>
        <AwesomeButton
          cssModule={AwesomeButtonStyles}
          type="primary"
          ripple
          size="medium"
          onPress={submitHandler}>
          Show Me!
        </AwesomeButton>
      </div>
      {!!error.length && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Intake;
