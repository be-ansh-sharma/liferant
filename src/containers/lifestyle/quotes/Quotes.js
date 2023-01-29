import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './Quotes.module.scss';
import quotes from 'content/lifestyle/quotes/content';
import { shuffleArray } from 'utils/Utils';
import Card from 'components/card/Card';
import Ads from 'components/ads/Ads';
import Loading from 'components/loading/Loading';

let ARRAY = quotes;
let INITIALSIZE = 20;
let MAGICNUMBER = 10;

const Quotes = () => {
  let [quoteObject, setQuoteObject] = useState({
    items: ARRAY.slice(0, INITIALSIZE),
    start: 0,
    end: INITIALSIZE,
    hasMore: true,
  });

  const fetchData = () => {
    if (quoteObject.items.length >= ARRAY.length) {
      setQuoteObject({
        ...quoteObject,
        hasMore: false,
      });
      return;
    }

    setQuoteObject({
      ...quoteObject,
      items: [
        ...quoteObject.items,
        ...ARRAY.slice(quoteObject.end, quoteObject.end + INITIALSIZE),
      ],
      start: quoteObject.end,
      end: quoteObject.end + INITIALSIZE,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.headingtext}>
          Mind Blowing Quotes that Will Change Your Life!
        </h1>
      </div>
      <InfiniteScroll
        dataLength={quoteObject.items.length}
        next={fetchData}
        hasMore={quoteObject.hasMore}
        loader={<Loading lines={2} />}
        endMessage={<div className={styles.end}></div>}>
        <div className={styles.wrapper}>
          {quoteObject.items.map((quote, index) => {
            if ((index + 1) % MAGICNUMBER === 0) {
              MAGICNUMBER = MAGICNUMBER == 8 ? 10 : MAGICNUMBER - 1;
              return (
                <React.Fragment key={index}>
                  <div className={styles.adswrapper}>
                    <Ads type="content" />
                  </div>
                  <Card quote={quote} />
                </React.Fragment>
              );
            }
            return <Card quote={quote} key={index} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Quotes;
