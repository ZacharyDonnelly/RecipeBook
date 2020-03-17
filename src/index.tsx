import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import './index.css';

const rootElement: HTMLElement = document.getElementById('main');
render(
  <Router>
    <Routes />
  </Router>,
  rootElement,
);
