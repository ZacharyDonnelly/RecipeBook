import * as React from 'react';
import * as styles from './tagline.module.css';
import { RecipeProps } from '../../assets/svg/recipes';

const Recipes: React.FC<RecipeProps> = React.lazy(() =>
  import(/* webpackChunkName: "CTA Card"*/ '../../assets/svg/recipes'),
);
const Tablet = React.lazy(() =>
  import(/* webpackChunkName: "CTA Photo"*/ '../../assets/svg/tablet'),
);
const Personalize = React.lazy(() =>
  import(/* webpackChunkName: "CTA Tablet"*/ '../../assets/svg/personalize'),
);
const CallToAction = () => {
  const Loading = setTimeout(() => 500) ? null : 'Loading';
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>For home cooks, by home cooks.</h3>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          If you love to cook, you know that the best recipes come from lots of different websites
          and blogs. RecipeBook lets you put all of your favorite recipes from any site into your
          own private collection. Whether you're in the kitchen, the grocery store, or a mountain
          cabin with no internet connection, your recipes are always with you.
        </p>
      </div>
      <React.Suspense fallback={Loading}>
        <div className={styles.group}>
          <div className={styles.svgOne}>
            <h5 className={styles.svgHeader}>All in One Place</h5>
            <Tablet />
          </div>
          <div className={styles.svgTwo}>
            <h5 className={styles.svgHeader}>Personalize</h5>
            <Personalize />
          </div>
          <div className={styles.svgThree} style={{ margin: '0 !important' }}>
            <h5 className={styles.svgHeaderThree}>Kitchen Helper</h5>
            <Recipes width="84px" />
          </div>
        </div>
      </React.Suspense>
    </div>
  );
};

export default CallToAction;
