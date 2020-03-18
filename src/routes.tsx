import * as React from 'react';
import { Routes, Route, Redirect, useNavigate } from 'react-router-dom';
import Landing from './pages/landing';
import { connect } from 'react-redux';
import PrivateRoute from './components/protected-route';

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
  const [loggedIn, setLoggedIn] = React.useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    JSON.parse(JSON.stringify(email)) ? setLoggedIn(true) : setLoggedIn(false);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <React.Suspense fallback={Loading}>
        <Route path="login" element={<Login />}>
          {loggedIn ? navigate('recipes') : <Login />}
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
const mapStateToProps = (state: { email: string }) => ({
  email: state.email,
});
// @ts-ignore
export default connect(mapStateToProps)(MainRoutes);
