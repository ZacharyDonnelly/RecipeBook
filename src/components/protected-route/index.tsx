import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ email: { email }, component: Component, children, ...rest }) {
  const [loggedIn, setLoggedIn] = React.useState(false);
  // JSON.parse(JSON.stringify(email)) ? setLoggedIn(true) : setLoggedIn(false);
  return (
    <Route
      {...rest}
      element={(props: JSX.IntrinsicAttributes) =>
        loggedIn ? <Component {...props} /> : <Redirect to="login" />
      }
    />
  );
}

const mapStateToProps = (state: { email: string }) => ({
  email: state.email,
});
//@ts-ignore
export default connect(mapStateToProps)(PrivateRoute);
