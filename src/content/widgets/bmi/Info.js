import React from 'react';
import styles from './Info.module.scss';
import Ads from 'components/ads/Ads';

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h3 className={styles.headingtext}>What is the body mass index (BMI)?</h3>
        </div>


        <div className={styles.content}>
          The body mass index (BMI) is a measure that uses your height and weight
          to work out if your weight is healthy. The BMI calculation divides an
          adult's weight in kilograms by their height in metres squared. For
          example, A BMI of 25 means 25kg/m2.
        </div>
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <h3 className={styles.headingtext}>BMI ranges</h3>
          </div>

          <div className={styles.content}>
            For most adults, an ideal BMI is in the 18.5 to 24.9 range.

            For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.

            If your BMI is:

            <ul>
              <li>below 18.5 - you're in the underweight range</li>
              <li>between 18.5 and 24.9 - you're in the healthy weight range</li>
              <li>between 25 and 29.9 - you're in the overweight range</li>
              <li>between 30 and 39.9 - you're in the obese range</li>
            </ul>
          </div>
        </div>

        <div className={styles.wrapper}>
          <Ads type="grid" slot="5827625644" />
        </div>

        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <h3 className={styles.headingtext}>Accuracy of BMI</h3>
          </div>

          <div className={styles.content}>
            <div className={styles.para}>BMI takes into account natural variations in body shape, giving a
              healthy weight range for a particular height.</div>
            <div className={styles.para}>
              {' '}
              As well as measuring measuring your BMI, healthcare professionals
              may take other factors account when assessing if you're a healthy
              weight.
            </div>
            <div className={styles.para}>
              Muscle is much
              denser than fat, so very muscular people, such as heavyweight
              heavyweight boxers, weight trainers and athletes, may be a healthy
              though their BMI is classed as obese.</div>
            <div className={styles.para}> Your ethnic group can also
              affect your risk of some health conditions. For example, adults of
              South Asian origin may have a higher risk of some health problems,
              such as diabetes, with a BMI of 23, which is usually considered
              healthy.</div>
            <div className={styles.para}> You should not use BMI as a measure if you're pregnant. Get
              advice from your midwife or GP if you're concerned about your
              weight.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
