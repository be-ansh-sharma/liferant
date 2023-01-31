import React, { useState } from 'react';
import styles from './Input.module.scss';
import Toggle from 'react-toggle';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import FadeSwitchTransistion from 'components/transistions/fadeswitchtransistion/FadeSwitchTransistion';
import ERRORS from 'config/errors.json';

const Input = ({ person, resultHandler }) => {
  const [weight, setWeight] = useState(person?.weight || 60);
  const [weightType, setWeightType] = useState(person?.weightType || 'Kg');
  const [height, setheight] = useState(person?.height || '0');
  const [error, setError] = useState('');
  const [imperialHeight, setImperialHeight] = useState(
    person?.imperialHeight || {
      feet: 0,
      inch: 0,
    },
  );

  const weightChangeHandler = event => {
    let currentWeight = event.target.value;
    if (!isNaN(currentWeight.toString())) {
      setWeight(currentWeight);
    }
  };

  const typeChangeHandler = () =>
    weightType === 'Kg' ? setWeightType('lbs') : setWeightType('Kg');

  const submitHandler = () => {
    let bmi;
    let correctHeight;
    let correctWeight = parseFloat(weight);
    if (weightType === 'Kg') {
      correctHeight = parseFloat(height);
      correctHeight /= 100;
    } else {
      correctHeight = { ...imperialHeight };
      imperialHeight.feet = parseFloat(imperialHeight.feet);
      imperialHeight.inch = parseFloat(imperialHeight.inch);
      correctHeight = (imperialHeight.feet * 12 + imperialHeight.inch) / 39.37;
      correctWeight /= 2.205;
    }
    if (correctHeight && correctWeight) {
      bmi = correctWeight / (correctHeight * correctHeight);
      bmi = bmi.toFixed(1);
      if (bmi < 10 || bmi > 40) {
        return setError(ERRORS.general);
      }
      resultHandler({
        bmi,
        weightType,
        weight,
        imperialHeight,
        height,
      });
    } else {
      return setError(ERRORS.invalid);
    }
  };

  const heightChangeHandler = (event, mode) => {
    let currentHeight = event.target.value;
    if (mode) {
      let height = { ...imperialHeight };
      if (!isNaN(currentHeight.toString())) {
        if (mode === 'feet') {
          return setImperialHeight({
            ...height,
            feet: currentHeight,
          });
        } else {
          return setImperialHeight({
            ...height,
            inch: currentHeight,
          });
        }
      }
    } else {
      if (!isNaN(currentHeight.toString())) {
        setheight(currentHeight);
      }
    }
  };

  return (
    <div className={styles.container}>
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
          <div className={styles.heightWrapper}>
            {weightType === 'Kg' ? (
              <label htmlFor="height">
                <span className={styles.label}>Height: </span>
                <input
                  type="text"
                  name="height"
                  value={height}
                  maxLength={3}
                  className={styles.height}
                  onChange={heightChangeHandler}
                />
                <span className={styles.label}>cm</span>
              </label>
            ) : (
              <label htmlFor="height">
                <span className={styles.label}>Height: </span>
                <input
                  type="text"
                  name="height"
                  value={imperialHeight.feet}
                  maxLength={1}
                  className={styles.feet}
                  onChange={event => heightChangeHandler(event, 'feet')}
                />
                <span className={styles.heightlabel}>&apos;</span>
                <input
                  type="text"
                  name="height"
                  value={imperialHeight.inch}
                  maxLength={2}
                  className={styles.inch}
                  onChange={event => heightChangeHandler(event, 'inch')}
                />
                <span className={styles.heightlabel}>&quot;</span>
              </label>
            )}
          </div>
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

export default Input;
