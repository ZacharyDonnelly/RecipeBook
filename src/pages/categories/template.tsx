import * as React from 'react';
import { useLocation } from 'react-router-dom';
import * as styles from './categories.module.css';

const Template = ({ title, time }) => {
  const location = useLocation();
  let route = location.pathname.slice(9);
  const Icon = React.lazy(() =>
    import(/*webpackChunkName: "Category-Icon"*/ `../../assets/svg/categories/${route}`),
  );
  return (
    <>
      <div className={styles.templateContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.innerCard}>
            <div className={styles.box}>
              <h3 className={styles.title}>{title}</h3>
              <small className={styles.cookingTime}>{time}</small>
            </div>
            <div className={styles.iconContainer}>
              <React.Suspense fallback="Loading">
                <div className={styles.icon}>
                  <Icon />
                </div>
              </React.Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
