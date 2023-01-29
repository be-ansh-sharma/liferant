import Tile from 'components/tiles/category/Tile';
import styles from './Grid.module.scss';

const Grid = ({ list }) => {
  let i;
  return (
    <div className={styles.container}>
      {Object.keys(list).map(item => {
        i = list[item];
        return <Tile key={i.title} {...i} />;
      })}
    </div>
  );
};

export default Grid;
