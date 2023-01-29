import React, { useState } from 'react';
import Intake from 'components/watercalculator/intake/Intake';
import IntakeResult from 'components/watercalculator/intakeresult/IntakeResult';
import FadeSwitchTransistion from 'components/transistions/fadeswitchtransistion/FadeSwitchTransistion';
import Info from 'content/widgets/watercalculator/Info';

const WaterIntake = () => {
  const [showResult, setShowResult] = useState(false);
  const [person, setPerson] = useState({});

  const resultHandler = person => {
    if (person) {
      setPerson(person);
    }
    setShowResult(!showResult);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <FadeSwitchTransistion
        mode="out-in"
        switcher={!showResult}
        mount={false}
        type="fade"
        appear={false}>
        {showResult && person?.dailyGoal ? (
          <IntakeResult person={person} resultHandler={resultHandler} />
        ) : (
          <Intake person={person} resultHandler={resultHandler} />
        )}
      </FadeSwitchTransistion>
      <Info />
    </div>
  );
};

export default WaterIntake;
