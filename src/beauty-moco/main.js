import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import App from './components/app';


import './styles/main.scss';


class MainTooth extends React.Component {
  render() {
    return (
        <Router>
        <div className={'wrapper'}>
          <div className="wrapper-inner">
              <Switch>
                <Route exact path="/" render={() => (<Redirect to="/main"/>)}/>
                <Route exact path="/main" component={App} />
              </Switch>
          </div>
        </div>
        </Router>
    );
  }
}


