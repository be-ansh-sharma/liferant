import React from 'react';
import BMICalculator from 'containers/widgets/bmicalculator/BMICalculator';
import Head from 'next/head';
import headerconfig from 'config/header.json';
import Recommendations from 'components/recommendations/Recommendations';

const Index = () => {
  let titleText = `BMI Calculator - ${headerconfig.brandName}`;

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Find your body mass index(BMI) with our calculator. Applicable for adults 20 years or older."
        />
        <title>{titleText}</title>
      </Head>
      <BMICalculator />
      <Recommendations skip="bmicalculator" />
    </>
  );
};

export default Index;
