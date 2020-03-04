import * as React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from './navbar.module.css';

const Index: React.FC<{}> = () => {
  const [display, setDisplay]: any = React.useState(false);
  const barOne = React.useRef<HTMLDivElement>(null);
  const barTwo: any = React.useRef<HTMLDivElement>(null);
  const barThree = React.useRef<HTMLDivElement>(null);
  const dropRef = React.useRef<HTMLDivElement>(null);
  const linkRef = React.useRef<HTMLAnchorElement>(null);
  const linkRefTwo = React.useRef<HTMLAnchorElement>(null);

  const clickHandler: Function = () => {
    if (!display) {
      barTwo.current.style.opacity = 0;
      barOne.current.classList.add(styles.rotateDown);
      barThree.current.classList.add(styles.rotateUp);
      dropRef.current.classList.add(styles.animateDown);
      dropRef.current.classList.remove(styles.animateUp);
      barOne.current.style.background = '#000';
      barThree.current.style.background = '#000';
      setDisplay(!display);
    } else {
      if (window.scrollY < 800) {
        barOne.current.style.background = '#fff';
        barTwo.current.style.background = '#fff';
        barThree.current.style.background = '#fff';
      }
      barTwo.current.style.opacity = 1;
      barOne.current.classList.remove(styles.rotateDown);
      barThree.current.classList.remove(styles.rotateUp);
      dropRef.current.classList.remove(styles.animateDown);
      dropRef.current.classList.add(styles.animateUp);
      setDisplay(!display);
    }
  };
  React.useLayoutEffect(() => {
    const handleScroll = () => {
      let scroll = window.scrollY;
      if (scroll > 800) {
        barOne.current.style.background = '#000';
        barTwo.current.style.background = '#000';
        barThree.current.style.background = '#000';
        linkRef.current.style.color = '#000';
        linkRefTwo.current.style.color = '#000';
      } else if (scroll < 800) {
        barOne.current.style.background = '#fff';
        barTwo.current.style.background = '#fff';
        barThree.current.style.background = '#fff';
        linkRef.current.style.color = '#fff';
        linkRefTwo.current.style.color = '#fff';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <div className={styles.placeholder}>
      <nav className={styles.nav}>
        <NavLink to="login" className={styles.navLinkOne} ref={linkRef}>
          Login
        </NavLink>
        <NavLink to="signup" className={styles.navLinkTwo} ref={linkRefTwo}>
          Signup
        </NavLink>
        <div className={styles.menu} onClick={() => clickHandler()}>
          <div className={styles.bar} ref={barOne} />
          <div className={styles.bar} ref={barTwo} />
          <div className={styles.bar} ref={barThree} />
        </div>
        <div className={styles.dropdown} ref={dropRef}>
          <span className={styles.dropdownContainer}>
            <div className={styles.dropdownLinkDiv}>
              <span className={styles.dropdownLinkSpan}>
                <NavLink to="/" className={styles.dropdownLink} activeClassName={styles.active}>
                  Home
                </NavLink>
              </span>
              <span className={styles.dropdownLinkSpan}>
                <NavLink to="login" className={styles.dropdownLink} activeClassName={styles.active}>
                  Login
                </NavLink>
              </span>
              <span className={styles.dropdownLinkSpan}>
                <NavLink
                  to="signup"
                  className={styles.dropdownLink}
                  activeClassName={styles.active}>
                  Signup
                </NavLink>
              </span>
            </div>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Index;
