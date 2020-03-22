import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as styles from './individual.module.css';

const Template = ({ title, time, ingredients, directions }) => {
  const splitIngredients = ingredients.split(/\n/);
  const splitDirections = directions.split(/\n/);

  return (
    <div className={styles.templateContainer}>
      <header className={styles.headerBox}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.tertiaryHeader}>{time}</h2>
      </header>
      <section className={styles.ingredients}>
        <h3 className={styles.ingredientsHeader}>Ingredients</h3>
        <ul className={styles.ingredientsList}>
          {splitIngredients.map((ingredient: string) => {
            return (
              <li className={styles.ingredientsItem} key={uuidv4()}>
                {ingredient}
              </li>
            );
          })}
        </ul>
      </section>
      <div className={styles.directionsContainer}>
        <h3 className={styles.directionsHeader}>Directions</h3>
        <ul>
          {splitDirections.map((direction: string) => {
            return (
              <li className={styles.directions} key={uuidv4()}>
                {direction}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Template;
