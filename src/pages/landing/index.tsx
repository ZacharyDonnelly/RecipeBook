import * as React from 'react';

const Navbar = React.lazy(() =>
  import(/* webpackChunkName: "Navbar"*/ /* webpackPreload: true*/ '../../components/navbar'),
);
const CTA = React.lazy(() => import(/* webpackChunkName: "CTA"*/ '../../components/cta'));

const Landing: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <React.Suspense fallback="Loading...">
        <Navbar />
      </React.Suspense>
      <React.Suspense fallback="Loading...">
        <CTA />
      </React.Suspense>
    </div>
  );
};

export default Landing;
