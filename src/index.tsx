import * as React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import './index.css';

const rootElement = document.getElementById('main');
render(<Routes />, rootElement);
