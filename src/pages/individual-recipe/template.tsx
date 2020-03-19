import * as React from 'react';
import * as styles from './individual.module.css';

const Template = ({ title, time, ingredients, directions }) => {
  return (
    <div className={styles.templateContainer}>
      <header className={styles.headerBox}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.tertiaryHeader}>{time}</h2>
      </header>
      <section className={styles.ingredients}>
        <h3 className={styles.ingredientsHeader}>Ingredients</h3>
        <ul className={styles.ingredientsList}>
          <li className={styles.ingredientsItem}>{ingredients}</li>
        </ul>
      </section>
      <div className={styles.directionsContainer}>
        <h3 className={styles.directionsHeader}>Directions</h3>
        <p className={styles.directions}>{directions}</p>
      </div>
    </div>
  );
};

export default Template;
