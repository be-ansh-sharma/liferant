import React from 'react';
import WaterIntake from 'containers/widgets/waterintake/WaterIntake';
import Playstore from 'components/playstore/Playstore';
import Head from 'next/head';
import headerconfig from 'config/header.json';

const WaterCalculator = () => {
  let titleText = `Daily Water Intake Calculator - ${headerconfig.brandName}`;
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Find your daily water intake with our calculator. It even helps you schedule your daily intake."
        />
        <title>{titleText}</title>
      </Head>
      <WaterIntake />
      <Playstore link={headerconfig.links.drinkingbuddy} />
    </>
  );
};

export default WaterCalculator;
