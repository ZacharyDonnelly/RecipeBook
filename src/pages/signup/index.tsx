import * as React from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emailAction, passAction, confirmAction } from '../../actions';
import { FormProps } from '../../components/forms';
import * as styles from './signup.module.css';
import { stringify } from 'querystring';
const axios = require('axios');

const Form: React.FC<FormProps> = React.lazy(() =>
  import(/* webpackChunkName: "Signup-Form"*/ '../../components/forms'),
);
const Safety: React.FC<{}> = React.lazy(() =>
  import(/* webpackChunkName: "SafetySVG" */ '../../assets/svg/safetysvg'),
);
const Index = props => {
  const navigate = useNavigate();
  const handleClick = () => {
    axios
      .post('http://localhost:3000/api/user', {
        email: JSON.parse(JSON.stringify(props.email.email)),
        password: JSON.parse(JSON.stringify(props.pass.pass)),
      })
      .then(() => navigate('recipes'));
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
            route="login"
            btnText="Signup"
            action={emailAction}
            secondAction={passAction}
            thirdAction={confirmAction}
            //@ts-ignore
            clickHandler={handleClick}
            Field={Safety}
            linkContent="Already have an account? Click here to sign in"
            option
          />
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state: { email: string; pass: string; confirm: string }) => ({
  email: state.email,
  pass: state.pass,
  confirm: state.confirm,
});

export default connect(mapStateToProps)(Index);
