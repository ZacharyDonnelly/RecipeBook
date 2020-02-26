import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './index.css';

const Logo = React.lazy(() => import(/* webpackChunkName: "Logo"*/ '../../assets/svg/logo'));

const Index: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.placeholder}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <React.Suspense fallback="...">
            <Logo />
          </React.Suspense>
        </div>
        <Link to="/login" className={styles.right}>
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Index;
