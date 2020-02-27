import * as React from 'react';
import * as styles from './index.css';

const Logo = React.lazy(() => import(/* webpackChunkName: "Logo"*/ '../../assets/svg/logo'));

const Index: React.FunctionComponent<{}> = () => {
  const [display, setDisplay]: any = React.useState(false);
  const barOne: any = React.useRef<HTMLDivElement>(null);
  const barTwo: any = React.useRef<HTMLDivElement>(null);
  const barThree: any = React.useRef<HTMLDivElement>(null);
  const dropRef: any = React.useRef<HTMLDivElement>(null);
  const clickHandler = () => {
    if (!display) {
      barTwo.current.style.opacity = 0;
      barOne.current.classList.add(styles.rotateDown);
      barThree.current.classList.add(styles.rotateUp);
      dropRef.current.classList.remove(styles.animateUp);
      dropRef.current.classList.add(styles.animateDown);
      setDisplay(!display);
    } else {
      barTwo.current.style.opacity = 1;
      barOne.current.classList.remove(styles.rotateDown);
      barThree.current.classList.remove(styles.rotateUp);
      dropRef.current.classList.remove(styles.animateDown);
      dropRef.current.classList.add(styles.animateUp);
      setDisplay(!display);
    }
  };
  const Loading = setTimeout(() => 500) ? null : 'Loading';
  return (
    <div className={styles.placeholder}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <React.Suspense fallback={Loading}>
            <Logo />
          </React.Suspense>
        </div>
        <div className={styles.menu} onClick={() => clickHandler()}>
          <div className={styles.bar} ref={barOne} onClick={() => clickHandler()} />
          <div className={styles.bar} ref={barTwo} onClick={() => clickHandler()} />
          <div className={styles.bar} ref={barThree} onClick={() => clickHandler()} />
        </div>
        <div className={styles.dropdown} ref={dropRef}></div>
      </nav>
    </div>
  );
};

export default Index;
