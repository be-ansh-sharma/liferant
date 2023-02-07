import styles from './Output.module.scss';
import { getBirthdayData } from 'utils/Utils';
import { useEffect, useState } from 'react';

const Output = ({ date }) => {
  const [data, setData] = useState();

  useEffect(() => {
    let interval = setInterval(() => {
      setData({
        ...getBirthdayData(date),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.info}>You have wasted </div>
      {!!data && (
        <div>
          {Object.keys(data).map(entry => {
            return (
              <div key={entry} className={styles.tile}>
                <span className={styles.number}>{data[entry]}</span> {entry}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Output;
