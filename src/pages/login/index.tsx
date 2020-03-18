import * as React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { emailAction, passAction } from '../../actions';
import * as styles from './login.module.css';
import { FormProps } from '../../components/forms';

const Form: React.FC<FormProps> = React.lazy(() =>
  import(/* webpackChunkName: "Login-Form"*/ '../../components/forms'),
);

const Index = ({ email, pass }) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    const res = await axios.post('http://localhost:3006/api/auth', {
      email,
      pass,
    });
    if (res.status === 200) {
      let twoWeeks = Date.now() + 6.04e8 * 2;
      let expireDate = new Date(twoWeeks);
      document.cookie = `jwt=${res.data.cookie};expires=${expireDate}`;
      navigate('recipes');
    }
  };
  return (
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
            Field={null}
            option={false}
            thirdAction={null}
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: { email: { email: string }; pass: { pass: string } }) => ({
  email: state.email.email,
  pass: state.pass.pass,
});

export default connect(mapStateToProps)(Index);
