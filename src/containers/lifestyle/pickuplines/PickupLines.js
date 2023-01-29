import styles from './PickupLines.module.scss';
import Ads from 'components/ads/Ads';
import useMobileComponent from 'hooks/useMobileComponent';
import Image from 'next/image';
import React from 'react';

const ImageAttr = {
  height: 200,
  width: 680,
  loading: 'eager',
  style: {
    width: '100%',
  },
};

const PickupLines = ({ category }) => {
  let categoryData =
    require(`content/lifestyle/pickuplines/${category}`).default;
  const isMobile = useMobileComponent();

  return (
    <div className={styles.container}>
      <div className={styles.image}>{getImageByCategory(category)}</div>
      <h1 className={styles.heading}>{categoryData.title}</h1>
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
            <h2>{categoryData.name}</h2>
            <ol>
              {categoryData.content.map((str, index) => {
                if ((index + 1) % 50 == 0) {
                  return (
                    <React.Fragment key={`pickup_${index}`}>
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
        </div>
        <div className={styles.ads}>
          {!isMobile && <Ads type="grid" slot="7906994070" />}
        </div>
      </div>
    </div>
  );
};

export default PickupLines;

const getImageByCategory = cat => {
  switch (cat) {
    case 'formen':
      return <Image src="/images/formen.jpg" alt={cat} {...ImageAttr} />;
    case 'forgirls':
      return (
        <Image src="/assets/images/forgirls.jpg" alt={cat} {...ImageAttr} />
      );
  }
};
