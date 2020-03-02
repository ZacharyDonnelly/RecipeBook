import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { emailAction, passAction } from '../../components/actions';
import * as styles from './login.module.css';

const Form = React.lazy(() => import(/* webpackChunkName: "Login-Form"*/ '../../components/forms'));
const Index: React.FunctionComponent<{}> = () => (
  <>
    <Link to="/" className={styles.formLink}>
      Home
    </Link>
    <div className={styles.container} />
    <div className={styles.cardBackground}>
      <h3 className={styles.cardHeader}>Welcome</h3>
      <h3 className={styles.cardSubHeader}>Enjoy your stay!</h3>
      <div className={styles.cardMain}>
        <Form
          route="signup"
          btnText="Login"
          action={emailAction}
          secondAction={passAction}
          clickHandler={handleClick}
          linkContent="Don't have an account? Click here to sign up"
        />
      </div>
    </div>
  </>
);
const handleClick = () => {
  alert('click');
};
const mapStateToProps = (state: { email: string; pass: string }) => ({
  email: state.email,
  pass: state.pass,
});

export default connect(mapStateToProps)(Index);
