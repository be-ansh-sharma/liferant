import Ads from 'components/ads/Ads';
import React from 'react';
import styles from './Info.module.scss';

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h3 className={styles.headingtext}>
            How to Use this Water Calculator
          </h3>
        </div>
        <div className={styles.content}>
          <span className={styles.para}>
            Get your personal daily water goals in just a few minutes.{' '}
          </span>
          <span className={styles.para}>
            Just enter your details into the form above.
          </span>
          <span className={styles.para}>
            Then, we’ll show you your results on how many ounces/ml and glasses
            of water per day you need to support your workouts and proper
            hydration levels.{' '}
          </span>
          <span className={`${styles.para} ${styles.danger}`}>
            Note: Results should not be used as a substitute for direct medical
            advice from your doctor or medical provider. Always check with your
            doctor for recommendations specific to your needs if you have a
            health problem influenced by water intake.
          </span>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h3 className={styles.headingtext}>
            How Your Daily Water Needs are Calculated
          </h3>
        </div>
        <div className={styles.content}>
          <span className={styles.para}>
            Our Water Intake Calculator uses a simple formula to quickly
            estimate your fluid needs. Here’s how it works:
          </span>
          <span className={styles.para}>
            Your general water requirements can be determined using your current
            body weight. Most people need to drink roughly half of their weight
            (in pounds) in ounces. For example, a 200-pound adult needs
            approximately 100 ounces of water each day.{' '}
          </span>
          <span className={styles.para}>
            Of course, your water needs will increase with any physical
            activity. So you’ll need to add 12 ounces of water for every 30
            minutes of daily activity.{' '}
          </span>
          <span className={styles.para}>
            For example, a 200-pound adult who exercises for 45 minutes per day
            on average, will need roughly 168 ounces of water daily.
          </span>
          <ul className={styles.list}>
            <li>150 ounces + (12 x 1.5) = 168 ounces</li>
          </ul>
          <span className={styles.para}>
            Water needs can also fluctuate with the weather - you often need
            more fluids in hot and humid temperatures to reduce your risk of
            overheating.
          </span>
        </div>
      </div>

      <div className={styles.wrapper}>
        <Ads type="grid" slot="5827625644" />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h3 className={styles.headingtext}>
            Why Drinking Water is Important
          </h3>
        </div>
        <div className={styles.content}>
          <span className={styles.para}>
            Water is essential for survival. It is needed to support nearly
            every single bodily function including sleep and digesting and
            metabolizing food. It also plays a role in regulating body
            temperature and allowing your muscles and organs to function
            properly.{' '}
          </span>
          <span className={styles.para}>
            Water consumption can even support a healthy weight. Not only is
            water calorie-free, but drinking plenty of water, especially before
            meals, can help you decrease your calorie intake leading to weight
            loss.{' '}
          </span>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h3 className={styles.headingtext}>
            Where Does Eight Glasses a Day Come From?
          </h3>
        </div>
        <div className={styles.content}>
          <span className={styles.para}>
            You might have heard the common advice telling you that we all need
            roughly eight glasses of water per day. This may seem like great
            common sense advice, but is it accurate?{' '}
          </span>
          <span className={styles.para}>
            The eight glasses a day rule comes from an influencer nutritionist
            by the name of Fredrick J. Stare. Although, this general guideline
            was never backed up by science and is still heavily debated to this
            day.
          </span>
          <span className={styles.para}>
            Eight glasses, or 64 ounces, of water daily might not be the right
            amount of water for everyone - general nutrition recommendations
            rarely work as a one-size-fits-all approach.{' '}
          </span>
          <span className={styles.para}>
            According to the National Academy of Science (NAS) and National
            Academy of Medicine (NAM), the recommended guideline for adults is
            125 ounces for men and 91 ounces for women.
          </span>
          <span className={styles.para}>
            However, some of this (~20%) can come from food intake, so the
            adjusted recommendation is closer to 100 ounces for men and 75
            ounces for women - both of which are higher than the eight glasses a
            day!
          </span>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h3 className={styles.headingtext}>
            Are Your Drinking Enough Water?
          </h3>
        </div>
        <div className={styles.content}>
          <span className={styles.para}>
            Tracking your daily water intake using a nutrition tracking app is
            an easy way to tell if you are hitting your water goals each day.
            But you can also pay attention to how you feel and your urine
            output.
          </span>
          <span className={styles.para}>
            Even mild dehydration can negatively impact your workouts and
            health, so making sure you are staying on top of your fluids is key!{' '}
          </span>
          <span className={styles.para}>
            Signs of mild dehydration to watch out for can include:
          </span>
          <ol className={styles.list}>
            <li>Thirst</li>
            <li>Not peeing</li>
            <li>Dark yellow urine</li>
            <li>Dry skin</li>
            <li>Feeling dizzy</li>
            <li>Lack of energy</li>
          </ol>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h3 className={styles.headingtext}>
            How to Increase Your Water Intake
          </h3>
        </div>

        <div className={styles.content}>
          <span className={styles.para}>
            Drinking water alone isn’t the only way to increase your fluid
            intake. You can also improve hydration with water-rich foods.
          </span>
          <span className={styles.para}>
            In fact, nearly 20% of your fluid intake on average comes from other
            foods and beverages - not water!{' '}
          </span>
          <span className={styles.para}>
            Here are five tricks to help you get more water every day and
            improve your hydration.
          </span>
          <ol className={styles.list}>
            <li>Carry around a water bottle</li>
            <li>Try sparkling water</li>
            <li>Cut back on caffeinated drinks</li>
            <li>Eat more fruits and vegetables</li>
            <li>Track your daily intake</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Info;
