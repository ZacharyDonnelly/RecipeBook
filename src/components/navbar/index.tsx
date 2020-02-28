import * as React from 'react';
import * as styles from './index.css';
import LazyLoad from 'react-lazyload';

// const Logo = React.lazy(() => import(/* webpackChunkName: "Logo"*/ '../../assets/svg/logo'));

const Index: React.FunctionComponent<{}> = () => {
  const [display, setDisplay]: any = React.useState(false);
  const barOne: any = React.useRef<HTMLDivElement>(null);
  const barTwo: any = React.useRef<HTMLDivElement>(null);
  const barThree: any = React.useRef<HTMLDivElement>(null);
  const dropRef: any = React.useRef<HTMLDivElement>(null);
  const clickHandler = () => {
    if (!display) {
      //@ts-ignore
      barTwo.current.style.opacity = 0;
      //@ts-ignore
      barOne.current.classList.add(styles.rotateDown);
      //@ts-ignore
      barThree.current.classList.add(styles.rotateUp);
      //@ts-ignore
      dropRef.current.classList.remove(styles.animateUp);
      //@ts-ignore
      dropRef.current.classList.add(styles.animateDown);
      //@ts-ignore
      barOne.current.style.background = '#000';
      //@ts-ignore
      barThree.current.style.background = '#000';
      setDisplay(!display);
    } else {
      //@ts-ignore
      barTwo.current.style.opacity = 1;
      //@ts-ignore
      barOne.current.classList.remove(styles.rotateDown);
      //@ts-ignore
      barThree.current.classList.remove(styles.rotateUp);
      if (window.scrollY < 800) {
        //@ts-ignore
        barOne.current.style.background = '#fff';
        //@ts-ignore
        barTwo.current.style.background = '#fff';
        //@ts-ignore
        barThree.current.style.background = '#fff';
      }

      //@ts-ignore
      dropRef.current.classList.remove(styles.animateDown);
      //@ts-ignore
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
        // console.log(window.scrollY);
      } else if (scroll < 800) {
        barOne.current.style.background = '#fff';
        barTwo.current.style.background = '#fff';
        barThree.current.style.background = '#fff';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <div className={styles.placeholder}>
      <nav className={styles.nav}>
        {/* <div className={styles.left}>
          <LazyLoad once>
            <div className={styles.logoContainer} />
            <Logo />
          </LazyLoad>
        </div> */}
        <div className={styles.menu} onClick={() => clickHandler()} onBlur={() => clickHandler()}>
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
