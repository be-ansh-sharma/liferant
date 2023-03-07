import sortConfig from 'config/sort.json';
import { useState, useId } from 'react';
import Select from 'react-select';
import styles from './Sort.module.scss';

const Sort = ({ sortHandler, config }) => {
  const [selectedOption, setSelectedOption] = useState(sortConfig[config][0]);
  const changeHandler = value => {
    setSelectedOption(value);
    sortHandler(value);
  };
  return (
    <div className={styles.container}>
      <span className={styles.label}>Sorted By</span>
      <Select
        instanceId={useId()}
        className={styles.select}
        value={selectedOption}
        options={sortConfig[config]}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Sort;
