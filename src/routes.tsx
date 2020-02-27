import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './pages/landing';

// const Landing: React.FunctionComponent<{}> = React.lazy(() =>
//   import(/* webpackChunkName: "Landing"*/ /* webpackPreload: true*/ './pages/landing'),
// );

const Routes: React.FunctionComponent<{}> = () => (
  <Router>
    <Route exact path="/" component={Landing} />
  </Router>
);

export default Routes;
