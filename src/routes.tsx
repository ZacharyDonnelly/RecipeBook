import * as React from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Landing from './pages/landing';

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

const MainRoutes = ({ email: { email } }) => {
  const Loading = setTimeout(() => 500) ? null : 'Loading';
  const [loggedIn, setLoggedIn] = React.useState(false);
  React.useEffect(() => {
    JSON.parse(JSON.stringify(email)).length > 0 ? setLoggedIn(true) : setLoggedIn(false);
  }, []);
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
  );
};

const mapStateToProps = (state: { email: string }) => ({
  email: state.email,
});
// @ts-ignore
export default connect(mapStateToProps)(MainRoutes);
