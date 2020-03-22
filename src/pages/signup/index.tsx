import * as React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emailAction, passAction, confirmAction } from '../../actions';
import { FormProps } from '../../components/forms';
import * as styles from './signup.module.css';

const Form: React.FC<FormProps> = React.lazy(() =>
  import(/* webpackChunkName: "Signup-Form"*/ '../../components/forms'),
);
const Safety = React.lazy(() =>
  import(/* webpackChunkName: "SafetySVG" */ '../../assets/svg/safetysvg'),
);
const Index = ({ email, pass }) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    const { data } = await axios.post('http://localhost:3006/api/user', {
      email,
      pass,
    });
    if (data == 'User Created') {
      navigate('recipes');
    } else {
      alert('The Email you entered is already in use');
    }
  };
  return (
    <>
      <Link to="/" className={styles.formLink}>
        Home
      </Link>
      <div className={styles.container} />
      <div className={styles.cardBackground}>
        <div className={styles.cardMain}>
          <Form
            route="login"
            btnText="Signup"
            action={emailAction}
            secondAction={passAction}
            thirdAction={confirmAction}
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
const mapStateToProps = (state: {
  email: { email: string };
  pass: { pass: string };
  confirm: string;
}) => ({
  email: state.email.email,
  pass: state.pass.pass,
  confirm: state.confirm,
});

export default connect(mapStateToProps)(Index);
