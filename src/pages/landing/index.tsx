import * as React from 'react';

const Navbar = React.lazy(() =>
  import(/* webpackChunkName: "Navbar"*/ /* webpackPreload: true*/ '../../components/navbar'),
);
const Hero = React.lazy(() => import(/* webpackChunkName: "Hero"*/ '../../components/hero'));
const CTA = React.lazy(() => import(/* webpackChunkName: "CTA"*/ '../../components/cta'));
const Landing: React.FunctionComponent<{}> = () => {
  return (
    <>
      <React.Suspense fallback="Loading...">
        <Navbar />
      </React.Suspense>
      <React.Suspense fallback="Loading...">
        <Hero />
      </React.Suspense>
      <React.Suspense fallback="Loading...">
        <CTA />
      </React.Suspense>
    </>
  );
};

export default Landing;
