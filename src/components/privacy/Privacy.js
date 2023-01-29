import React from 'react';
import styles from './Privacy.module.scss';

const Privacy = ({ config }) => {
  let policyAttribute = require(`content/privacy/${config}`).default;
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{policyAttribute.heading}</h1>
      <div dangerouslySetInnerHTML={{ __html: policyAttribute.content }}></div>
    </div>
  );
};

export default Privacy;
