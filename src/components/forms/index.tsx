import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as styles from './form.module.css';

export interface FormProps {
  option?: Boolean;
  route?: string;
  clickHandler?: any;
  btnText?: string;
  Field?: any;
  linkContent?: string;
  action?: any;
  dispatch?: any;
  secondAction?: any;
  thirdAction?: any;
}

const Logo: React.FC<{}> = React.lazy(() =>
  import(/* webpackChunkName: "Logo" */ '../../assets/svg/logosvg'),
);
const Lock: React.FC<{}> = React.lazy(() =>
  import(/* webpackChunkName: "LockSVG" */ '../../assets/svg/locksvg'),
);
const Avatar: React.FC<{}> = React.lazy(() =>
  import(/* webpackChunkName: "AviSVG" */ '../../assets/svg/avatarsvg'),
);

const Black: string = `${styles.input} ${styles.black}`;
const Orange: string = `${styles.input} ${styles.orange}`;

const Form: React.FC<FormProps> = ({
  option,
  route,
  clickHandler,
  btnText,
  Field,
  linkContent,
  action,
  dispatch,
  secondAction,
  thirdAction,
}) => (
  <form className={styles.form} onSubmit={e => handleSubmit(e)}>
    <div className="login-svg">
      <React.Suspense fallback="Loading">
        <Logo />
      </React.Suspense>
    </div>
    <div className={styles.control}>
      <Avatar />
      <input
        type="email"
        placeholder="Email"
        className={Black}
        onChange={e => dispatch(action(e.target.value))}
        required
      />
    </div>
    <div className={styles.control}>
      <Lock />
      <input
        type="password"
        placeholder="Password"
        className={Orange}
        onChange={e => dispatch(secondAction(e.target.value))}
        required
      />
    </div>
    {option ? (
      <div className={styles.control}>
        <React.Suspense fallback="Loading...">
          <Field />
        </React.Suspense>
        <input
          type="password"
          placeholder="Confirm Password"
          className={Black}
          onChange={e => dispatch(thirdAction(e.target.value))}
          required
        />
      </div>
    ) : null}
    <Link to={route} rel="prefetch" className={styles.link}>
      {linkContent}
    </Link>
    <div className={styles.control}>
      <button className={styles.btn} onClick={() => clickHandler()}>
        {btnText}
      </button>
    </div>
  </form>
);
const handleSubmit: Function = (e: any) => e.preventDefault();
const mapStateToProps = (state: { email: string; pass: string; confirm: string }) => ({
  email: state.email,
  pass: state.pass,
  confirm: state.confirm,
});
export default connect(mapStateToProps)(Form);
