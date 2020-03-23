import * as React from 'react';
import * as styles from './hero.module.css';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { connect } from 'react-redux';

const Index = ({ loggedIn }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    loggedIn ? navigate('recipes') : navigate('signup');
  };
  return (
    <LazyLoad once>
      <section className={styles.hero}>
        <header className={styles.header}>RecipeBook</header>
        <h5 className={styles.sub}>Recipe Organizer</h5>
        <button className={styles.btn} onClick={() => clickHandler()}>
          Click here to Sign up
        </button>
      </section>
    </LazyLoad>
  );
};
const mapStateToProps = (state: { email: { email: string } }) => ({
  loggedIn: !!state.email.email,
});

export default connect(mapStateToProps)(Index);
