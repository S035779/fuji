import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './pages/App/App';
import Bestsell from './pages/Bestsell/Bestsell';
import Discount from './pages/Discount/Discount';
import Salesrnk from './pages/Salesrnk/Salesrnk';
import Releases from './pages/Releases/Releases';
 
ReactDOM.render((<BrowserRouter>
  <Switch>
    <Route exact path="/" component={App}/>>
    <Route path="/bestsell/:size" component={Bestsell}/>
    <Route path="/discount/:size" component={Discount}/>
    <Route path="/salesrnk/:size" component={Salesrnk}/>
    <Route path="/releases/:size" component={Releases}/>
  </Switch>
</BrowserRouter>), document.getElementById('app'));
