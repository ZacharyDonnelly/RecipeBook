import * as React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import * as styles from './categories.module.css';

const Index = () => {
  const location = useLocation();
  const route = location.pathname.slice(9);
  return (
    <div>
      <h1 style={{ fontSize: 40 }}>{route}</h1>
    </div>
  );
};

export default Index;
