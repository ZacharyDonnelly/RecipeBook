import * as React from 'react';
import * as styles from './index.css';
import LazyLoad from 'react-lazyload';

const Index: React.FunctionComponent<{}> = () => {
  return (
    <LazyLoad once>
      <section className={styles.hero}>
        <header className={styles.header}>RecipeBook</header>
        <h5 className={styles.sub}>Recipe Organizer</h5>
        <button className={styles.btn}>Click here to Sign up</button>
      </section>
    </LazyLoad>
  );
};

export default Index;
