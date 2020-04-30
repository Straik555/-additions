import React from 'react';
import Home from '../page/home'
import Header from '../header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
    return (
        
        <Router>
            <Header />
            <Switch>
                <Route path='/' component={Home} />
            </Switch>  
        </Router>

    )
}

export default App;