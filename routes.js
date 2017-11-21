import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import About from './containers/About';
import Industry from './containers/Industry';
import Academia from './containers/Academia';
import Resume from './containers/Resume';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-52099006-2');

const logPageView = () => {    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
    return null;
};

const NoMatch = () => (
    <div>
        <h2>Whoops</h2>
        <p>Sorry but {location.pathname} didn´t match any pages</p>
    </div>
);

export default () => {
 return (
   <BrowserRouter>
   <div>
   <Route component={logPageView} />
   <Switch>
     <Route exact path='/' component={App}/>
     <Route path='/about_me' component={About}/>
     <Route path='/industry' component={Industry}/>
     <Route path='/academia' component={Academia}/>
     <Route path='/resume' component={Resume}/>
     <Route component={NoMatch} />
   </Switch>
   </div>
   </BrowserRouter>
 )
}
