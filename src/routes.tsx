import * as React from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import Landing from './pages/landing';
import { connect } from 'react-redux';

const Login = React.lazy(() => import(/* webpackChunkName: "Login"*/ './pages/login'));
const Signup = React.lazy(() => import(/* webpackChunkName: "Signup"*/ './pages/signup'));

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

const MainRoutes = ({ loggedIn }) => {
  const Loading = setTimeout(() => 500) ? null : 'Loading';
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <React.Suspense fallback={Loading}>
        <Route path="login" element={<Login />} />
      </React.Suspense>
      <React.Suspense fallback={Loading}>
        <Route path="signup" element={<Signup />} />
      </React.Suspense>
      <React.Suspense fallback={Loading}>
        <Route path="recipes" element={<Recipes />}>
          {loggedIn ? <Recipes /> : <Redirect to="login" />}
        </Route>
      </React.Suspense>
      <React.Suspense fallback={Loading}>
        <Route path="recipes/:slug" element={<Categories />}>
          {loggedIn ? <Categories /> : <Redirect to="login" />}
        </Route>
      </React.Suspense>
      <React.Suspense fallback={Loading}>
        <Route path="recipes/:slug/:id" element={<Individual />}>
          {loggedIn ? <Individual /> : <Redirect to="login" />}
        </Route>
      </React.Suspense>
      <React.Suspense fallback={Loading}>
        <Route path="create" element={<Create />}>
          {loggedIn ? <Create /> : <Redirect to="login" />}
        </Route>
      </React.Suspense>
    </Routes>
  );
};

const mapStateToProps = (state: { email: { email: string } }) => ({
  loggedIn: !!state.email.email,
});

export default connect(mapStateToProps)(MainRoutes);
