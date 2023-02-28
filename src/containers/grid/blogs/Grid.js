import Tile from 'components/tiles/blogs/Tile';
import styles from './Grid.module.scss';

const Grid = ({ list }) => {
  return (
    <div className={styles.container}>
      {list.map(item => {
        return <Tile key={item.title} {...item} />;
      })}
    </div>
  );
};

export default Grid;
