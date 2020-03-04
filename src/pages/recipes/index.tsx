import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Template from './template';
import * as styles from './recipes.module.css';
const Pasta = React.lazy(() =>
  import(/*webpackChunkName: "Pasta-svg"*/ '../../assets/svg/categories/pasta'),
);
const Seafood = React.lazy(() =>
  import(/*webpackChunkName: "Seafood-svg"*/ '../../assets/svg/categories/seafood'),
);
const Burgers = React.lazy(() =>
  import(/*webpackChunkName: "Burgers-svg"*/ '../../assets/svg/categories/burgers'),
);
const Breakfast = React.lazy(() =>
  import(/*webpackChunkName: "Breakfast-svg"*/ '../../assets/svg/categories/breakfast'),
);
const Lunch = React.lazy(() =>
  import(/*webpackChunkName: "Lunch-svg"*/ '../../assets/svg/categories/lunch'),
);
const Dinner = React.lazy(() =>
  import(/*webpackChunkName: "Dinner-svg"*/ '../../assets/svg/categories/dinner'),
);
const Dessert = React.lazy(() =>
  import(/*webpackChunkName: "Dessert-svg"*/ '../../assets/svg/categories/dessert'),
);
const Sweets = React.lazy(() =>
  import(/*webpackChunkName: "Sweets-svg"*/ '../../assets/svg/categories/sweets'),
);
const Icecream = React.lazy(() =>
  import(/*webpackChunkName: "Icecream-svg"*/ '../../assets/svg/categories/icecream'),
);
const Salad = React.lazy(() =>
  import(/*webpackChunkName: "Salad-svg"*/ '../../assets/svg/categories/salad'),
);
const Starters = React.lazy(() =>
  import(/*webpackChunkName: "Starters-svg"*/ '../../assets/svg/categories/starters'),
);
const Drinks = React.lazy(() =>
  import(/*webpackChunkName: "Drinks-svg"*/ '../../assets/svg/categories/drinks'),
);
const Bakery = React.lazy(() =>
  import(/*webpackChunkName: "Bakery-svg"*/ '../../assets/svg/categories/bakery'),
);
const Cakes = React.lazy(() =>
  import(/*webpackChunkName: "Cakes-svg"*/ '../../assets/svg/categories/cakes'),
);
const Soups = React.lazy(() =>
  import(/*webpackChunkName: "Soups-svg"*/ '../../assets/svg/categories/soups'),
);
const Cookies = React.lazy(() =>
  import(/*webpackChunkName: "Cookies-svg"*/ '../../assets/svg/categories/cookies'),
);

const Recipes: React.FunctionComponent<{}> = () => {
  const navigate = useNavigate();
  const Loading = setTimeout(() => 500) ? null : 'Loading';
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Recipes</h1>
      <button className={styles.btn} onClick={() => navigate('create')}>
        Create New
      </button>
      <div className={styles.container}>
        <React.Suspense fallback={Loading}>
          <div className={styles.itemDiv}>
            <Template name="Pasta" icon={<Pasta />} route="pasta" />
          </div>
        </React.Suspense>
        <React.Suspense fallback={Loading}>
          <div className={styles.itemDiv}>
            <Template name="Seafood" icon={<Seafood />} route="seafood" />
          </div>
        </React.Suspense>
        <React.Suspense fallback={Loading}>
          <div className={styles.itemDiv}>
            <Template name="Burgers" icon={<Burgers />} route="burgers" />
          </div>
        </React.Suspense>
        <React.Suspense fallback={Loading}>
          <div className={styles.itemDiv}>
            <Template name="Breakfast" icon={<Breakfast />} route="breakfast" />
          </div>
        </React.Suspense>
        <React.Suspense fallback={Loading}>
          <div className={styles.itemDiv}>
            <Template name="Lunch" icon={<Lunch />} route="lunch" />
          </div>
        </React.Suspense>
        <React.Suspense fallback={Loading}>
          <div className={styles.itemDiv}>
            <Template name="Dinner" icon={<Dinner />} route="dinner" />
          </div>
        </React.Suspense>
        <React.Suspense fallback={Loading}>
          <div className={styles.itemDiv}>
            <Template name="Dessert" icon={<Dessert />} route="dessert" />
          </div>
        </React.Suspense>
        <React.Suspense fallback={Loading}>
          <div className={styles.itemDiv}>
            <Template name="Starters" icon={<Starters />} route="starters" />
          </div>
        </React.Suspense>
        <React.Suspense fallback={Loading}>
          <div className={styles.itemDiv}>
            <Template name="Soups" icon={<Soups />} route="soups" />
          </div>
        </React.Suspense>
        <React.Suspense fallback={Loading}>
          <div className={styles.itemDiv}>
            <Template name="Salad" icon={<Salad />} route="salad" />
          </div>
        </React.Suspense>
        <React.Suspense fallback={Loading}>
          <div className={styles.itemDiv}>
            <Template name="Beverages" icon={<Drinks />} route="drinks" />
          </div>
        </React.Suspense>
        <React.Suspense fallback={Loading}>
          <div className={styles.itemDiv}>
            <Template name="Sweets" icon={<Sweets />} route="sweets" />
          </div>
        </React.Suspense>
        <React.Suspense fallback={Loading}>
          <div className={styles.itemDiv}>
            <Template name="Icecream" icon={<Icecream />} route="icecream" />
          </div>
        </React.Suspense>
        <React.Suspense fallback={Loading}>
          <div className={styles.itemDiv}>
            <Template name="Bakery" icon={<Bakery />} route="bakery" />
          </div>
        </React.Suspense>
        <React.Suspense fallback={Loading}>
          <div className={styles.itemDiv}>
            <Template name="Cakes" icon={<Cakes />} route="cakes" />
          </div>
        </React.Suspense>
        <React.Suspense fallback={Loading}>
          <div className={styles.itemDiv}>
            <Template name="Cookies" icon={<Cookies />} route="cookies" />
          </div>
        </React.Suspense>
      </div>
    </div>
  );
};

export default Recipes;
