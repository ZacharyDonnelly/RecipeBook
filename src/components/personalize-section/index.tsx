import * as React from 'react';
import * as styles from './personalize.module.css';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { connect } from 'react-redux';

const Index = ({ loggedIn }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    loggedIn ? navigate('recipes') : navigate('signup');
  };
  return (
    <>
      <LazyLoad once>
        <div className={styles.backgroundSpicesImage} />
      </LazyLoad>
      <h3 className={styles.personalizeHeader}>Personalize</h3>
      <h5 className={styles.personalizeSubHeader}>Make it Your Own</h5>
      <p className={styles.personalizeDescription}>
        It's yours. Add your own personal recipes or any recipe that you may find online. Tweak and
        edit any recipe to make it your own, either on your device or at your desktop. After cooking
        it the first time, you think of a different way to do it next time? Leave yourself a note!
      </p>
      <button className={styles.btn} onClick={() => clickHandler()}>
        Want to see? Click here to signup!
      </button>
    </>
  );
};
const mapStateToProps = (state: { email: { email: string } }) => ({
  loggedIn: !!state.email.email,
});

export default connect(mapStateToProps)(Index);
