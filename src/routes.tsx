import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';

// const Landing: React.FunctionComponent<{}> = React.lazy(() =>
//   import(/* webpackChunkName: "Landing"*/ /* webpackPreload: true*/ './pages/landing'),
// );
const Login: React.FunctionComponent<{}> = React.lazy(() =>
  import(/* webpackChunkName: "Login"*/ './pages/login'),
);
const Signup: React.FunctionComponent<{}> = React.lazy(() =>
  import(/* webpackChunkName: "Signup"*/ './pages/signup'),
);
const Loading = setTimeout(() => 500) ? null : 'Loading';
const MainRoutes: React.FunctionComponent<{}> = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <React.Suspense fallback={Loading}>
      <Route path="login" element={<Login />} />
    </React.Suspense>
    <React.Suspense fallback={Loading}>
      <Route path="signup" element={<Signup />} />
    </React.Suspense>
  </Routes>
);

export default MainRoutes;
