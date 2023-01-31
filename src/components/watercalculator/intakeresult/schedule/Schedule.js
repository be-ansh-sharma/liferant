import React, { useState, useEffect } from 'react';
//import TimePicker from 'react-time-picker';
import TimePicker from 'react-time-picker/dist/entry.nostyle';
import styles from './Schedule.module.scss';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { calculateSchedule } from 'utils/water';
import FadeSwitchTransistion from 'components/transistions/fadeswitchtransistion/FadeSwitchTransistion';
import ERRORS from 'config/errors.json';

const timerProps = {
  amPmAriaLabel: 'Select AM/PM',
  clearAriaLabel: 'Clear value',
  clockAriaLabel: 'Toggle clock',
  hourAriaLabel: 'Hour',
  minuteAriaLabel: 'Minute',
  nativeInputAriaLabel: 'Time',
  secondAriaLabel: 'Second',
};

const CUPS = {
  ml: [200, 250, 500, 750, 1000],
  'oz.': [6.7628, 8.45351, 16.907, 25.3605, 33.814],
};

const Schedule = ({ person }) => {
  const [sleep, setSleep] = useState();
  const [wake, setWake] = useState();
  const [error, setError] = useState('');
  const [results, setResults] = useState();
  const [cup, setCup] = useState(
    person?.dailyGoalType === 'ml' ? CUPS.ml[1] : CUPS['oz.'][1],
  );

  const submitHandler = () => {
    if (!sleep || !wake) {
      setError(ERRORS.general);
      return;
    }
    let sleepArray = sleep.split(':');
    let wakeArray = wake.split(':');

    if (sleepArray.length === 2 && wakeArray.length === 2) {
      if (error) {
        setError('');
        setResults(null);
      }
      try {
        var notifications = calculateSchedule(
          person,
          cup,
          sleepArray,
          wakeArray,
        );
        if (!notifications.length) {
          setError(ERRORS.general);
        } else {
          setResults(notifications);
        }
      } catch (err) {
        setError(ERRORS.general);
      }
    } else {
      setError(ERRORS.general);
    }
  };

  const cupChangeHandler = event => {
    let currentCup = parseFloat(event?.target?.value);
    if (CUPS[person.dailyGoalType].includes(currentCup) && cup !== currentCup) {
      setCup(currentCup);
    }
  };

  useEffect(() => {
    if (results?.length) {
      submitHandler();
    }
  }, [cup]);

  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Tell us your sleep and wake-up time</h4>
      <div className={styles.pickers}>
        <TimePicker onChange={setSleep} value={sleep} {...timerProps} />
        <span className={styles.divider}>-</span>
        <TimePicker onChange={setWake} value={wake} {...timerProps} />
        <IoArrowForwardCircleOutline
          className={styles.submit}
          onClick={submitHandler}
        />
      </div>
      {!!ERRORS.length && <p className={styles.danger}>{error}</p>}
      {!!results?.length && (
        <div className={styles.selectContainer}>
          <label htmlFor="cup">Cup Size</label>
          <select
            className={styles.select}
            value={cup}
            onChange={cupChangeHandler}>
            {CUPS[person.dailyGoalType].map(option => (
              <option key={option}>{Math.round(option)}</option>
            ))}
          </select>
        </div>
      )}
      {!!results?.length && (
        <FadeSwitchTransistion
          mode="out-in"
          switcher={results.length}
          mount={true}
          type="fade"
          appear={true}>
          <div className={styles.notificationContainer}>
            {results.map((notification, index) => {
              return (
                <div key={index} className={styles.notification}>
                  <p className={styles.notificationText}>{notification}</p>
                </div>
              );
            })}
          </div>
        </FadeSwitchTransistion>
      )}
    </div>
  );
};

export default Schedule;
