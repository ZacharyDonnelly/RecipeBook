import * as React from 'react';
import { Link } from 'react-router-dom';
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
        <Form route="signup" btnText="Login" clickHandler={handleClick} />
      </div>
    </div>
  </>
);
const handleClick = () => {
  alert('click');
};

export default Index;
