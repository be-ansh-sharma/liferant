import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
