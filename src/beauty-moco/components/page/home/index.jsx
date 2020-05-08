import React from 'react';
import withChildFunction from '../../hoc';
import HeaderCard from './headerCard';

const Home = () => {
    return <HeaderCard />
}

export default withChildFunction()(Home);