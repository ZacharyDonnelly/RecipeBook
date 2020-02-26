import * as React from 'react';
import * as styles from './index.css';
import Hero from '../../assets/hero.jpeg';

const Index = () => (
  <div className={styles.container}>
    <div className={styles.imgContainer}>
      <img className={styles.img} src={Hero} alt="Bowl of Food" />
    </div>
    <header className={styles.header}>Find that perfect recipe?</header>
    <h5 className={styles.sub}>
      But.. when it came time to cook, you just couldn't remember where you seen it?
    </h5>
  </div>
);

export default Index;
