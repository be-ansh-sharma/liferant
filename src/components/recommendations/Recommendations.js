import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './Recommendations.module.scss';
import CATEGORIES from 'config/categories.json';
import Tile from 'components/tiles/category/Tile';
import useMobileComponent from 'hooks/useMobileComponent';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1250 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1250, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const Recommendations = ({ skip }) => {
  const isMobile = useMobileComponent();
  let item;
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Check Our Other Posts!</h2>
      <Carousel
        swipeable={true}
        ssr={true}
        infinite={true}
        partialVisible={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        responsive={responsive}>
        {Object.keys(CATEGORIES).map(entry => {
          item = CATEGORIES[entry];
          if (entry == skip || entry.id == skip) {
            return null;
          }
          return <Tile key={entry} {...item} />;
        })}
      </Carousel>
    </div>
  );
};

export default Recommendations;
