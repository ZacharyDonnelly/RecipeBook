import * as React from 'react';
import * as styles from './inOnePlace.module.css';
import LazyLoad from 'react-lazyload';

const Index: React.FunctionComponent = () => (
  <>
    <LazyLoad once>
      <section className={styles.inOnePlaceSection}>
        <div className={styles.backgroundTabletImage} />
        <h3 className={styles.inOnePlaceHeader}>All in One Place</h3>
        <h5 className={styles.imageHeader}>Available on any Device!</h5>
        <h5 className={styles.subHeader}>Save recipes from any website or blog.</h5>
        <p className={styles.subText} style={{ marginBottom: '3rem' }}>
          Easily grab that perfect recipe from any website or blog, and leave the rest to us.
          RecipeBook's recipe saver works with any website in English, and many that aren't in
          English.
        </p>
        <h5 className={styles.subHeader}>Your recipes are always at your fingertips.</h5>
        <p className={styles.subText} style={{ marginBottom: '9rem' }}>
          With Android, iOS and web apps, we've got you covered. Desktop, tablet and phone. Online
          and offline. In the kitchen, in the grocery store, at the office -- wherever you need
          them.
        </p>
      </section>
    </LazyLoad>
    <div className={styles.imageGroup}>
      <LazyLoad once>
        <div className={styles.laptopImage} />
      </LazyLoad>
      <LazyLoad once>
        <div className={styles.tabletImage} />
      </LazyLoad>
      <LazyLoad once>
        <div className={styles.phoneImage} />
      </LazyLoad>
    </div>
  </>
);

export default Index;
