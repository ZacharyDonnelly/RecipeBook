import * as React from 'react';
import * as styles from './kitchen.module.css';
import LazyLoad from 'react-lazyload';

const Index: React.FC<{}> = () => (
  <>
    <LazyLoad once>
      <h3 className={styles.kitchenHeader}>Kitchen Helper</h3>
      <div className={styles.kitchenImage} />
      <ul className={styles.kitchenList}>
        <li className={styles.kitchenItem}>View ingredients and steps side-by-side.</li>
        <li className={styles.kitchenItem}>Easily switch between multiple recipes.</li>
        <li className={styles.kitchenItem}>
          Track your progress: Highlight current step and cross off ingredients.
        </li>
        <li className={styles.kitchenItem}>Display stays lit while you are viewing a recipe.</li>
      </ul>
    </LazyLoad>
  </>
);

export default Index;
