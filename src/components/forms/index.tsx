import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { EmailAction, PassAction, ConfirmAction } from '../../actions/types';
import { ActionCreator } from 'redux';
import * as styles from './form.module.css';

export interface FormProps {
  option?: boolean;
  route: string;
  btnText: string;
  linkContent: string;
  clickHandler: () => void;
  Field?: React.FunctionComponent;
  action: ActionCreator<EmailAction>;
  dispatch?: React.Dispatch<EmailAction | PassAction | ConfirmAction>;
  secondAction: ActionCreator<PassAction>;
  thirdAction?: ActionCreator<ConfirmAction>;
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
}) => {
  const [tempEmail, setTempEmail] = React.useState('');
  const handleSubmit: Function = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(action(tempEmail));
  };
  return (
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
          onChange={e => setTempEmail(e.target.value)}
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
        <button type="submit" className={styles.btn} onClick={() => clickHandler()}>
          {btnText}
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state: { email: string; pass: string; confirm: string }) => ({
  email: state.email,
  pass: state.pass,
  confirm: state.confirm,
});
export default connect(mapStateToProps)(Form);
