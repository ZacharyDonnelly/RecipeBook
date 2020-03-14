import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from '../src/store';
import Landing from './pages/landing';

const Login = React.lazy(() => import(/* webpackChunkName: "Login"*/ './pages/login'));
const Signup = React.lazy(() => import(/* webpackChunkName: "Signup"*/ './pages/signup'));
// const Selection: React.FunctionComponent<{}> = React.lazy(() =>
//   import(/* webpackChunkName: "Selection"*/ '../src/pages/selection'),
// );
const Recipes = React.lazy(() =>
  import(/* webpackChunkName: "Existing-Recipes"*/ './pages/recipes'),
);
const Create = React.lazy(() => import(/* webpackChunkName: "Create-New"*/ './pages/create'));
const store = createStore();
const Loading = setTimeout(() => 500) ? null : 'Loading';
const MainRoutes = () => (
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
        <Route path="recipes" element={<Recipes />} />
      </React.Suspense>
      <React.Suspense fallback={Loading}>
        <Route path="create" element={<Create />} />
      </React.Suspense>
    </Routes>
  </Provider>
);

export default MainRoutes;
