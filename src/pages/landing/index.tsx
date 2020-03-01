import * as React from 'react';

const Navbar = React.lazy(() =>
  import(/* webpackChunkName: "Navbar"*/ /* webpackPreload: true*/ '../../components/navbar'),
);
const Hero = React.lazy(() => import(/* webpackChunkName: "Hero"*/ '../../components/hero'));
const CTA = React.lazy(() => import(/* webpackChunkName: "CTA"*/ '../../components/tagline'));
const InOnePlace = React.lazy(() =>
  import(/* webpackChunkName: "Section-One"*/ '../../components/inOnePlace-section'),
);
const Personalize = React.lazy(() =>
  import(/* webpackChunkName: "Personalize"*/ '../../components/personalize-section'),
);
const Kitchen = React.lazy(() =>
  import(
    /* webpackChunkName: "Kitchen"*/ /* webpackPreload: true*/ '../../components/kitchen-section'
  ),
);
const Footer = React.lazy(() => import(/* webpackChunkName: "Footer"*/ '../../components/footer'));
const Landing: React.FunctionComponent<{}> = () => {
  const Loading = setTimeout(() => 500) ? null : 'Loading';
  return (
    <>
      <React.Suspense fallback={Loading}>
        <Navbar />
      </React.Suspense>
      <React.Suspense fallback={Loading}>
        <Hero />
      </React.Suspense>
      <React.Suspense fallback={Loading}>
        <CTA />
      </React.Suspense>
      <React.Suspense fallback={Loading}>
        <InOnePlace />
      </React.Suspense>
      <React.Suspense fallback={Loading}>
        <Personalize />
      </React.Suspense>
      <React.Suspense fallback={Loading}>
        <Kitchen />
      </React.Suspense>
      <React.Suspense fallback={Loading}>
        <Footer />
      </React.Suspense>
    </>
  );
};

export default Landing;
