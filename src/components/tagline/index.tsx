import * as React from 'react';
import * as styles from './index.css';
import LazyLoad from 'react-lazyload';

const Recipes = React.lazy(() =>
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
          <div className={styles.svgThree}>
            <h5 className={styles.svgHeader}>Kitchen Helper</h5>
            <Recipes />
          </div>
        </div>
      </React.Suspense>
      <LazyLoad once>
        <div className={styles.inOnePlaceImg} />
        <h3 className={styles.inOnePlaceHeader}>All in One Place</h3>
        <h5 className={styles.imageHeader}>Available on any Device!</h5>
      </LazyLoad>
      <div className={styles.imageGroup}>
        <LazyLoad once>
          <div className={styles.secondImage} />
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.thirdImage} />
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.fourthImage} />
        </LazyLoad>
      </div>
      <LazyLoad once>
        <div className={styles.personalizeImage} />
        <h3 className={styles.personalizeHeader}>Personalize</h3>
        <p className={styles.personalDescription}>
          Make it yours Add your own recipes and your own pictures. Tweak and edit any recipe to
          make it your own, either on your device or at your desktop.
        </p>
      </LazyLoad>
    </div>
  );
};

export default CallToAction;
