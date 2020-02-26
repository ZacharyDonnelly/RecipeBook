import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Landing: React.FunctionComponent<{}> = React.lazy(() =>
  import(/* webpackChunkName: "Landing"*/ /* webpackPreload: true*/ './pages/landing'),
);

const Routes: React.FunctionComponent<{}> = () => (
  <Router>
    <React.Suspense fallback="Loading...">
      <Route exact path="/" component={Landing} />
    </React.Suspense>
  </Router>
);

export default Routes;
