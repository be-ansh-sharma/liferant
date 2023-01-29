import React from 'react';
import Image from 'next/image';
import styles from './TruthORDare.module.scss';
import Playstore from 'components/playstore/Playstore';
import Ads from 'components/ads/Ads';
import { links } from 'config/header.json';
import useMobileComponent from 'hooks/useMobileComponent';

const ImageAttr = {
  height: 500,
  width: 1280,
  loading: 'eager',
  style: {
    width: '100%',
  },
};

const TruthORDare = ({ category }) => {
  let categoryData =
    require(`content/lifestyle/truthordare/${category}`).default;
  const isMobile = useMobileComponent();

  return (
    <div className={styles.container}>
      {getImageByCategory(category)}
      <h1 className={styles.heading}>
        {categoryData.title} {categoryData.name}
      </h1>
      <div className={styles.contentWrapper}>
        <div className={styles.ads}>
          {!isMobile && <Ads type="grid" slot="7906994070" />}
        </div>
        <div className={styles.content}>
          <div
            dangerouslySetInnerHTML={{
              __html: categoryData.description,
            }}></div>
          <div>
            <h2>Truth for {categoryData.name}</h2>
            <ol>
              {categoryData.content.truth.map((str, index) => {
                if ((index + 1) % 75 == 0) {
                  return (
                    <React.Fragment key={`truth_${index}`}>
                      <Ads type="content" />
                      <li className={styles.listItem}>{str}</li>
                    </React.Fragment>
                  );
                }
                return (
                  <li className={styles.listItem} key={`truth_${index}`}>
                    {str}
                  </li>
                );
              })}
            </ol>
          </div>
          <div>
            <Ads type="grid" slot="5827625644" />
          </div>
          <div>
            <h2>Dare for {categoryData.name}</h2>
            <ol>
              {categoryData.content.dare.map((str, index) => {
                if ((index + 1) % 75 == 0) {
                  return (
                    <React.Fragment key={`dare_${index}`}>
                      <Ads type="content" />
                      <li className={styles.listItem}>{str}</li>
                    </React.Fragment>
                  );
                }
                return (
                  <li className={styles.listItem} key={`dare_${index}`}>
                    {str}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <div className={styles.ads}>
          {!isMobile && <Ads type="grid" slot="7906994070" />}
        </div>
      </div>
      <Playstore link={links.truthordare} />
    </div>
  );
};

export default TruthORDare;

const getImageByCategory = cat => {
  switch (cat) {
    case 'teens':
      return <Image src="/images/teens.jpg" alt={cat} {...ImageAttr} />;
    case 'classic':
      return <Image src="/images/classic.jpg" alt={cat} {...ImageAttr} />;
    case 'couplenormal':
      return <Image src="/images/couplenormal.jpg" alt={cat} {...ImageAttr} />;
  }
};
