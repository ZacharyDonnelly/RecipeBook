import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from '../src/store';
import Landing from './pages/landing';
import storage from 'redux-persist/lib/storage';

const Login = React.lazy(() => import(/* webpackChunkName: "Login"*/ './pages/login'));
const Signup = React.lazy(() => import(/* webpackChunkName: "Signup"*/ './pages/signup'));
// const Selection: React.FunctionComponent<{}> = React.lazy(() =>
//   import(/* webpackChunkName: "Selection"*/ '../src/pages/selection'),
// );
const Recipes = React.lazy(() =>
  import(/* webpackChunkName: "Existing-Recipes"*/ './pages/recipes'),
);
const Categories = React.lazy(() =>
  import(/* webpackChunkName: "Categories"*/ './pages/categories'),
);
const Individual = React.lazy(() =>
  import(/* webpackChunkName: "Individual"*/ './pages/individual-recipe'),
);
const Create = React.lazy(() => import(/* webpackChunkName: "Create-New"*/ './pages/create'));

const store = createStore();
const reduxPersistor = persistStore(store);
const Loading = setTimeout(() => 500) ? null : 'Loading';
const MainRoutes = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={reduxPersistor}>
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
          <Route path="recipes/:slug" element={<Categories />} />
        </React.Suspense>
        <React.Suspense fallback={Loading}>
          <Route path="recipes/:slug/:slug" element={<Individual />} />
        </React.Suspense>
        <React.Suspense fallback={Loading}>
          <Route path="create" element={<Create />} />
        </React.Suspense>
      </Routes>
    </PersistGate>
  </Provider>
);

export default MainRoutes;
