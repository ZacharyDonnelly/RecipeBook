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

const MainRoutes = ({ email, loggedIn }) => {
  const Loading = setTimeout(() => 500) ? null : 'Loading';
  console.log(loggedIn);
  console.log(email);
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <React.Suspense fallback={Loading}>
        <Route path="login" element={<Login />}>
          {loggedIn ? <Redirect to="recipes" /> : <Login />}
        </Route>
      </React.Suspense>
      <React.Suspense fallback={Loading}>
        <Route path="signup" element={<Signup />}>
          {loggedIn ? <Redirect to="recipes" /> : <Signup />}
        </Route>
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
        <Route path="recipes/:slug/:slug" element={<Individual />}>
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
const mapStateToProps = (state: { email: { email: any } }) => ({
  loggedIn: !!state.email.email,
  email: state.email.email,
});
// @ts-ignore
export default connect(mapStateToProps)(MainRoutes);
