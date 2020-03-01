import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './form.module.css';

interface FormProps {
  option?: Boolean;
  route: string;
  clickHandler: any;
  btnText: string;
  Field?: any;
}

const Logo = React.lazy(() => import(/* webpackChunkName: "Logo" */ '../../assets/svg/logosvg'));
const Lock = React.lazy(() => import(/* webpackChunkName: "LockSVG" */ '../../assets/svg/locksvg'));
const Avatar = React.lazy(() =>
  import(/* webpackChunkName: "AviSVG" */ '../../assets/svg/avatarsvg'),
);

const Black: string = `${styles.input} ${styles.black}`;
const Orange: string = `${styles.input} ${styles.orange}`;

// eslint-disable-next-line react/prop-types
const Form: React.FunctionComponent<FormProps> = ({
  option,
  route,
  clickHandler,
  btnText,
  Field,
}) => (
  <form className={styles.form} onSubmit={e => handleSubmit(e)}>
    <div className="login-svg">
      <React.Suspense fallback="Loading">
        <Logo />
      </React.Suspense>
    </div>
    <div className={styles.control}>
      <Avatar />
      <input placeholder="Username" className={Black} required />
    </div>
    <div className={styles.control}>
      <Lock />
      <input type="password" placeholder="Password" className={Orange} required />
    </div>
    {option ? (
      <div className={styles.control}>
        <React.Suspense fallback="Loading...">
          <Field />
        </React.Suspense>
        <input type="password" placeholder="Confirm Password" className={Black} required />
      </div>
    ) : null}
    <Link to={route} rel="prefetch" className={styles.link}>
      Don&apos;t have an account? Click here to sign up
    </Link>
    <div className={styles.control}>
      <button className={styles.btn} onClick={() => clickHandler()}>
        {btnText}
      </button>
    </div>
  </form>
);
const handleSubmit: Function = (e: any) => e.preventDefault();

export default Form;
