import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../page/home'
import Header from '../header';
import Masters from '../page/masters';
import Contacts from '../page/contacts';
import Reviews from '../page/reviews';
import Footer from '../footer';
import Services from '../page/services'
import styled from 'styled-components';

const Banner = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const BannerWrap = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  min-height: 0;
  margin: 0 auto;
`;

const Not = styled.h2`
  text-align: center;
  
`;

const App = () => {
    return (

        <Router>
            <Banner>
                <Header />
                <BannerWrap>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/services' exact component={Services} />
                        <Route path='/reviews' exact component={Reviews} />
                        <Route path='/masters' exact component={Masters} />
                        <Route path='/contacts' exact component={Contacts} />
                        <Route render={() => <Not>...Page not found</Not> } />
                    </Switch>
                </BannerWrap>
                <Footer />
            </Banner>
        </Router>

    )
}

export default App;