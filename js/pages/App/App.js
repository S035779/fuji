import React from 'react';
import { Link } from 'react-router-dom';

const App = () => (
  <ul>
  <li><Link to="/bestsell">Best Sellers</Link></li>
  <li><Link to="/discount">Top Rate of Discount</Link></li>
  <li><Link to="/salesrnk">Sales Rnking</Link></li>
  <li><Link to="/releases">New Release</Link></li>
  </ul>
);
export default App;
