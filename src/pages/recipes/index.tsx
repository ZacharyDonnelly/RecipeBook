import * as React from 'react';
import Template from './template';
import * as styles from './recipes.module.css';
import Pasta from '../../assets/svg/categories/pasta';
import Seafood from '../../assets/svg/categories/seafood';
import Burgers from '../../assets/svg/categories/burgers';
import Breakfast from '../../assets/svg/categories/breakfast';
import Lunch from '../../assets/svg/categories/lunch';
import Dinner from '../../assets/svg/categories/dinner';
import Dessert from '../../assets/svg/categories/dessert';
import Sweets from '../../assets/svg/categories/sweets';
import Icecream from '../../assets/svg/categories/icecream';
import Salad from '../../assets/svg/categories/salad';
import Starters from '../../assets/svg/categories/starters';
import Drinks from '../../assets/svg/categories/drinks';
import Bakery from '../../assets/svg/categories/bakery';
import Cakes from '../../assets/svg/categories/cakes';
import Soups from '../../assets/svg/categories/soups';
import Cookies from '../../assets/svg/categories/cookies';

const Recipes: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Food Categories</h1>
      <div className={styles.container}>
        <div className={styles.itemDiv}>
          <Template name="Pasta" svg={<Pasta />} route="pasta" />
        </div>
        <div className={styles.itemDiv}>
          <Template name="Seafood" svg={<Seafood />} route="seafood" />
        </div>
        <div className={styles.itemDiv}>
          <Template name="Burgers" svg={<Burgers />} route="burgers" />
        </div>

        <div className={styles.itemDiv}>
          <Template name="Breakfast" svg={<Breakfast />} route="breakfast" />
        </div>
        <div className={styles.itemDiv}>
          <Template name="Lunch" svg={<Lunch />} route="lunch" />
        </div>
        <div className={styles.itemDiv}>
          <Template name="Dinner" svg={<Dinner />} route="dinner" />
        </div>
        <div className={styles.itemDiv}>
          <Template name="Dessert" svg={<Dessert />} route="dessert" />
        </div>
        <div className={styles.itemDiv}>
          <Template name="Starters" svg={<Starters />} route="starters" />
        </div>
        <div className={styles.itemDiv}>
          <Template name="Soups" svg={<Soups />} route="soups" />
        </div>
        <div className={styles.itemDiv}>
          <Template name="Salad" svg={<Salad />} route="salad" />
        </div>
        <div className={styles.itemDiv}>
          <Template name="Beverages" svg={<Drinks />} route="drinks" />
        </div>
        <div className={styles.itemDiv}>
          <Template name="Sweets" svg={<Sweets />} route="sweets" />
        </div>
        <div className={styles.itemDiv}>
          <Template name="Icecream" svg={<Icecream />} route="icecream" />
        </div>
        <div className={styles.itemDiv}>
          <Template name="Bakery" svg={<Bakery />} route="bakery" />
        </div>
        <div className={styles.itemDiv}>
          <Template name="Cakes" svg={<Cakes />} route="cakes" />
        </div>
        <div className={styles.itemDiv}>
          <Template name="Cookies" svg={<Cookies />} route="cookies" />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
