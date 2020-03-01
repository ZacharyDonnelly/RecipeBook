import * as React from 'react';
import * as styles from './footer.module.css';

const Facebook = React.lazy(() => import('../../assets/svg/facebook'));
const Twitter = React.lazy(() => import('../../assets/svg/twitter'));
const Instagram = React.lazy(() => import('../../assets/svg/instagram'));

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.social}>
      <h5 className={styles.subHeader}>Follow Us</h5>
      <i className={styles.twitter}>
        <Twitter />
      </i>
      <i className={styles.facebook}>
        <Facebook />
      </i>
      <i className={styles.instagram}>
        <Instagram />
      </i>
    </div>
    <span className={styles.copyright}>
      Copyright © 2020. Zach Donnelly, LLC. All Rights Reserved
    </span>
  </footer>
);

export default Footer;
