import * as React from 'react';
import * as styles from './index.css';
const CallToAction = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>For home cooks, by home cooks.</h3>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          If you love to cook, you know that the best recipes come from lots of different websites
          and blogs. ChefTap lets you pull all of your favorite recipes from any site into your own
          private collection. Whether you're in the kitchen, the grocery store, or a mountain cabin
          with no internet connection, your recipes are always with you.
        </p>
      </div>
    </div>
  );
};

export default CallToAction;
