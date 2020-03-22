import * as React from 'react';
import * as styles from './hero.module.css';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const Index: React.FC<{}> = () => {
  const navigate = useNavigate();
  const clickHandler = () => navigate('signup');
  return (
    <LazyLoad once>
      <section className={styles.hero}>
        <header className={styles.header}>RecipeBook</header>
        <h5 className={styles.sub}>Recipe Organizer</h5>
        <button className={styles.btn} onClick={() => clickHandler()}>
          Click here to Sign up
        </button>
      </section>
    </LazyLoad>
  );
};

export default Index;
