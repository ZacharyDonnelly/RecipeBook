import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from '../src/components/store';
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
const Selection: React.FunctionComponent<{}> = React.lazy(() =>
  import(/* webpackChunkName: "Selection"*/ '../src/pages/selection'),
);
const store = createStore();
const Loading = setTimeout(() => 500) ? null : 'Loading';
const MainRoutes: React.FunctionComponent<{}> = () => (
  <Provider store={store}>
    <Routes>
      <Route path="/" element={<Landing />} />
      <React.Suspense fallback={Loading}>
        <Route path="login" element={<Login />} />
      </React.Suspense>
      <React.Suspense fallback={Loading}>
        <Route path="signup" element={<Signup />} />
      </React.Suspense>
      <React.Suspense fallback={Loading}>
        <Route path="selection" element={<Selection />} />
      </React.Suspense>
    </Routes>
  </Provider>
);

export default MainRoutes;
